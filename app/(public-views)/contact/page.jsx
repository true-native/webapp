import React from 'react'
import { IoCall, IoMail, IoMap } from 'react-icons/io5'
import { Londrina_Solid } from 'next/font/google'

import ContactForm from '../../../components/forms/ContactForm'

const londrina = Londrina_Solid({ subsets: ['latin'], weight: '400', })

const ContactPage = () => {
    return (
		<main className='lg:pt-2'>
			<section className='relative h-[550px] mt-0 mx-auto lg:mt-12 lg:w-11/12 lg:h-[400px] 3xl:w-9/12 3xl:h-[550px] 4xl:w-8/12'>
				<img
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
					<ContactForm />
				</div>
			</section>
		</main>
    )
}

export default ContactPage