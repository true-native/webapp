import React from 'react'
import Link from 'next/link'
import { IoArrowForward } from 'react-icons/io5'

const ProductCard = ({product}) => {
    return (
        <Link
            className='group p-3 border-2 border-transparent lg:hover:border-gray-100 rounded-3xl shadow-nav shadow-gray-200 bg-white'
            href={{pathname: `/products/${product.category}`, query: { product: JSON.stringify(product) }}}
        >
            <div className='overflow-clip rounded-2xl relative'>
                {
                    product.new === "new_yes" && (
                        <span className='absolute left-2 top-2 bg-white py-2 px-4 rounded-xl font-bold text-secondary-400 shadow-lg'>
                            NEW
                        </span>
                    )
                }
                <img
                    className='rounded-2xl w-full h-auto lg:group-hover:rotate-6 lg:group-hover:transition-all lg:group-hover:scale-150 lg:group-hover:ease-in-out lg:group-hover:delay-200'
                    src={product.image_full}
                    alt={product.name}
                />
            </div>
            <div className='px-2 pt-4 pb-2 text-left'>
                <h3 className='font-semibold text-xl mt-2 mb-1 text-primary-400'>{product.name}</h3>
                <p className='text-slate-500 text-base line-clamp-2'>
                    {product.card_text}
                </p>
                <span className='text-secondary-500 font-semibold flex items-center pt-6'>
                    View Product
                    <IoArrowForward className='ml-2'/>
                </span>
            </div>
        </Link>
    )
}

export default ProductCard