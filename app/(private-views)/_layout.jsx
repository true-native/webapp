"use client"

import { AuthContextProvider, useAuth } from '../../contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function PrivateLayout({children}) {
    const {user, setUser} = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!user) {
            setUser(null)
            router.push('/admin')
            return;
        }
    },[router, user])

	return (
        <AuthContextProvider>
            {children}
        </AuthContextProvider>
  	)
}