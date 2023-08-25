"use client"

import React, {useRef} from 'react'
import { useInView } from "framer-motion"
import { Londrina_Solid } from 'next/font/google'

const londrina = Londrina_Solid({ subsets: ['latin'], weight: '400', })

const Explorer = () => {
    const exploreRef = useRef(null)
    const isExploreInView = useInView(exploreRef, { once: true })

    return (
        <section ref={exploreRef} className="relative w-full bg-explorer bg-[80%] min-h-[500px] flex flex-col justify-between my-16
                                            md:min-h-[400px] md:bg-[75%] lg:bg-cover 2xl:min-h-[550px] 2xl:bg-bottom 3xl:min-h-[650px] 3xl:bg-center
                                            3xl:my-36 lg:bg-fixed">
            <div className="w-10/12 mx-auto md:w-9/12 md:my-16"
                style={{
                    transform: isExploreInView ? "none" : "translateX(-200px)",
                    opacity: isExploreInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                <h2 className={`${londrina.className} pt-20 text-white max-w-[180px] md:pt-10 text-3xl xl:text-4xl md:max-w-none 2xl:mt-20 3xl:text-6xl 3xl:mt-36`}>
                        GO FURTHER. WE GOT YOUR BACK!
                </h2>
                <p className='text-white py-5 md:max-w-[350px] 3xl:max-w-none'>
                    Explore the wild, then our products section. You will find energy like no place else.
                </p>
            </div>
            <img
                className='absolute -bottom-12 pointer-events-none md:w-[50%] md:ml-16 lg:w-[35%] lg:ml-24 xl:ml-32 3xl:-bottom-20 3xl:ml-48'
                src="/resources/images/explorer-packages.png"
                alt="True Native - Packages"
                style={{
                    transform: isExploreInView ? "none" : "translateX(-200px)",
                    opacity: isExploreInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
            />
        </section>
    )
}

export default Explorer