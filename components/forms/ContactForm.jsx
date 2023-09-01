"use client"

import React, { useState, useRef } from 'react'
import { IoSend } from 'react-icons/io5'

import Input from '../inputs/Input'
import TextArea from '../inputs/TextArea'
import RectButton from '../buttons/RectButton'

const ContactForm = () => {

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

	const handleNameChange = () => {
		!nameRef.current.value || nameRef.current.value.length < 3 ? setNameError(true) : (setNameError(false), setFormData({...formData, name: nameRef.current.value }))
	}

	const handleEmailChange = () => {
		!emailRef.current.value || !handleValidateEmailPattern(emailRef.current.value) ? setEmailError(true) : (setEmailError(false), setFormData({...formData, email: emailRef.current.value }))
	}

	const handleSubjectChange = () => {
		!subjectRef.current.value || subjectRef.current.value.length < 3 ? setSubjectError(true) : (setSubjectError(false), setFormData({...formData, subject: subjectRef.current.value }))
	}

	const handleMessageChange = () => {
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
		<form action="" className='mt-4'>
			<div className="xl:flex xl:flex-col">
				<div className="flex justify-between items-start">
					<label htmlFor="customer-name" className={`text-primary-300 font-semibold mb-2 ${nameError ? 'text-red-400' : ''}`}>Full Name</label>
					{nameError ? <small className='text-red-400 mb-4'>Enter a valid name</small> : ''}
				</div>
				<input type="text" className={`w-full h-[55px] border-2 border-gray-200 mb-4 px-4 rounded-md ${nameError ? 'border-red-400' : ''}`} name='customer-name' aria-label='Full Name'
					ref={nameRef} onChange={handleNameChange} placeholder='Enter your full name'
				/>
			</div>
			<div className="xl:flex xl:flex-col">
				<div className="flex justify-between items-start">
					<label htmlFor="customer-email" className={`text-primary-300 font-semibold mb-2 ${emailError ? 'text-red-400' : ''}`}>Email Address</label>
					{emailError ? <small className='text-red-400 mb-4'>Enter a valid email</small> : ''}
				</div>
				<input type="text" className={`w-full h-[55px] border-2 border-gray-200 mb-4 px-4 rounded-md ${emailError ? 'border-red-400' : ''}`} name='customer-email' aria-label='Email Address'
					ref={emailRef} onChange={handleEmailChange} placeholder='email@sample.com'
				/>
			</div>
			<div className="xl:flex xl:flex-col">
				<div className="flex justify-between items-start">
					<label htmlFor="customer-subject" className={`text-primary-300 font-semibold mb-2 ${subjectError ? 'text-red-400' : ''}`}>Subject</label>
					{subjectError ? <small className='text-red-400 mb-4'>Enter a subject</small> : ''}
				</div>
				<input type="text" className={`w-full h-[55px] border-2 border-gray-200 mb-4 px-4 rounded-md ${subjectError ? 'border-red-400' : ''}`} name='customer-subject' aria-label='Subject'
					ref={subjectRef} onChange={handleSubjectChange} placeholder='What are we talking about?'
				/>
			</div>
			<div className="flex flex-col">
				<div className="flex justify-between items-start">
					<label htmlFor="customer-message" className={`text-primary-300 font-semibold mb-2 ${messageError ? 'text-red-400' : ''}`}>Message</label>
					{messageError ? <small className='text-red-400 mb-4'>Message cannot be empty!</small> : ''}
				</div>
				<textarea name="customer-message" cols="30" rows="5" aria-label='Message'
					ref={messageRef} onChange={handleMessageChange}
					className={`border-2 border-gray-200 mb-4 px-4 py-2 rounded-md resize-none ${messageError ? 'border-red-400' : ''}`} placeholder='Tell me more about it...'
				></textarea>
			</div>
			<RectButton text='Send Message' iconRight={<IoSend/>} variant='secondary' full onClick={(e) => handleSubmit(e)}/>
		</form>
	)
}

export default ContactForm