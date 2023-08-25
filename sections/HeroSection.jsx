import { Londrina_Solid } from 'next/font/google'
import { IoLeaf } from 'react-icons/io5'
import RectButton from '../components/buttons/RectButton'
import Image from 'next/image'

const londrina = Londrina_Solid({ subsets: ['latin'], weight: '400', })

const HeroSection = () => {
    return (
        <div className='w-11/12 mx-auto py-5 flex flex-col md:w-10/12 lg:flex-row lg:items-center 3xl:w-9/12'>
            <div>
                <Image priority src='/resources/hero/ornament_1.svg' height={120} width={120} alt="Decorative Line" aria-hidden='true' className='w-12 py-3 md:ml-20 md:w-16 lg:ml-0 2xl:w-20 2xl:py-5 3xl:w-24'/>
                <h1 className={`${londrina.className} text-primary-500 text-3xl text-center md:text-4xl lg:text-left lg:mr-10 xl:text-5xl 2xl:mr-24 3xl:text-7xl`}>
                    THE TASTE OF
                    <span className={`${londrina.className} text-primary-500 text-3xl mx-2 relative md:text-4xl xl:text-5xl 3xl:text-7xl`}>
                        NATURE
                        <Image priority src='/resources/hero/ornament_3.svg' height={120} width={120} alt="Decorative underline" aria-hidden='true' className='absolute right-0 -bottom-1 w-24 lg:w-28 xl:w-36 3xl:w-56'/>
                    </span>
                    AS ITS BEST.
                </h1>
                <p className='text-slate-400 text-center py-5 lg:text-left lg:max-w-xl xl:max-w-sm'>
                    Feel the true benefits of organic, best quality super-foods to ever be packaged.
                </p>
                <div className="flex items-center justify-center lg:justify-start">
                    <RectButton text="View Products" iconLeft={<IoLeaf/>} variant='secondary' link="./products"/>
                </div>
            </div>
            <div className='flex items-center gap-5 my-10 mx-5 md:w-9/12 md:mx-auto lg:justify-end 3xl:gap-8'>
                <div className="flex flex-col gap-5 justify-end 3xl:gap-8 4xl:ml-auto">
                    <div className='relative'>
                        <Image priority src='/resources/hero/hero_1.webp' alt="Acai Bowl" height={120} width={120} className='shadow-xl rounded-xl xl:rounded-3xl md:w-[200px] 4xl:w-[280px]'/>
                    </div>
                    <div className='relative md:ml-auto'>
                        <Image priority src='/resources/hero/hero_2.webp' alt="Raspberries" width={120} height={120} className='shadow-xl rounded-xl md:w-[150px] 4xl:w-[220px] xl:rounded-3xl'/>
                        <Image priority src='/resources/hero/ornament_2.svg' alt="Decorative Dots" aria-hidden='true' width={120} height={120} className='w-16 absolute -bottom-5 -left-5 -z-10 xl:w-24 xl:-bottom-10 xl:-left-10 3xl:w-32 3xl:-bottom-16 3xl:-left-16'/>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className='relative'>
                        <Image priority src='/resources/hero/hero_3.webp' alt="Smoothie Bowls" width={180} height={100} className='shadow-xl rounded-xl xl:rounded-3xl md:w-[250px] 4xl:w-[360px]'/>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className='relative'>
                        <Image priority src='/resources/hero/hero_4.webp' alt="Woman with Smoothie" width={100} height={120} className='shadow-xl rounded-xl xl:rounded-3xl md:w-[160px] 4xl:w-[220px]'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection