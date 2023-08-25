"use client"

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { IoCall, IoMail, IoMap, IoSend } from 'react-icons/io5'
import { Londrina_Solid } from 'next/font/google'

import Input from '../../../components/inputs/Input'
import TextArea from '../../../components/inputs/TextArea'
import RectButton from '../../../components/buttons/RectButton'

const londrina = Londrina_Solid({ subsets: ['latin'], weight: '400', })

const ContactPage = () => {

    const nameRef = useRef();
    const emailRef = useRef();
    const subjectRef = useRef();
    const messageRef = useRef();

    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [subjectError, setSubjectError] = useState(false)
    const [messageError, setMessageError] = useState(false)

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const handleInputChange = () => {
        !nameRef.current.value || nameRef.current.value.length <= 3 ? setNameError(true) : (setNameError(false), setFormData({...formData, name: nameRef.current.value }))
        !emailRef.current.value || !handleValidateEmailPattern(emailRef.current.value) ? setEmailError(true) : (setEmailError(false), setFormData({...formData, email: emailRef.current.value }))
        !subjectRef.current.value ? setSubjectError(true) : (setSubjectError(false), setFormData({...formData, subject: subjectRef.current.value }))
        !messageRef.current.value ? setMessageError(true) : (setMessageError(false), setFormData({...formData, message: messageRef.current.value }))
    }

    const handleValidateEmailPattern = (email) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) return true;
        return false
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
		<main className='lg:pt-2'>
			<section className='relative h-[550px] mt-0 mx-auto lg:mt-12 lg:w-11/12 lg:h-[400px] 3xl:w-9/12 3xl:h-[550px] 4xl:w-8/12'>
				<Image
					priority
					height={1080}
					width={1920}
					src="/resources/images/true-native-contact.webp"
					alt="Woman Smiling"
					className='lg:rounded-3xl h-full object-cover object-center pointer-events-none lg:w-full 3xl:object-center'
				/>
				<div className='ml-10 absolute -bottom-[40px] max-w-[200px] md:ml-20 2xl:-bottom-[40px] 2xl:ml-28 3xl:ml-32 4xl:-bottom-[95px]'>
					<h2 className={`${londrina.className} text-white p-0 m-0 text-4xl 4xl:text-5xl`}>GET IN TOUCH. WE ARE</h2>
					<h2 className={`${londrina.className} text-primary-500 p-0 m-0 text-4xl 4xl:text-5xl`}>GLAD TO HELP</h2>
				</div>
			</section>
			<section className='mt-[30px] flex flex-col lg:flex-row lg:items-start w-4/5 lg:my-28 lg:mt-40 lg:w-10/12 mx-auto 3xl:mt-40 3xl:w-8/12 4xl:w-6/12'>
				<div className='w-12/12 lg:w-6/12'>
					<h2 className={`${londrina.className} text-2xl mt-16 lg:mt-0 2xl:text-4xl text-primary-400`}>Contact Information</h2>
					<div className='lg:my-16'>
						<div>
							<div className='flex items-center mt-4'>
								<IoMail className='text-secondary-500'/>
								<h2 className='ml-2 font-semibold text-primary-300'>Email</h2>
							</div>
							<p className='text-slate-500 ml-6'>info@truenative.com</p>
						</div>
						<hr className='h-px my-4 bg-gray-200 border-0 w-12/12 md:w-4/12 lg:w-10/12'/>
						<div>
							<div className='flex items-center mt-4'>
								<IoCall className='text-secondary-500'/>
								<h2 className='ml-2 font-semibold text-primary-300'>Phone</h2>
							</div>
							<p className='text-slate-500 ml-6'>800 968 9467</p>
						</div>
						<hr className='h-px my-4 bg-gray-200 border-0 w-12/12 md:w-4/12 lg:w-10/12'/>
						<div>
							<div className='flex items-center mt-4'>
								<IoMap className='text-secondary-500'/>
								<h2 className='ml-2 font-semibold text-primary-300'>Location</h2>
							</div>
							<p className='text-slate-500 ml-6'>Florida - United States</p>
						</div>
					</div>
				</div>
				<div className='mb-8 w-12/12 lg:w-6/12'>
					<h2 className={`${londrina.className} text-2xl mt-16 lg:mt-0 2xl:text-4xl text-primary-400`}>Send us a message</h2>
					<form action="" className='mt-4'>
						<Input
							type='text'
							label="Name"
							name="name"
							placeholder="Type in your name"
							aria-label="Name"
							minlength="5"
							inputRef={nameRef}
							onchange={handleInputChange}
							error={nameError}
							errorMessage="Name cannot be empty!"
						/>
						<Input
							type='email'
							label="Email"
							name="email"
							placeholder="Type in your email"
							aria-label="Email"
							inputRef={emailRef}
							onchange={handleInputChange}
							error={emailError}
							errorMessage="Email cannot be empty!"
						/>
						<Input
							type='text'
							label="Subject"
							name="subject"
							placeholder="What is going on?"
							aria-label="Subject"
							inputRef={subjectRef}
							onchange={handleInputChange}
							error={subjectError}
							errorMessage="Subject cannot be empty!"
						/>
						<TextArea
							label="Message"
							name="message"
							placeholder="Tell me more..."
							aria-label="Message"
							rows="5"
							inputRef={messageRef}
							onchange={handleInputChange}
							error={messageError}
							errorMessage="Message cannot be empty!"
						/>
						<RectButton text='Send Message' iconRight={<IoSend/>} variant='secondary' full/>
					</form>
				</div>
			</section>
		</main>
    )
}

export default ContactPage