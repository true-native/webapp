import React from 'react'
import Link from 'next/link'
import { IoArrowForward } from 'react-icons/io5'

const ProductCard = ({product}) => {
    return (
        <Link
            href={{pathname: `/products/${product.category}`, query: { product: JSON.stringify(product) }}}
        >
            {
                product.new === "new_yes" && (
                    <span className='absolute left-8 top-2 z-10 bg-white py-2 px-4 rounded-b-xl font-semibold text-primary-200 shadow-xl'>
                        NEW
                    </span>
                )
            }
            <div className='overflow-clip rounded-2xl relative'>
                <img
                    className='object-cover rounded-2xl w-full h-auto lg:group-hover:rotate-6 lg:group-hover:transition-all lg:group-hover:scale-150 lg:group-hover:ease-in-out lg:group-hover:delay-200'
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