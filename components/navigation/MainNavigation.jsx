"use client"

import { IoLogoInstagram, IoLogoFacebook, IoCallOutline } from 'react-icons/io5'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const MainNavigation = () => {
    const router = useRouter();
    const currentRoute = router.pathname;

    return (
        <nav className='hidden h-[100px] w-full lg:flex fixed z-20 top-0 left-0 bg-white shadow-lg shadow-gray-100'>
            <div className='w-full px-4 3xl:w-10/12 3xl:mx-auto 3xl:px-10 flex items-center justify-between'>
				<ul className='flex items-center h-full'>
					<li className='h-full flex items-center px-4 text-primary-500 font-semibold border-b-2 border-b-transparent hover:text-primary-200 hover:border-b-primary-200 transition-all duration-300'>
						<Link href="/about" className={`${currentRoute === "/about" ? styles.active_link: ""}`}>About</Link>
					</li>
					<li className='h-full flex items-center px-4 text-primary-500 font-semibold border-b-2 border-b-transparent hover:text-primary-200 hover:border-b-primary-200 transition-all duration-300'>
						<Link href="/contact" className={`${currentRoute === "/contact" ? styles.active_link: ""}`}>Contact</Link>
					</li>
					<li className='h-full flex items-center px-4 text-primary-500 font-semibold border-b-2 border-b-transparent hover:text-primary-200 hover:border-b-primary-200 transition-all duration-300'>
						<Link href="/products" className={`${currentRoute === "/products" ? styles.active_link: ""}`}>Products</Link>
					</li>
				</ul>

				<Link href="/">
					<Image
						src="/true-native-logo.svg"
						alt="True Native"
						width={170}
						height={120}
					/>
				</Link>

				<div className='flex items-center gap-6'>
					<span className='flex items-center text-primary-500 font-semibold'>
						<IoCallOutline/>
						<span className='ml-2'>800 968 9467</span>
					</span>
					<div className='flex items-center text-primary-500'>
						<Link href="https://www.instagram.com/naturesfoodz/" target="_blank" className='mx-2 text-xl'><IoLogoInstagram/></Link>
						<Link href="https://www.facebook.com/naturesfoodz" target="_blank" className='mx-2 text-xl'><IoLogoFacebook/></Link>
					</div>
				</div>
			</div>
        </nav>
    )
}

export default MainNavigation