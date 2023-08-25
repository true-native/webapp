"use client"

import RectButton from '../../../../components/buttons/RectButton'
import { useAuth } from '../../../../contexts/AuthContext'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { IoPersonAdd } from 'react-icons/io5'
import PrivateLayout from '../../../(private-views)/_layout'

const CreateUserPage = () => {
    const { signUp, user } = useAuth()
    const router = useRouter()

    const [isLoading, setIsLoading] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [type, setType] = useState('')

    const handleSignUpSubmit = async (e) => {
        e.preventDefault()

        setIsLoading(true)

        if (!name || !email || !password || !type) return;

        try {
            const { user_created, user_details } = await signUp(email, password, name, type).then((res) => res)
            if (user_created) {
                setIsLoading(false)
            }
        } catch (err) {
            console.log(err)
        }
    }

    return user && user.type === 'admin' ? (
        <PrivateLayout>
            <div className='w-12/12 min-h-[100vh] mx-auto 3xl:w-10/12'>
                <form className='p-10'>
                    <h1 className='text-2xl text-primary-400 font-bold'>Create new user</h1>
                    <hr className='my-8'/>

                    <div className='xl:flex xl:justify-between xl:items-start'>
                        <div className='w-12/12 xl:w-6/12'>
                            <div className="flex flex-col">
                                <label htmlFor="new-user-name" className='text-primary-400 font-bold mb-2'>Full Name</label>
                                <input type="text" className='h-[55px] border-2 border-gray-200 mb-4 px-4 rounded-md' id='new-user-name' name='new-user-name' aria-label='Full Name'
                                    onChange={(e) => setName(e.currentTarget.value)}
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="new-user-email" className='text-primary-400 font-bold mb-2'>Email</label>
                                <input type="text" className='h-[55px] border-2 border-gray-200 mb-4 px-4 rounded-md' id='new-user-email' name='new-user-email' aria-label='Email'
                                    onChange={(e) => setEmail(e.currentTarget.value)}
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="new-user-password" className='text-primary-400 font-bold mb-2'>Password</label>
                                <input type="password"className='h-[55px] border-2 border-gray-200 mb-4 px-4 rounded-md' id='new-user-password' name='new-user-password' aria-label='Password'
                                    onChange={(e) => setPassword(e.currentTarget.value)}
                                />
                            </div>

                            <label htmlFor="" className='text-primary-400 font-bold'>Select user type</label>
                            <div className="flex items-center pl-4 border-2 border-gray-200 rounded-md mb-2 mt-2">
                                <input
                                    onClick={(e) => setType(e.currentTarget.value)}
                                    id="radio-master" type="radio" value="admin" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 focus-visible:outline-none focus-visible:border-none"/>
                                <div className='flex flex-col py-3 ml-4'>
                                    <label htmlFor="radio-master" className="w-full text-primary-400 text-base font-bold">Master admin</label>
                                    <small className='text-slate-400'>Can create and edit products and create users.</small>
                                </div>
                            </div>
                            <div className="flex items-center pl-4 border-2 border-gray-200 rounded-md mb-8">
                                <input
                                    onClick={(e) => setType(e.currentTarget.value)}
                                    id="radio-editor" type="radio" value="editor" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 focus-visible:outline-none focus-visible:border-none"/>
                                <div className='flex flex-col py-3 ml-4'>
                                    <label htmlFor="radio-editor" className="w-full text-primary-400 text-base font-bold">Editor</label>
                                    <small className='text-slate-400'>Can create and edit products.</small>
                                </div>
                            </div>

                            <RectButton text="Confirm create user" variant='secondary' full iconRight={<IoPersonAdd className='text-xl'/>} onClick={(e) => handleSignUpSubmit(e)}/>
                        </div>
                    </div>
                </form>
            </div>

            {isLoading ? <span>Loading</span> : null}
        </PrivateLayout>
    ) : (
        <strong>Not allowed</strong>
    )
}

export default CreateUserPage