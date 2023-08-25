"use client"

import { useRouter } from 'next/navigation'
import { AuthContextProvider, useAuth } from '../../contexts/AuthContext'

export default function RootLayout({children}) {

	const { user, login } = useAuth()
    const router = useRouter()

    useEffect(() => {
        !user ? router.push('/') : ''
    },[router, user])

	return (
		<AuthContextProvider>
			{children}
		</AuthContextProvider>
  	)
}