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
				<div className='w-12/12 lg:w-6/12 order-2 lg:order-1'>
					<h2 className={`${londrina.className} text-2xl mt-16 lg:mt-0 2xl:text-4xl text-primary-400`}>Contact Information</h2>
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
					<div className='w-full h-[400px] md:h-[300px] lg:w-11/12 lg:h-[280px] 2xl:h-[300px] 2xl:w-10/12 my-8 rounded-2xl overflow-clip lg:shadow-2xl outline outline-slate-300'>
						<iframe
							title='True Native Map'
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d136188.7943540614!2d-80.16726275164365!3d26.236632429530054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d902d941884489%3A0x3b611c5e76ae74f3!2sPompano%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1693594902878!5m2!1sen!2sus"
							width="100%" height="100%"
							allowFullScreen="" loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						>
						</iframe>
					</div>
				</div>
				<div className='mb-8 w-12/12 lg:w-6/12 order-2 lg:order-1'>
					<h2 className={`${londrina.className} text-2xl mt-8 lg:mt-0 2xl:text-4xl text-primary-400`}>Send us a message</h2>
					<ContactForm />
				</div>
			</section>
		</main>
    )
}

export default ContactPage