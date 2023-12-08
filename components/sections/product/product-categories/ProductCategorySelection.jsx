"use client"

import React from 'react'

const ProductCategorySelection = ({setProductCategory, handleToggleCreateProductButton, productCategory}) => {
    return (
        <div className='4xl:flex 4xl:items-start 4xl:justify-between gap-4'>
            <div className='w-full'>
                <label className='text-primary-400 font-bold'>Category</label>
                <div className="flex items-center pl-4 border-2 border-gray-200 rounded-md mb-2 mt-3">
                    <input
                        onChange={(e) => {setProductCategory("acai"); handleToggleCreateProductButton()}} checked={productCategory === "acai" ? true : false}
                        type="radio" value={productCategory} id="category-acai" name="category-product-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus-visible:outline-none focus-visible:border-none"/>
                    <div className='flex flex-col py-3 ml-4'>
                        <label htmlFor="category-acai" className="w-full text-primary-400 text-base font-bold">Açaí</label>
                        <small className='text-slate-400'>Select this option to include this product within this category.</small>
                    </div>
                </div>
                <div className="flex items-center pl-4 border-2 border-gray-200 rounded-md mb-2">
                    <input
                        onChange={(e) => {setProductCategory("pitaya"); handleToggleCreateProductButton()}} checked={productCategory === "pitaya" ? true : false}
                        type="radio" value={productCategory} id="category-pitaya" name="category-product-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus-visible:outline-none focus-visible:border-none"/>
                    <div className='flex flex-col py-3 ml-4'>
                        <label htmlFor="category-pitaya" className="w-full text-primary-400 text-base font-bold">Pitaya</label>
                        <small className='text-slate-400'>Select this option to include this product within this category.</small>
                    </div>
                </div>
                <div className="flex items-center pl-4 border-2 border-gray-200 rounded-md mb-2">
                    <input
                        onChange={(e) => {setProductCategory("granola"); handleToggleCreateProductButton()}} checked={productCategory === "granola" ? true : false}
                        type="radio" value={productCategory} id="category-granola" name="category-product-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus-visible:outline-none focus-visible:border-none"/>
                    <div className='flex flex-col py-3 ml-4'>
                        <label htmlFor="category-granola" className="w-full text-primary-400 text-base font-bold">Granola</label>
                        <small className='text-slate-400'>Select this option to include this product within this category.</small>
                    </div>
                </div>
                <div className="flex items-center pl-4 border-2 border-gray-200 rounded-md mb-2">
                    <input
                        onChange={(e) => {setProductCategory("dry_goods"); handleToggleCreateProductButton()}} checked={productCategory === "dry_goods" ? true : false}
                        type="radio" value={productCategory} id="category-dry-goods" name="category-product-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus-visible:outline-none focus-visible:border-none"/>
                    <div className='flex flex-col py-3 ml-4'>
                        <label htmlFor="category-dry-goods" className="w-full text-primary-400 text-base font-bold">Dry Goods</label>
                        <small className='text-slate-400'>Select this option to include this product within this category.</small>
                    </div>
                </div>
                <div className="flex items-center pl-4 border-2 border-gray-200 rounded-md mb-2">
                    <input
                        onChange={(e) => {setProductCategory("organic_iqf"); handleToggleCreateProductButton()}} checked={productCategory === "organic_iqf" ? true : false}
                        type="radio" value={productCategory} id="category-organic-iqf" name="category-product-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus-visible:outline-none focus-visible:border-none"/>
                    <div className='flex flex-col py-3 ml-4'>
                        <label htmlFor="category-organic-iqf" className="w-full text-primary-400 text-base font-bold">Organic IQF Fruits</label>
                        <small className='text-slate-400'>Select this option to include this product within this category.</small>
                    </div>
                </div>
                <div className="flex items-center pl-4 border-2 border-gray-200 rounded-md mb-8">
                    <input
                        onChange={(e) => {setProductCategory("conventional_iqf"); handleToggleCreateProductButton() }} checked={productCategory === "conventional_iqf" ? true : false}
                        type="radio" value={productCategory} id="category-conventional-iqf" name="category-product-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus-visible:outline-none focus-visible:border-none"/>
                    <div className='flex flex-col py-3 ml-4'>
                        <label htmlFor="category-conventional-iqf" className="w-full text-primary-400 text-base font-bold">Conventional IQF Fruits</label>
                        <small className='text-slate-400'>Select this option to include this product within this category.</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCategorySelection