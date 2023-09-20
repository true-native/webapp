"use client"

import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, sendPasswordResetEmail } from 'firebase/auth'
import { collection, addDoc, setDoc, doc, getDoc, getDocs, where, query } from 'firebase/firestore'
import { auth, db } from "../config/firebase";
import { useRouter } from "next/navigation";
import Loader from '../components/loaders/Loader'

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                let dbUser = await getDatabaseUser(user.email)
                setUser({
                    uid: dbUser.uid,
                    email: dbUser.email,
                    displayName: dbUser.displayName,
                    type: dbUser.type
                })
            } else {
                setUser(null)
            }
            setIsLoading(false)
        })

        return () => {
            unsubscribe()
        }
    }, [])

    const getDatabaseUser = async (email) => {
        let docs = []
        const q = query(collection(db, "users"), where("email", "==", email));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            doc.id, " => ", docs.push(doc.data());
        });

        return docs[0]
    }

    const signUp = async (email, password, name, type) => {
        let authUser = await createUserWithEmailAndPassword(auth, email, password)
                .then(res => {
                    updateProfile(res.user, { displayName: name })
                    sendChangePasswordEmail(res.user.email)
                    return res.user
                }).catch((err) => {
                    console.log(err)
                })

        return await createUserInDatabase(authUser, name, type)
    }

    const createUserInDatabase = async (authUser, name, type) => {
        let createdUser = true
        let userRef = doc(collection(db, "users"))
        await setDoc(userRef, {
            uid: userRef.id,
            auth_id: authUser.uid,
            displayName: name,
            email: authUser.email,
            type: type
        }).catch((err) => {
            console.log(err)
            createdUser = false
        })

        let userDetails = await getDoc(userRef).then((snapshot) => snapshot.data())

        return {
            user_created: createdUser,
            user_details: userDetails
        }
    }

    const login = async (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const sendChangePasswordEmail = async (email) => {
        if (!email) return

        try {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    console.log("Email sent")
                })
                .catch((err) => {
                    console.error(err)
                })
        } catch (err) {
            console.error(err)
        }
    }

    const logout = async () => {
        setUser(null)
        await signOut(auth)
    }

    return (
        <AuthContext.Provider value={{user, setUser, login, signUp, logout, isLoading, setIsLoading}}>
            {isLoading ? <Loader/> : children}
        </AuthContext.Provider>
    )
}