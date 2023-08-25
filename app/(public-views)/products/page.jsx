"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Tabs from '../../../components/tabs/Tabs'
import { useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import ProductCard from "../../../components/cards/ProductCard"

const Products = () => {

    const productsListQuery = useQuery({
        queryKey: ['products'],
        queryFn: async () => await axios.get('/api/products/list').then((res) => res.data)
    })

    return (
		<main className="w-11/12 flex flex-col text-center my-10 mx-auto 3xl:w-10/12 2xl:my-20 text-primary-500">
			{
				productsListQuery.isLoading ? <p>Loading Products</p> : null
            }
            {
				productsListQuery.isError ? <strong>Could not get products</strong> : null
            }
			<AnimatePresence>
				<div className="w-full my-5 gap-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:my-10 mx-auto 3xl:my-8">
					{
						productsListQuery.data ? productsListQuery.data.map((prd) => (
							<ProductCard product={prd} key={prd.pid}/>
						)) : ''
					}
				</div>
			</AnimatePresence>
				{/* {
					Array.isArray(acaiProductsListQuery.data) ? (
						<motion.main
							className="flex mx-auto"
							key="modal"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{duration: 2}}
							exit={{ opacity: 0 }}
							>
							<section className='w-full'>
								<Tabs products={{
									acai: acaiProductsListQuery.data,
									// pitaya: productsListQuery.data.pitaya,
									// granola: productsListQuery.data.granola,
									// dry_goods: productsListQuery.data.dryGoods,
									// iqf_fruits: productsListQuery.data.iqfFruits,
									// organic_iqf_fruits: productsListQuery.data.organicIqfFruits
								}}/>
							</section>
						</motion.main>
					) : ''
				} */}
		</main>
	)
}


export default Products;