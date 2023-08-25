import React from 'react'
import { Londrina_Solid } from 'next/font/google'
import Image from 'next/image'

const QualitySection = () => {
    return (
        <section className='bg-gray-50 lg:bg-gradient-to-b lg:from-gray-50 lg:to-white 2xl:my-10 select-none'>
            <div className='flex flex-wrap w-11/12 mx-auto gap-5 py-10 3xl:w-9/12 3xl:py-16'>
                <Image width={1200} height={0} src='/resources/quality/kosher.svg' alt="Certified Kosher" className='my-2 mx-auto max-h-8 w-3/12 md:w-auto xl:max-h-12 3xl:max-h-16'/>
                <Image width={1200} height={0} src='/resources/quality/usda.svg' alt="USDA Certified" className='my-2 mx-auto max-h-8 w-3/12 md:w-auto xl:max-h-12 3xl:max-h-16'/>
                <Image width={1200} height={0} src='/resources/quality/natural.svg' alt="100% Natural" className='my-2 mx-auto max-h-8 w-3/12 md:w-auto xl:max-h-12 3xl:max-h-16'/>
                <Image width={1200} height={0} src='/resources/quality/vegan.svg' alt="Vegan Products" className='my-2 mx-auto max-h-8 w-3/12 md:w-auto xl:max-h-12 3xl:max-h-16'/>
                <Image width={1200} height={0} src='/resources/quality/gmo.svg' alt="Non GMO Products" className='my-2 mx-auto max-h-8 w-3/12 md:w-auto xl:max-h-12 3xl:max-h-16'/>
                <Image width={1200} height={0} src='/resources/quality/gluten.svg' alt="Gluten Free Products" className='my-2 mx-auto max-h-8 w-3/12 md:w-auto xl:max-h-12 3xl:max-h-16'/>
            </div>
        </section>
    )
}

export default QualitySection