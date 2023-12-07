"use client"

import React, { useState, useRef } from 'react'
import { IoAddCircle, IoCamera, IoCloseCircle } from 'react-icons/io5'
import { v4 } from 'uuid'
import axios from 'axios'
import { storage } from '../../../../config/firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { notify, notifyLoading } from '../../../../utils/notify'
import RectButton from '../../../../components/buttons/RectButton'
import ProductCategorySelection from '../../../../components/sections/product/product-categories/ProductCategorySelection'
import ProductsCertificationsSelection from '../../../../components/sections/product/product-certifications/ProductCertificationsSelection'
import ProductCategoryPill from '../../../../components/pills/ProductCategoryPill'
import PrivateLayout from '../../../(private-views)/_layout'
import { useQuery } from '@tanstack/react-query'

const AddProductPage = () => {
    const imageRef = useRef()
    const imageInputRef = useRef()
    const ingredientInputRef = useRef()
    const sizeInputRef = useRef()
    const SKURef = useRef()

    const [isTakePhotoButtonDisabled, setIsTakePhotoButtonDisabled] = useState(false)
    const [isCreateProductButtonDisabled, setIsCreateProductButtonDisabled] = useState(true)
    const [isRemovePhotoButtonVisible, setIsRemovePhotoButtonVisible] = useState(false)

    const [productPageTitle, setProductPageTitle] = useState('')
    const [productName, setProductName] = useState('')
    const [productSub, setProductSub] = useState('')
    const [productCategory, setProductCategory] = useState("acai")
    const [productCardText, setProductCardText] = useState('')
    const [productCertifications, setProductCertifications] = useState([])
    const [productDescription, setProductDescription] = useState('')
    const [productFeatured, setProductFeatured] = useState("featured_no")
    const [productNew, setProductNew] = useState("new_no")
    const [productIngredients, setProductIngredients] = useState([])
    const [productSizes, setProductSizes] = useState([])
    const [productSku, setProductSku] = useState('')
    const [singleIngredient, setSingleIngredient] = useState('')
    const [singleSize, setSingleSize] = useState('')

    const [productImage, setProductImage] = useState(null)

    const productsSKUsQuery = useQuery({
        queryKey: ['sku-products'],
        queryFn: async () => await axios.post('/api/monitors/products/list').then((res) => res.data),
    })

    const handleCheckForExistingSKU = () => {
        const sku = productsSKUsQuery.data?.find(product => product.sku === productSku)
        return !sku ? false : true
    }

    const handleResetStates = () => {
        setIsTakePhotoButtonDisabled(false)
        setIsCreateProductButtonDisabled(true)
        setIsRemovePhotoButtonVisible(false)
        setProductPageTitle('')
        setProductName('')
        setProductSub('')
        setProductCategory('acai')
        setProductCardText('')
        setProductCertifications([])
        setProductDescription('')
        setProductFeatured("featured_no")
        setProductNew("new_no")
        setProductIngredients([])
        setProductSizes([])
        setProductSku('')
        setSingleIngredient('')
        setSingleSize('')
        setProductImage(null)
        imageRef.current.src = ''
        imageInputRef.current.value = ''
        sizeInputRef.current.value = ''
        ingredientInputRef.current.value = ''

        document.querySelectorAll('[name="certification-product-checkbox"]').forEach((check) => {
            check.checked = false
        })
    }

    const handleTakePhoto = (e) => {
        e.preventDefault()

        if (imageInputRef.current) {
            imageInputRef.current.click()

            imageInputRef.current.addEventListener('change', () => {
                if (!imageInputRef.current.files) return

                setIsRemovePhotoButtonVisible(true)
                setProductImage(imageInputRef.current.files[0])
                imageRef.current.src = window.URL.createObjectURL(imageInputRef.current.files[0])
                setIsTakePhotoButtonDisabled(true)
            })
        }
    }

    const handleRemovePhoto = () => {
        setIsRemovePhotoButtonVisible(false)
        setProductImage(null)
        setIsTakePhotoButtonDisabled(false)
        imageRef.current.src = ''
        imageInputRef.current.value = ''
    }

    const handleSubmitPhoto = async () => {
        const productImageRef = ref(storage, `products/${productImage.name + v4()}`)

        let res = await uploadBytes(productImageRef, productImage)
        let snapShot = await getDownloadURL(res.ref)
        return snapShot;
    }

    const handleManipulateCertificationsArray = (value, checked) => {
        if (checked) {
            setProductCertifications([...productCertifications, value])
        } else {
            setProductCertifications(productCertifications.filter(item => item !== value))
        }
    }

    const handleRemoveIngredient = (ingredient) => {
        setProductIngredients(productIngredients.filter(ing => ing !== ingredient))
    }

    const handleAddIngredient = (e) => {
        e.preventDefault()
        setProductIngredients([...productIngredients, singleIngredient])
        setSingleIngredient('')
        ingredientInputRef.current.value = ''
    }

    const handleRemoveSize = (size) => {
        setProductSizes(productSizes.filter(sz => sz !== size))
    }

    const handleAddSize = (e) => {
        e.preventDefault()
        setProductSizes([...productSizes, singleSize])
        setSingleSize('')
        sizeInputRef.current.value = ''
    }

    const handleGetInputValuesEmpty = () => {
        return productName !== null && productSub !== null && productCategory !== null && productCardText !== null && productSku !== null &&
                productDescription !== null && productFeatured !== null && productNew !== null && productImage !== null &&
                productCertifications.length > 0 && productIngredients.length > 0 && productSizes.length > 0 && productPageTitle
        ? false : true
    }

    const handleToggleCreateProductButton = () => {
        handleGetInputValuesEmpty() ? setIsCreateProductButtonDisabled(true) : setIsCreateProductButtonDisabled(false)
    }

    const handleCreateProduct = async (e) => {
        e.preventDefault()
        const toastId = notifyLoading('Creating New Product...')

        if (handleCheckForExistingSKU()) {
            notify('error', 'SKU already exists!', null, null, toastId)
            SKURef.current.focus()
            setProductSku('')
            setIsCreateProductButtonDisabled(true)
            return
        }

        if (handleGetInputValuesEmpty()) return

        let isPhotoUploadedSuccess = await handleSubmitPhoto()
        if (!isPhotoUploadedSuccess || isPhotoUploadedSuccess === null) return

        let data = {
            productCardText: productCardText,
            productCategory: productCategory,
            productCertifications: productCertifications,
            productDescription: productDescription,
            productFeatured: productFeatured,
            productImageFull: isPhotoUploadedSuccess,
            productImageThumb: isPhotoUploadedSuccess,
            productIngredients: productIngredients,
            productName: productName,
            productNew: productNew,
            productPageTitle: productPageTitle,
            productSizes: productSizes,
            productSub: productSub,
            productSku: productSku
        }

        await axios.post('/api/products/create', data).then((response) => {
            if (response.status === 200) notify('success', 'Product Created Successfully', null, null, toastId)
        }).catch((err) => {
            console.error(err)
            notify('error', 'Something Went Wrong!', null, null, toastId)
        })

        handleResetStates()
    }

    return (
        <PrivateLayout>
            <div className='w-12/12 min-h-[100vh] mx-auto 3xl:w-10/12'>
                <form className='p-10'>
                    <h1 className='text-2xl text-primary-400 font-bold'>Create new product</h1>
                    <hr className='my-8'/>

                    <div className='xl:flex xl:justify-between xl:items-start xl:gap-10'>
                        <div className='w-12/12 xl:w-6/12'>
                            <div className="xl:flex xl:flex-col">
                                <label htmlFor="page-title" className='text-primary-400 font-bold mb-2'>Page Title</label>
                                <input type="text" className='w-full h-[55px] border-2 border-gray-200 mb-4 px-4 rounded-md' name='page-title' aria-label='Page Title'
                                    value={productPageTitle} onChange={(e) => {setProductPageTitle(e.target.value); handleToggleCreateProductButton()}} placeholder='Type in the page title. It will show in the browser tab.'
                                />
                            </div>

                            <div className="xl:flex xl:flex-col">
                                <label htmlFor="product-sku" className='text-primary-400 font-bold mb-2'>Product SKU</label>
                                <input type="text" ref={SKURef} className='w-full h-[55px] border-2 border-gray-200 mb-4 px-4 rounded-md' name='product-sku' aria-label='Product SKU'
                                    value={productSku} onChange={(e) => {setProductSku(e.target.value); handleToggleCreateProductButton()}} placeholder='Type in the product Stock Keeping Unit'
                                />
                            </div>

                            <div className="xl:flex xl:flex-col">
                                <label htmlFor="product-name" className='text-primary-400 font-bold mb-2'>Product Name</label>
                                <input type="text" className='w-full h-[55px] border-2 border-gray-200 mb-4 px-4 rounded-md' name='product-name' aria-label='Product Name'
                                    value={productName} onChange={(e) => {setProductName(e.target.value); handleToggleCreateProductButton()}} placeholder='Type in the product name'
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="product-sub" className='text-primary-400 font-bold mb-2'>Product Sub</label>
                                <input type="text" className='h-[55px] border-2 border-gray-200 mb-4 px-4 rounded-md' name='product-sub' aria-label='Product Sub'
                                    value={productSub} onChange={(e) => {setProductSub(e.target.value); handleToggleCreateProductButton()}} placeholder='Type in a prefix for the product name'
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="product-card-text" className='text-primary-400 font-bold mb-2'>Card Text</label>
                                <input type="text" className='h-[55px] border-2 border-gray-200 mb-4 px-4 rounded-md' name='product-card-text' aria-label='Card Text'
                                    value={productCardText} onChange={(e) => {setProductCardText(e.target.value); handleToggleCreateProductButton()}} placeholder='Type in a text for the product card'
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="product-description" className='text-primary-400 font-bold mb-2'>Product Description</label>
                                <textarea name="product-description" cols="30" rows="5"
                                    value={productDescription} onChange={(e) => {setProductDescription(e.target.value); handleToggleCreateProductButton()}}
                                    className='border-2 border-gray-200 mb-4 px-4 py-2 rounded-md resize-none' placeholder='Enter a product description'
                                ></textarea>
                            </div>

                            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                <div className="flex flex-col w-full md:w-9/12">
                                    <label htmlFor="add-ingredient" className='text-primary-400 font-bold mb-2'>Add Ingredients</label>
                                    <input type="text" ref={ingredientInputRef} className='h-[55px] border-2 border-gray-200 mb-4 px-4 rounded-md' name='add-ingredient' aria-label='Card Text'
                                        onChange={(e) => setSingleIngredient(e.target.value)} placeholder='Type in one ingredient and add to the list'
                                    />
                                </div>
                                <div className="mb-4 md:mb-0 md:mt-4 ml-auto">
                                    <RectButton text='Add to list' variant='info' onClick={(e) => handleAddIngredient(e)} disabled={!singleIngredient}/>
                                </div>
                            </div>

                            {
                                productIngredients.length > 0 ? (
                                    <div className="flex flex-col mb-8">
                                        <label htmlFor="ingredients-list" className='text-primary-400 font-bold mb-2'>Ingredients List</label>
                                        <div id="ingredients-list" className='flex gap-2 flex-wrap'>
                                            {
                                                productIngredients.map((ingredient) => (
                                                    <ProductCategoryPill text={ingredient} onClick={() => handleRemoveIngredient(ingredient)} key={ingredient}/>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ) : ''
                            }

                            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                <div className="flex flex-col w-full md:w-9/12">
                                    <label htmlFor="add-size" className='text-primary-400 font-bold mb-2'>Add Available Sizes</label>
                                    <input type="text" ref={sizeInputRef} className='h-[55px] border-2 border-gray-200 mb-4 px-4 rounded-md' name='add-size' aria-label='Card Text'
                                        onChange={(e) => setSingleSize(e.currentTarget.value)} placeholder='Type in one size and add to the list'
                                    />
                                </div>
                                <div className="mb-4 md:mb-0 md:mt-4 ml-auto">
                                    <RectButton text='Add to list' variant='info' onClick={(e) => handleAddSize(e)} disabled={!singleSize}/>
                                </div>
                            </div>

                            {
                                productSizes.length > 0 ? (
                                    <div className="flex flex-col mb-8">
                                        <label htmlFor="ingredients-list" className='text-primary-400 font-bold mb-2'>Sizes List</label>
                                        <div id="ingredients-list" className='flex gap-2 flex-wrap'>
                                            {
                                                productSizes.map((size) => (
                                                    <ProductCategoryPill text={size} onClick={() => handleRemoveSize(size)} key={size}/>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ) : ''
                            }

                            <ProductCategorySelection
                                setProductCategory={setProductCategory}
                                handleToggleCreateProductButton={handleToggleCreateProductButton}
                                productCategory={productCategory}
                            />

                            <ProductsCertificationsSelection
                                handleManipulateCertificationsArray={handleManipulateCertificationsArray}
                                handleToggleCreateProductButton={handleToggleCreateProductButton}
                            />

                            <div className='4xl:flex 4xl:items-start 4xl:justify-between gap-4'>
                                <div className='w-full'>
                                    <label htmlFor="featured-product-radio" className='text-primary-400 font-bold'>Featured Product</label>
                                    <div className="flex items-center pl-4 border-2 border-gray-200 rounded-md mb-2 mt-3">
                                        <input
                                            onChange={(e) => {setProductFeatured("featured_yes"); handleToggleCreateProductButton()}}
                                            type="radio" value={productFeatured} checked={productFeatured === "featured_yes"} id="featured-product-true" name="featured-product-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus-visible:outline-none focus-visible:border-none"/>
                                        <div className='flex flex-col py-3 ml-4'>
                                            <label htmlFor="featured-product-true" className="w-full text-primary-400 text-base font-bold">Featured Product</label>
                                            <small className='text-slate-400'>Select this option to display product on home page.</small>
                                        </div>
                                    </div>
                                    <div className="flex items-center pl-4 border-2 border-gray-200 rounded-md mb-8">
                                        <input
                                            onChange={(e) => {setProductFeatured("featured_no"); handleToggleCreateProductButton()}}
                                            type="radio" value={productFeatured} checked={productFeatured === "featured_no"} id="featured-product-false" name="featured-product-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus-visible:outline-none focus-visible:border-none"/>
                                        <div className='flex flex-col py-3 ml-4'>
                                            <label htmlFor="featured-product-false" className="w-full text-primary-400 text-base font-bold">Not Featured</label>
                                            <small className='text-slate-400'>This product will not be displayed in home page.</small>
                                        </div>
                                    </div>
                                </div>

                                <div className='w-full'>
                                    <label htmlFor="new-product-radio" className='text-primary-400 font-bold'>Label product as NEW</label>
                                    <div className="flex items-center pl-4 border-2 border-gray-200 rounded-md mb-2 mt-3">
                                        <input
                                            onChange={(e) => {setProductNew("new_yes"); handleToggleCreateProductButton()}}
                                            type="radio" value={productNew} checked={productNew === "new_yes"} id="new-product-true" name="new-product-radio"
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus-visible:outline-none focus-visible:border-none"/>
                                        <div className='flex flex-col py-3 ml-4'>
                                            <label htmlFor="new-product-true" className="w-full text-primary-400 text-base font-bold">This is a New Product</label>
                                            <small className='text-slate-400'>Select this option to display a NEW tag.</small>
                                        </div>
                                    </div>
                                    <div className="flex items-center pl-4 border-2 border-gray-200 rounded-md mb-8">
                                        <input
                                            onChange={(e) => {setProductNew("new_no"); handleToggleCreateProductButton()}}
                                            type="radio" value={productNew} checked={productNew === "new_no"} id="new-product-false" name="new-product-radio"
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:outline-0 focus-visible:border-none"/>
                                        <div className='flex flex-col py-3 ml-4'>
                                            <label htmlFor="new-product-false" className="w-full text-primary-400 text-base font-bold">Regular Product</label>
                                            <small className='text-slate-400'>This product will not have a NEW tag.</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='xl:flex xl:items-center xl:justify-between mb-8'>
                                <div className="flex flex-col">
                                    <label htmlFor="product-image" className='text-primary-400 font-bold mb-2'>Select a Product Image</label>
                                    <input ref={imageInputRef} aria-label="input image" type="file" accept="image/*" capture className='hidden'
                                        onChange={handleToggleCreateProductButton}
                                    />
                                </div>

                                <RectButton variant='info' text='Add image' iconRight={<IoCamera/>} disabled={isTakePhotoButtonDisabled} onClick={(e) => handleTakePhoto(e)}>
                                    <IoCamera className='text-lg'/>
                                    Take Photo
                                </RectButton>
                            </div>

                            <div className='hidden xl:block'>
                                <RectButton text="Create Product" variant='secondary' disabled={isCreateProductButtonDisabled} full iconRight={<IoAddCircle className='text-xl'/>} onClick={(e) => handleCreateProduct(e)}/>
                            </div>
                        </div>

                        <div className='w-12/12 xl:w-5/12 sticky top-36 right-0'>
                            <div className='relative flex mx-auto w-12/12 bg-slate-200 shadow-lg rounded-xl overflow-clip'>
                                {
                                    isRemovePhotoButtonVisible && (
                                    <span className='absolute right-3 top-3 cursor-pointer' onClick={() => handleRemovePhoto()}>
                                        <IoCloseCircle className='text-4xl drop-shadow-lg text-slate-500'/>
                                    </span>
                                )}
                                <img src="" alt="" ref={imageRef} className='flex mx-auto object-cover w-full outline-none ring-0'/>
                            </div>
                        </div>

                        <div className='xl:hidden mt-4'>
                            <RectButton text="Create Product" variant='secondary' disabled={isCreateProductButtonDisabled} full iconRight={<IoAddCircle className='text-xl'/>} onClick={(e) => handleCreateProduct(e)}/>
                        </div>
                    </div>
                </form>
            </div>
        </PrivateLayout>
    )
}

export default AddProductPage