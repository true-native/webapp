import React from 'react'
import Link from 'next/link';

const RectButton = ({text, onClick, iconLeft, iconRight, link, full, variant, outlined, disabled}) => {
    let baseButton = `h-[55px] flex items-center justify-center m-0 cursor-pointer py-0 px-[40px] font-semibold rounded-lg gap-3 leading-0 uppercase ${full ? 'w-full' : 'w-fit'} lg:hover:shadow-lg`

    let variantButton = ''
    let focused = ''

    switch (variant) {
        case 'primary':
            variantButton = outlined ? 'border-2 border-primary-500 text-primary-500 bg-transparent' : 'bg-primary-500 text-white'
            focused = 'focus-visible:outline-1 focus-visible:outline-primary-300 focus-visible:ring-4 focus-visible:ring-primary-200'
            break;
        case 'secondary':
            variantButton = outlined ? 'border-2 border-secondary-500 text-secondary-500 bg-transparent' : 'bg-secondary-500 text-white'
            focused = 'focus-visible:outline-1 focus-visible:outline-secondary-300 focus-visible:ring-4 focus-visible:ring-secondary-300'
            break;
        case 'destructive':
            variantButton = outlined ? 'border-2 border-red-500 text-red-500 bg-transparent' : 'bg-red-500 text-white'
            focused = 'focus-visible:outline-1 focus-visible:outline-red-300 focus-visible:ring-4 focus-visible:ring-red-300'
            break;
        case 'success':
            variantButton = outlined ? 'border-2 border-green-500 text-green-500 bg-transparent' : 'bg-green-500 text-white'
            focused = 'focus-visible:outline-1 focus-visible:outline-green-200 focus-visible:ring-4 focus-visible:ring-green-300'
            break;
        case 'info':
            variantButton = outlined ? 'border-2 border-blue-500 text-blue-500 bg-transparent' : 'bg-blue-500 text-white'
            focused = 'focus-visible:outline-1 focus-visible:outline-blue-300 focus-visible:ring-4 focus-visible:ring-blue-300'
            break;
        case 'warning':
            variantButton = outlined ? 'border-2 border-yellow-400 text-yellow-400 bg-transparent' : 'bg-yellow-400 text-black'
            focused = 'focus-visible:outline-1 focus-visible:outline-yellow-300 focus-visible:ring-4 focus-visible:ring-yellow-300'
            break;
        default:
            variantButton = outlined ? 'border-2 border-slate-400 text-slate-400 bg-transparent' : 'bg-slate-400 text-white'
            focused = 'focus-visible:outline-1 focus-visible:outline-slate-300 focus-visible:ring-4 focus-visible:ring-slate-300'
            break;
    }

    return link ? (
        <Link className={`${baseButton} ${variantButton} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${focused}`}
            href={link} disabled={disabled}
        >
            {iconLeft ? iconLeft : ''}
            {text ? <span>{text}</span> : 'Missing Label'}
            {iconRight ? iconRight : ''}
        </Link>
    ) : (
        <button className={`${baseButton} ${variantButton} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${focused}`} onClick={onClick} disabled={disabled}>
            {iconLeft ? iconLeft : ''}
            {text ? <span>{text}</span> : 'Missing Label'}
            {iconRight ? iconRight : ''}
        </button>
    )
}

export default RectButton