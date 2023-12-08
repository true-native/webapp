import React from 'react'
import RectButton from '../buttons/RectButton'
import { IoClose } from 'react-icons/io5'

const ProductsFilter = ({isFilterOpen, setIsFilterOpen, applyFilter, handleManipulateCategoriesArray}) => {

	return (
		<div className={`${!isFilterOpen? 'hidden' : 'block'} border border-slate-300 min-w-[310px] xl:w-[380px] absolute top-32 bg-white shadow-2xl z-20 p-6 rounded-xl`}>
			<div className='w-full'>
				<div className="flex items-center justify-between">
					<label className='text-primary-300 font-semibold'>Categories</label>
					<button className="text-primary-300 bg-white shadow-md p-1 rounded-full"
						onClick={() => setIsFilterOpen(false)}>
						<IoClose />
					</button>
				</div>
				<hr className="my-4 bg-slate-400"/>
				<div className="flex items-center my-6">
					<input
						onChange={(e) => {handleManipulateCategoriesArray({id: "acai", description: "Açaí"}, e.target.checked ? true : false)}}
						type="checkbox" id="category-acai" name="category-product-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus-visible:outline-none focus-visible:border-none"/>
					<label htmlFor="category-acai" className="w-full text-primary-400 text-base ml-2">Açaí</label>
				</div>
				<div className="flex items-center my-6">
					<input
						onChange={(e) => {handleManipulateCategoriesArray({id: "pitaya", description: "Pitaya"}, e.target.checked ? true : false)}}
						type="checkbox" id="category-pitaya" name="category-product-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus-visible:outline-none focus-visible:border-none"/>
					<label htmlFor="category-pitaya" className="w-full text-primary-400 text-base ml-2">Pitaya</label>
				</div>
				<div className="flex items-center my-6">
					<input
						onChange={(e) => {handleManipulateCategoriesArray({id:"granola", description: "Granola"}, e.target.checked ? true : false)}}
						type="checkbox" id="category-granola" name="category-product-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus-visible:outline-none focus-visible:border-none"/>
					<label htmlFor="category-granola" className="w-full text-primary-400 text-base ml-2">Granola</label>
				</div>
				<div className="flex items-center my-6">
					<input
						onChange={(e) => {handleManipulateCategoriesArray({id: "dry_goods", description: "Dry Goods"}, e.target.checked ? true : false)}}
						type="checkbox" id="category-dry-goods" name="category-product-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus-visible:outline-none focus-visible:border-none"/>
					<label htmlFor="category-dry-goods" className="w-full text-primary-400 text-base ml-2">Dry Goods</label>
				</div>
				<div className="flex items-center my-6">
					<input
						onChange={(e) => {handleManipulateCategoriesArray({id: "organic_iqf", description: "Organic IQF Fruits"}, e.target.checked ? true : false)}}
						type="checkbox" id="category-organic-iqf" name="category-product-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus-visible:outline-none focus-visible:border-none"/>
					<label htmlFor="category-organic-iqf" className="w-full text-primary-400 text-base ml-2">Organic IQF Fruits</label>
				</div>
				<div className="flex items-center my-6">
					<input
						onChange={(e) => {handleManipulateCategoriesArray({id: "conventional_iqf", description: "Conventional IQF Fruits"}, e.target.checked ? true : false)}}
						type="checkbox" id="category-conventional-iqf" name="category-product-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus-visible:outline-none focus-visible:border-none"/>
					<label htmlFor="category-conventional-iqf" className="w-full text-primary-400 text-base ml-2">Conventional IQF Fruits</label>
				</div>
				<div className="flex items-center my-6">
					<input
						onChange={(e) => {handleManipulateCategoriesArray({id: "coconut", description: "Coconut"}, e.target.checked ? true : false)}}
						type="checkbox" id="coconut" name="category-product-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus-visible:outline-none focus-visible:border-none"/>
					<label htmlFor="coconut" className="w-full text-primary-400 text-base ml-2">Coconut</label>
				</div>
			</div>
			<hr className="my-4 bg-slate-400"/>
			<RectButton full text='Apply filters' variant='secondary' onClick={(e) => applyFilter(e)}/>
		</div>
	)
}

export default ProductsFilter