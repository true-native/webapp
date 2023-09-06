"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { IoOptionsOutline, IoSearch } from "react-icons/io5"
import ProductsFilter from "../../../components/filters/ProductsFilter"
import ProductCard from "../../../components/cards/ProductCard"
import ProductCardSkeleton from '../../../components/skeleton/ProductCardSkeleton'
import ProductCategoryPill from '../../../components/pills/ProductCategoryPill'
import { useEffect, useState } from "react"
import { useDebounce } from "use-debounce";

const Products = () => {
	const [isFilterOpen, setIsFilterOpen] = useState(false)
	const [isSelectedCategoriesVisible, setIsSelectedCategoriesVisible] = useState(false)
	const [selectedCategories, setSelectedCategories] = useState([])
	const [filteredProducts, setFilteredProducts] = useState([])

	const [searchInputValue, setSearchInputValue] = useState("");
  	const [debouncedValue] = useDebounce(searchInputValue, 500);

    const productsListQuery = useQuery({
		queryKey: ['products'],
        queryFn: async () => await axios.get('/api/products/list').then((res) => res.data)
    })

	const handleManipulateCategoriesArray = (category, checked) => {
        if (checked) {
            setSelectedCategories([...selectedCategories, category])
        } else {
            setSelectedCategories(selectedCategories.filter((item) => item.id !== category.id))
        }
    }

	const handleFilterProducts = (e) => {
		e.preventDefault()

		setIsFilterOpen(false)

		if (selectedCategories.length > 0) {
			setIsSelectedCategoriesVisible(true)

			const products = []

			selectedCategories.forEach((cat) => {
				const filtered = productsListQuery.data.filter((product) => product.category === cat.id)
				filtered.forEach(item => products.push(item))
			})

			setFilteredProducts(products)
			setSearchInputValue("")
		} else {
			setFilteredProducts(productsListQuery.data)
		}
	}

	const handleInputChange = (event) => {
		const value = event.target.value;
		setSearchInputValue(value);
	}

	const handleSearchProduct = async () => {
		if (debouncedValue) {
			const products = []

			const searchedProducts = productsListQuery.data.filter((product) => product.name.toLowerCase().includes(debouncedValue) ||
				product.description.toLowerCase().includes(debouncedValue))
			searchedProducts.forEach(item => products.push(item))

			setFilteredProducts(products)
			setSelectedCategories([])
			document.querySelectorAll('[name="category-product-checkbox"]').forEach((check) => check.checked = false)
		} else {
			setFilteredProducts(productsListQuery.data)
		}
	}

	useEffect(() => {
		handleSearchProduct()
	}, [debouncedValue])

    return (
		<main className="w-full min-h-[100vh] 3xl:w-10/12 mx-auto">
			<div className="w-11/12 mx-auto flex justify-between mt-8 flex-wrap xl:flex-nowrap items-center">
				<button className="flex justify-between items-center py-2 px-7 text-primary-300 bg-white border border-slate-300 rounded-full shadow-lg"
					onClick={() => setIsFilterOpen(prev => !prev)}>
					<p>Filters</p>
					<IoOptionsOutline className="ml-3"/>
				</button>
				<ProductsFilter
					isFilterOpen={isFilterOpen}
					setIsFilterOpen={setIsFilterOpen}
					applyFilter={handleFilterProducts}
					handleManipulateCategoriesArray={handleManipulateCategoriesArray}
				/>
				<div className="hidden md:flex flex-wrap flex-shrink-0 mt-4 lg:mt-0 items-center gap-2">
					{
						selectedCategories.length > 0 && isSelectedCategoriesVisible ? (
							selectedCategories.map((cat, idx) => (
								<ProductCategoryPill key={idx} text={cat.description} outlined/>
							))
						) : ''
					}
				</div>
				<div className="flex items-center mt-6 w-full xl:w-fit xl:mt-0">
					<div className="relative w-full">
						<input
							onChange={handleInputChange}
							value={searchInputValue}
							type="text"
							aria-label="search"
							placeholder="Search product"
							className="h-[40px] px-4 border-2 border-slate-300 rounded-full w-full pr-10 text-slate-400 placeholder-slate-300"
						/>
						<IoSearch className="absolute top-3 right-4 text-slate-400"/>
					</div>
				</div>
			</div>

			{
				productsListQuery.isLoading ?
				<div className='my-8 w-11/12 mx-auto gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
					<ProductCardSkeleton/>
					<ProductCardSkeleton/>
					<ProductCardSkeleton/>
					<ProductCardSkeleton/>
					<ProductCardSkeleton className="hidden lg:block"/>
					<ProductCardSkeleton className="hidden lg:block"/>
					<ProductCardSkeleton className="hidden lg:block"/>
					<ProductCardSkeleton className="hidden lg:block"/>
				</div> : null
			}
			<section className='my-8 w-11/12 mx-auto gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
				{
					productsListQuery.isError ? <p className="flex items-center justify-center">Could not get products</p> : null
				}
				{
					filteredProducts?.length > 0 ? (
						filteredProducts.map((product, idx) => (
							<ProductCard product={product} key={idx}/>
						))
					) : (
						productsListQuery.data?.map((product, idx) => (
							<ProductCard product={product} key={idx}/>
						))
					)
				}
			</section>
		</main>
	)
}


export default Products;