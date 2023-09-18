"use client"

import RectButton from '../../../components/buttons/RectButton'
import { useAuth } from '../../../contexts/AuthContext'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { IoArrowForward } from 'react-icons/io5'
import { notify, notifyLoading } from '../../../utils/notify'

const AdminPage = () => {
    const { login, user, setUser } = useAuth()
    const router = useRouter()

    useEffect(() => {
        user ? router.push('/products/list') : ''
    },[router, user])

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [emailErrorMessage, setEmailErrorMessage] = useState('')

    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('')

    const [loginError, setLoginError] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()

        if (!email || !password) {
            setEmailError(true)
            setPasswordError(true)
            setEmailErrorMessage('Cannot be empty')
            setPasswordErrorMessage('Cannot be empty')
            return
        }

        setLoginError('')
        const toastId = notifyLoading('Login in...')

        try {
            await login(email, password, user).then((res) => {
                if (res.user) {
                    notify('success', 'Login Successfully', null, null, toastId)
                }
            })
        } catch (error) {
            setLoginError('Incorrect Email or Password!')
            notify('error', 'Could not login', null, null, toastId)
        }
    }

    return (
        <main className="w-full min-h-[80vh] flex items-center justify-center">
            <form className='p-11 flex flex-col w-[500px]'>
                <p className='text-slate-400'>Welcome back,</p>
                <h1 className='text-2xl text-primary-400 font-bold'>Login to your account.</h1>
                <hr className='my-8'/>
                <>
                    <label htmlFor="admin-email" className='text-primary-400 font-bold mb-2'>Email</label>
                    <input type="text" className={`h-[55px] border-2 ${emailError ? 'border-red-400' : 'border-gray-200'} rounded-md px-4 rounded-md' id="admin-email" name='admin-email' aria-label='Email`}
                        onChange={(e) => {
                            setEmail(e.currentTarget.value);
                            setEmailError(e.currentTarget.value ? false : true)
                            setEmailErrorMessage(!e.currentTarget.value ? 'Cannot be empty' : '')
                        }}
                    />
                    {
                        emailErrorMessage && <small className='my-2 text-red-400 font-semibold'>{emailErrorMessage}</small>
                    }
                </>

                <>
                    <label htmlFor="admin-password" className='text-primary-400 font-bold mb-2 mt-4'>Password</label>
                    <input type="password"className={`h-[55px] border-2 ${passwordError ? 'border-red-400' : 'border-gray-200'} rounded-md px-4 rounded-md' id="admin-password" name='admin-password' aria-label='Password`}
                        onChange={(e) => {
                            setPassword(e.currentTarget.value);
                            setPasswordError(e.currentTarget.value ? false : true)
                            setPasswordErrorMessage(!e.currentTarget.value ? 'Cannot be empty' : '')
                        }}
                    />
                    {
                        passwordErrorMessage && <small className='my-2 text-red-400 font-semibold'>{passwordErrorMessage}</small>
                    }
                </>

                <div className='my-4'>
                    <RectButton text="Login" variant='secondary' full iconRight={<IoArrowForward className='text-xl'/>} onClick={(e) => handleLogin(e)}/>
                </div>
                {
                    loginError && (
                        <div className='bg-red-100 rounded-md flex items-center justify-center py-2'>
                            <p className='my-2 text-red-600 font-semibold'>{loginError}</p>
                        </div>
                    )
                }
            </form>
        </main>
    )
}

export default AdminPage