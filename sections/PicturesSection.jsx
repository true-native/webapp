import React from 'react'
import { Londrina_Solid } from 'next/font/google'
import Image from 'next/image'

const londrina = Londrina_Solid({ subsets: ['latin'], weight: '400', })

const Pictures = () => {
    return (
        <section className="w-11/12 text-center py-12 mx-auto 3xl:w-8/12">
            <div className="grid grid-cols-1 grid-rows-pictures gap-4 md:grid-cols-2 md:grid-rows-2 md:place-items-center 2xl:grid-cols-4 2xl:grid-rows-3">
                <div className="lg:max-w-md 2xl:col-start-1 2xl:col-end-3 2xl:row-start-1 2xl:row-end-3">
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
                                2xl:col-start-1 2xl:col-end-2 2xl:row-start-3 2xl:row-end-4"
                />
                <Image
                    width={600} height={600}
                    src="/resources/images/true-native-pictures-3.webp"
                    alt="Woman picking up a dragon fruit"
                    className="rounded-3xl w-full h-full min-h-full min-w-full object-cover pointer-events-none lg:max-h-[400px]
                                2xl:col-start-3 2xl:col-end-5 2xl:row-start-1 2xl:row-end-4"
                />
                <Image
                    width={600} height={600}
                    src="/resources/images/true-native-pictures-2.webp"
                    alt="Fresh Goji Berry"
                    className="rounded-3xl w-full h-full min-h-full min-w-full object-cover pointer-events-none lg:max-h-[400px]
                                2xl:col-start-2 2xl:col-end-3 2xl:row-start-3 2xl:row-end-4"
                />
            </div>
        </section>
    )
}

export default Pictures