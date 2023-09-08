"use client"

import { AuthContextProvider, useAuth } from '../../contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import ProductImageModal from '../../components/modals/ProductImageModal'

export default function PrivateLayout({children}) {
    const {user, setUser} = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!user) {
            router.push('/')
            setUser(null)
            return;
        }
    },[router, user])

	return (
        <AuthContextProvider>
            {children}
        </AuthContextProvider>
  	)
}