"use client"

import RectButton from '../../../components/buttons/RectButton'
import { useAuth } from '../../../contexts/AuthContext'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { IoArrowForward } from 'react-icons/io5'

const AdminPage = () => {
    const { login, user, setUser } = useAuth()
    const router = useRouter()

    useEffect(() => {
        user ? router.push('/products/list') : ''
    },[router, user])

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()

        if (!email || !password) return

        try {
            await login(email, password, user)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main className="w-full min-h-[80vh] flex items-center justify-center">
            <form className='p-11 flex flex-col w-[500px]'>
                <p className='text-slate-400'>Welcome back,</p>
                <h1 className='text-2xl text-primary-400 font-bold'>Login to your account.</h1>
                <hr className='my-8'/>
                <label htmlFor="admin-email" className='text-primary-400 font-bold mb-2'>Email</label>
                <input type="text" className='h-[55px] border-2 border-gray-200 mb-4 px-4 rounded-md' id="admin-email" name='admin-email' aria-label='Email'
                    onChange={(e) => setEmail(e.currentTarget.value)}
                />

                <label htmlFor="admin-password" className='text-primary-400 font-bold mb-2'>Password</label>
                <input type="password"className='h-[55px] border-2 border-gray-200 mb-4 px-4 rounded-md' id="admin-password" name='admin-password' aria-label='Password'
                    onChange={(e) => setPassword(e.currentTarget.value)}
                />

                <RectButton text="Login" variant='secondary' full iconRight={<IoArrowForward className='text-xl'/>} onClick={(e) => handleLogin(e)}/>
            </form>
        </main>
    )
}

export default AdminPage