import React from 'react'

const ProductCertificationsSelection = ({
    handleManipulateCertificationsArray,
    handleToggleCreateProductButton,
}) => {
    return (
        <div className='4xl:flex 4xl:items-start 4xl:justify-between gap-4'>
            <div className='w-full'>
                <label htmlFor="" className='text-primary-400 font-bold'>Certifications</label>

                <div htmlFor="usda-checkbox" className="flex items-center pl-4 border-2 border-gray-200 rounded-md mb-2 mt-3">
                    <input
                        onChange={(e) => {
                            handleManipulateCertificationsArray(e.target.value, e.target.checked ? true : false)
                            handleToggleCreateProductButton()}}
                        type="checkbox" value="certification-usda" id="usda-checkbox" name="certification-product-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus-visible:outline-none focus-visible:border-none"/>
                    <div className='flex flex-col py-3 ml-4'>
                        <label htmlFor="usda-checkbox" className="w-full text-primary-400 text-base font-bold">USDA</label>
                        <small className='text-slate-400'>Select this option to display this label within the product page.</small>
                    </div>
                </div>
                <div htmlFor="organic-checkbox" className="flex items-center pl-4 border-2 border-gray-200 rounded-md mb-2">
                    <input
                        onChange={(e) => {
                            handleManipulateCertificationsArray(e.target.value, e.target.checked ? true : false)
                            handleToggleCreateProductButton()}}
                        type="checkbox" value="certification-organic" id="organic-checkbox" name="certification-product-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus-visible:outline-none focus-visible:border-none"/>
                    <div className='flex flex-col py-3 ml-4'>
                        <label htmlFor="organic-checkbox" className="w-full text-primary-400 text-base font-bold">Organic</label>
                        <small className='text-slate-400'>Select this option to display this label within the product page.</small>
                    </div>
                </div>
                <div htmlFor="vegan-checkbox" className="flex items-center pl-4 border-2 border-gray-200 rounded-md mb-2">
                    <input
                        onChange={(e) => {
                            handleManipulateCertificationsArray(e.target.value, e.target.checked ? true : false)
                            handleToggleCreateProductButton()}}
                        type="checkbox" value="certification-vegan" id="vegan-checkbox" name="certification-product-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus-visible:outline-none focus-visible:border-none"/>
                    <div className='flex flex-col py-3 ml-4'>
                        <label htmlFor="vegan-checkbox" className="w-full text-primary-400 text-base font-bold">Vegan</label>
                        <small className='text-slate-400'>Select this option to display this label within the product page.</small>
                    </div>
                </div>
                <div htmlFor="kosher-checkbox" className="flex items-center pl-4 border-2 border-gray-200 rounded-md mb-2">
                    <input
                        onChange={(e) => {
                            handleManipulateCertificationsArray(e.target.value, e.target.checked ? true : false)
                            handleToggleCreateProductButton()}}
                        type="checkbox" value="certification-kosher" id="kosher-checkbox" name="certification-product-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus-visible:outline-none focus-visible:border-none"/>
                    <div className='flex flex-col py-3 ml-4'>
                        <label htmlFor="kosher-checkbox" className="w-full text-primary-400 text-base font-bold">Kosher</label>
                        <small className='text-slate-400'>Select this option to display this label within the product page.</small>
                    </div>
                </div>
                <div htmlFor="non_gmo-checkbox" className="flex items-center pl-4 border-2 border-gray-200 rounded-md mb-2">
                    <input
                        onChange={(e) => {
                            handleManipulateCertificationsArray(e.target.value, e.target.checked ? true : false)
                            handleToggleCreateProductButton()}}
                        type="checkbox" value="certification-non_gmo" id="non_gmo-checkbox" name="certification-product-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus-visible:outline-none focus-visible:border-none"/>
                    <div className='flex flex-col py-3 ml-4'>
                        <label htmlFor="non_gmo-checkbox" className="w-full text-primary-400 text-base font-bold">Non GMO</label>
                        <small className='text-slate-400'>Select this option to display this label within the product page.</small>
                    </div>
                </div>
                <div htmlFor="gluten_free-checkbox" className="flex items-center pl-4 border-2 border-gray-200 rounded-md mb-2">
                    <input
                        onChange={(e) => {
                            handleManipulateCertificationsArray(e.target.value, e.target.checked ? true : false)
                            handleToggleCreateProductButton()}}
                        type="checkbox" value="certification-gluten_free" id="gluten_free-checkbox" name="certification-product-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus-visible:outline-none focus-visible:border-none"/>
                    <div className='flex flex-col py-3 ml-4'>
                        <label htmlFor="gluten_free-checkbox" className="w-full text-primary-400 text-base font-bold">Gluten Free</label>
                        <small className='text-slate-400'>Select this option to display this label within the product page.</small>
                    </div>
                </div>
                <div htmlFor="natural-checkbox" className="flex items-center pl-4 border-2 border-gray-200 rounded-md mb-8">
                    <input
                        onChange={(e) => {
                            handleManipulateCertificationsArray(e.target.value, e.target.checked ? true : false)
                            handleToggleCreateProductButton()}}
                        type="checkbox" value="certification-natural" id="natural-checkbox" name="certification-product-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus-visible:outline-none focus-visible:border-none"/>
                    <div className='flex flex-col py-3 ml-4'>
                        <label htmlFor="natural-checkbox" className="w-full text-primary-400 text-base font-bold">100% Natural</label>
                        <small className='text-slate-400'>Select this option to display this label within the product page.</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCertificationsSelection