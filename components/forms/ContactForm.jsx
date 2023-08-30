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
	)
}

export default ContactForm