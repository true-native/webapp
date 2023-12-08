"use client"

import { IoLogoInstagram, IoLogoFacebook, IoCall, IoWalk, IoHomeOutline, IoLeafOutline, IoMailOutline, IoBagHandleOutline, IoList, IoGridOutline, IoBagAddOutline, IoPersonAddOutline, IoArchive, IoArrowDown, IoChevronDown, IoTabletLandscape, IoLockClosed, IoPeopleOutline } from 'react-icons/io5'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { useAuth } from '../../contexts/AuthContext';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const MainNavigation = () => {
	const router = useRouter()
	const { user, logout } = useAuth()
    const currentRoute = usePathname();

	const handleLogout = async (e) => {
        e.preventDefault()

        logout()
		router.push('/admin')
    }

    return (
        <nav className='hidden h-[100px] w-full lg:flex fixed z-20 top-0 left-0 bg-white shadow-nav '>
            <div className={`w-full px-4 3xl:w-11/12 3xl:mx-auto 3xl:px-10 flex items-center ${user ? 'justify-between' : ''}`}>
				<ul className={`flex items-center h-full ${!user ? '4xl:w-4/12' : ''}`}>
					<li className={`
						h-full flex items-center px-4 2xl:px-6 font-semibold border-b-2 transition-all duration-300
						${currentRoute === "/" || currentRoute === undefined ? 'text-secondary-500 border-b-secondary-500 hover:text-secondary-200 hover:border-b-secondary-200' : 'border-b-transparent text-primary-500 hover:text-primary-200 hover:border-b-primary-200'}
					`}>
						<IoHomeOutline className='text-2xl text-secondary-500 mr-2'/>
						<Link href="/" className="w-full h-full flex items-center">Home</Link>
					</li>
					<li className={`
						h-full flex items-center px-4 2xl:px-6 font-semibold border-b-2 transition-all duration-300
						${currentRoute === "/about-us" ? 'text-secondary-500 border-b-secondary-500 hover:text-secondary-200 hover:border-b-secondary-200' : 'border-b-transparent text-primary-500 hover:text-primary-200 hover:border-b-primary-200'}
					`}>
						<IoLeafOutline className='text-2xl text-secondary-500 mr-2'/>
						<Link href="/about-us" className="w-full h-full flex items-center">About</Link>
					</li>
					<li className={`
						h-full flex items-center px-4 2xl:px-6 font-semibold border-b-2 transition-all duration-300
						${currentRoute === "/contact" ? 'text-secondary-500 border-b-secondary-500 hover:text-secondary-200 hover:border-b-secondary-200' : 'border-b-transparent text-primary-500 hover:text-primary-200 hover:border-b-primary-200'}
					`}>
						<IoMailOutline className='text-2xl text-secondary-500 mr-2'/>
						<Link href="/contact" className="w-full h-full flex items-center">Contact</Link>
					</li>
					<li className={`
						h-full flex items-center px-4 2xl:px-6 font-semibold border-b-2 transition-all duration-300
						${currentRoute === "/products" ? 'text-secondary-500 border-b-secondary-500 hover:text-secondary-200 hover:border-b-secondary-200' : 'border-b-transparent text-primary-500 hover:text-primary-200 hover:border-b-primary-200'}
					`}>
						<IoBagHandleOutline className='text-2xl text-secondary-500 mr-2'/>
						<Link href="/products" className="w-full h-full flex items-center">Products</Link>
					</li>
				</ul>

				<Link href="/" className={`${!user ? 'xl:w-4/12' : ''}`}>
					<Image
						src="/true-native-logo.svg"
						alt="True Native"
						priority
						width={170}
						height={120}
						className={`${!user ? 'mx-auto' : ''}`}
					/>
				</Link>

				{
					user ? (
						<div className={`hidden h-full lg:flex items-center ${!user ? '4xl:w-4/12 justify-end' : ''}`}>
							<Menu as="div" className="relative mr-4">
								<div>
								<Menu.Button className="flex w-full justify-between items-center rounded-md bg-slate-100 text-primary-500 font-semibold h-[50px] px-4 hover:shadow-lg">
									<IoLockClosed
										className="text-lg text-primary-200 mr-2"
										aria-hidden="true"
									/>
									Admin Section
								</Menu.Button>
								</div>
								<Transition
									as={Fragment}
									enter="transition ease-out duration-100"
									enterFrom="transform opacity-0 scale-95"
									enterTo="transform opacity-100 scale-100"
									leave="transition ease-in duration-75"
									leaveFrom="transform opacity-100 scale-100"
									leaveTo="transform opacity-0 scale-95"
								>
								<Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
									<div className="px-2 py-2 ">
										<Menu.Item className="flex items-center gap-2">
											{({ active }) => (
												<Link
													href="/products/list"
													className={`${active ? 'bg-slate-100' : ''} group flex w-full items-center rounded-md px-2 py-2 text-md font-semibold`}
												>
													<IoGridOutline className={`text-lg ${active ? 'text-primary-300' : 'text-secondary-500'}`}/>
													Products List
												</Link>
											)}
										</Menu.Item>
										<Menu.Item className="flex items-center gap-2">
											{({ active }) => (
												<Link
													href="/products/create"
													className={`${active ? 'bg-slate-100' : ''} group flex w-full items-center rounded-md px-2 py-2 text-md font-semibold`}
												>
													<IoBagAddOutline className={`text-lg ${active ? 'text-primary-300' : 'text-secondary-500'}`}/>
													Create Product
												</Link>
											)}
										</Menu.Item>
										<Menu.Item className="flex items-center gap-2">
											{({ active }) => (
												<Link
													href="/users/list"
													className={`${active ? 'bg-slate-100' : ''} group flex w-full items-center rounded-md px-2 py-2 text-md font-semibold`}
												>
													<IoPeopleOutline className={`text-lg ${active ? 'text-primary-300' : 'text-secondary-500'}`}/>
													Users
												</Link>
											)}
										</Menu.Item>
										{
											user.type === "admin" ? (
													<Menu.Item className="flex items-center gap-2">
														{({ active }) => (
															<Link
																href="/users/create"
																className={`${active ? 'bg-slate-100' : ''} group flex w-full items-center rounded-md px-2 py-2 text-md font-semibold`
															}>
																<IoPersonAddOutline className={`text-lg ${active ? 'text-primary-300' : 'text-secondary-500'}`}/>
																Create User
															</Link>
														)}
													</Menu.Item>
											) : null
										}
									</div>
								</Menu.Items>
								</Transition>
							</Menu>
							<div className='lg:border-l-2 border-slate-200 p-4 flex items-center'>
								<div className='hidden 3xl:flex flex-col text-right'>
									<small className='text-slate-400'>👋 Welcome back,</small>
									<strong className='text-primary-500 font-bold'>{user?.displayName}</strong>
								</div>
								<button
									title='Logout'
									onClick={(e) => handleLogout(e)}
									className='text-primary-400 flex items-center bg-slate-100 h-[50px] px-4 3xl:ml-6 rounded-lg font-semibold hover:shadow-lg'
								>
									<IoWalk className='text-xl'/>
								</button>
							</div>
						</div>
					) : (
						<div className={`${!user ? 'xl:w-4/12' : ''}`}>
							<div className='flex items-center justify-end gap-6 w-full'>
								<div className='flex flex-col gap-0'>
									<div className='flex items-center justify-end text-primary-500 font-semibold'>
										<IoCall className='text-secondary-500'/>
										<span className='ml-2'>800 968 9467</span>
									</div>
									<small className='text-slate-400'>
										P.O Box 450369 - Fort Lauderdale, FL - 33323
									</small>
								</div>
								<div className='flex items-center text-primary-500'>
									<Link href="https://www.instagram.com/naturesfoodz/" target="_blank" className='mx-1 text-xl bg-slate-100 p-3 rounded-lg hover:shadow-md'><IoLogoInstagram/></Link>
									<Link href="https://www.facebook.com/naturesfoodz" target="_blank" className='mx-1 text-xl bg-slate-100 p-3 rounded-lg hover:shadow-md'><IoLogoFacebook/></Link>
								</div>
							</div>
						</div>
					)
				}
			</div>
        </nav>
    )
}

export default MainNavigation