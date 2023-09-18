"use client"

import React, { useRef } from 'react'
import { Londrina_Solid } from 'next/font/google'
import { useInView } from 'framer-motion'
import Image from 'next/image'

const londrina = Londrina_Solid({ subsets: ['latin'], weight: '400', })

const Pictures = () => {
    const picturesRef = useRef(null)
    const isPicturesSectionInView = useInView(picturesRef, { once: true })

    return (
        <section ref={picturesRef} className="w-11/12 text-center py-12 mx-auto xl:w-10/12 2xl:w-9/12 3xl:w-8/12">
            <div className="grid grid-cols-1 grid-rows-pictures gap-6 md:grid-cols-2 md:grid-rows-2 md:place-items-center 2xl:grid-cols-5 2xl:grid-rows-3">
                <div className="lg:max-w-md 2xl:col-start-1 2xl:col-end-3 2xl:row-start-1 2xl:row-end-3"
                    style={{
                        transform: isPicturesSectionInView ? "none" : "translateX(-200px)",
                        opacity: isPicturesSectionInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                >
                    <Image
                        width={50} height={50}
                        src="/resources/icons/true-native-leaf.svg"
                        alt="Leaf"
                        className='mx-auto py-2'
                    />
                    <h2 className={`${londrina.className} text-primary-500 text-3xl xl:text-4xl`}>FROM THE FARMS TO YOUR TABLE</h2>
                    <p className='text-slate-400 md:py-5'>
                        Carefully selected fruits and vegetables to deliver the best products you can get.
                    </p>
                </div>
                <Image
                    width={600} height={600}
                    src="/resources/images/true-native-pictures-1.webp"
                    alt="Fresh Fruit Bowl"
                    className="rounded-3xl w-full h-full min-h-full min-w-full object-cover pointer-events-none lg:max-h-[400px]
                                2xl:col-start-1 2xl:col-end-3 2xl:row-start-3 2xl:row-end-4"
                    style={{
                        transform: isPicturesSectionInView ? "none" : "translateX(-200px)",
                        opacity: isPicturesSectionInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                />
                <Image
                    width={600} height={600}
                    src="/resources/images/true-native-pictures-3.webp"
                    alt="Woman picking up a dragon fruit"
                    className="rounded-3xl w-full h-full min-h-full min-w-full object-cover pointer-events-none lg:max-h-[400px]
                                2xl:col-start-4 2xl:col-end-6 2xl:row-start-1 2xl:row-end-4"
                    style={{
                        transform: isPicturesSectionInView ? "none" : "translateY(200px)",
                        opacity: isPicturesSectionInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                />
                <Image
                    width={600} height={600}
                    src="/resources/images/true-native-pictures-2.webp"
                    alt="Fresh Goji Berry"
                    className="rounded-3xl w-full h-full min-h-full min-w-full object-cover pointer-events-none lg:max-h-[400px]
                                2xl:col-start-3 2xl:col-end-4 2xl:row-start-2 2xl:row-end-4"
                    style={{
                        transform: isPicturesSectionInView ? "none" : "translateY(-100px)",
                        opacity: isPicturesSectionInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                />
            </div>
        </section>
    )
}

export default Pictures