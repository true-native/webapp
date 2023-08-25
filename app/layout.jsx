"use client"

import { Poppins } from 'next/font/google'

import './globals.css'

import MainNavigation from '../components/navigation/MainNavigation'
import MobileNavigation from '../components/navigation/MobileNavigation'
import Footer from '../components/footer/Footer'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthContextProvider } from '../contexts/AuthContext'
import { Toaster } from 'react-hot-toast'

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

const queryClient = new QueryClient()

export default function RootLayout({ children }) {

    return (
		<html lang="en" className={poppins.className}>
			<body className='relative top-[90px] lg:top-[100px]'>
				<AuthContextProvider>
					<QueryClientProvider client={queryClient}>
						<MainNavigation/>
						<MobileNavigation />
							{children}
						<Footer/>
					</QueryClientProvider>
				</AuthContextProvider>
				<Toaster />
			</body>
		</html>
    )
}
