"use client"

import React from 'react'
import Image from 'next/image'
import { Londrina_Solid } from 'next/font/google'

const londrina = Londrina_Solid({ subsets: ['latin'], weight: '400', })

const AboutPage = () => {
    return (
		<main className="lg:pt-2">
			<section className="relative h-[550px] mt-0 mx-auto lg:mt-12 lg:w-11/12 lg:h-[400px] 3xl:w-9/12 3xl:h-[550px] 4xl:w-8/12">
				<Image
					priority
					height={1080}
					width={1920}
					src="/resources/images/true-native-about.webp"
					alt="Farmer Smiling"
					className='lg:rounded-3xl h-full object-cover object-[90%] pointer-events-none lg:w-full 3xl:object-center'
				/>
				<div className="ml-10 absolute -bottom-[80px] max-w-[200px] md:ml-20 2xl:-bottom-[80px] 2xl:ml-28 3xl:ml-32 4xl:-bottom-[95px]">
					<h2 className={`${londrina.className} text-white p-0 m-0 text-4xl 4xl:text-5xl`}>WE ARE COMMITTED TO ALWAYS</h2>
					<h2 className={`${londrina.className} text-primary-500 p-0 m-0 text-4xl 4xl:text-5xl`}>DELIVER EXCELLENCE</h2>
				</div>
			</section>
			<section className='flex flex-col lg:flex-row lg:items-start w-4/5 lg:my-28 lg:mt-40 lg:w-10/12 mx-auto 3xl:mt-40 3xl:w-8/12 4xl:w-6/12'>
				<div className="lg:px-4 xl:px-8 2xl:px-12">
					<h2 className={`${londrina.className} text-primary-400 text-2xl py-5 mt-28 lg:mt-0 2xl:text-4xl`}>Our Story</h2>
					<p className='text-slate-500 mb-5'>
						True Native was established in 2020 in Miami, Florida, with the commitment of offering the best tropical fruits,
						super-foods, dry goods and more to the public.
					</p>
					<p className='text-slate-500 mb-5'>
						There are lots of other brands of the same segment out there, but none of them compare to our level of excellence.
					</p>
					<strong className='text-slate-500'>
						Our motto is: The best or nothing.
					</strong>
					<p className='text-slate-500 mt-2 mb-5'>
						Whenever you see on the islands or online a True Native product, rest assured that is a 100% quality product.
					</p>
				</div>
				<div className="lg:px-4 xl:px-8 2xl:px-12 pb-8">
					<h2 className={`${londrina.className} text-primary-400 text-2xl py-5 2xl:text-4xl`}>Our Mission</h2>
					<p className='text-slate-500 mb-5'>
						Our mission, since the launch of our brand, has been to deliver to the public great quality products
						in a variety of segments within the healthy foods spectrum.
					</p>
					<p className='text-slate-500 mb-5'>
						Not only to offer the best of the best, we want to go a step further and help the environment as
						we grow organic more and more.
					</p>
					<p className='text-slate-500 mb-5'>
						We are also committed to only buy products we do not grow ourselves, from organic and environmental friendly producers.
					</p>
					<p className='text-slate-500 mb-5'>
						We want to be the future and only way foods should be cultivated.
					</p>
				</div>
			</section>
		</main>
    )
}

export default AboutPage