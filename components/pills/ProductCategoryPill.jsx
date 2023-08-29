import React from 'react'
import { IoClose } from 'react-icons/io5'

const ProductCategoryPill = ({text, onClick, outlined}) => {
	return (
		<div className={`flex justify-between items-center py-2 px-4 rounded-full ${outlined ? 'border border-primary-200 text-primary-200 text-sm' : 'bg-slate-100 text-primary-300'}`}>
			<p className='select-none'>{text}</p>
			{
				onClick ? (
					<button className='ml-3 -mr-2 bg-slate-200 rounded-full p-1 shadow-md'
						onClick={onClick}>
						<IoClose/>
					</button>
				) : ''
			}
		</div>
	)
}

export default ProductCategoryPill