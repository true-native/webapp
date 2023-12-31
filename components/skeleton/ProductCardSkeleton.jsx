import React from 'react'

const ProductCardSkeleton = () => {
    return (
        <div role="status" className='p-3 border-2 border-transparent rounded-3xl shadow-nav shadow-gray-200 bg-white animate-pulse h-fit'>
            <div className='overflow-clip rounded-2xl relative h-[350px] lg:h-[290px] xl:h-[250px] 2xl:h-[310px] 3xl:h-[350px] 4xl:h-[400px]'>
                <div className='rounded-2xl w-full h-full bg-slate-200'></div>
            </div>
            <div className='px-2 pt-4 pb-2'>
                <div className='font-bold text-xl mt-2 mb-1 h-5 bg-slate-200 rounded-md'></div>

                <div className='font-bold text-xl mt-2 mb-1 h-3 bg-slate-200 rounded-md'></div>
                <div className='font-bold text-xl mt-2 mb-1 h-3 bg-slate-200 rounded-md'></div>

                <div className='font-bold text-xl mt-4 mb-1 h-5 bg-slate-200 rounded-md w-6/12'></div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    )
}

export default ProductCardSkeleton