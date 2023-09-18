"use client"

import React from 'react'
import { Londrina_Solid } from 'next/font/google'
import { motion } from "framer-motion";

import ProductCard from '../components/cards/ProductCard';
import { IoArrowForward } from 'react-icons/io5';
import RectButton from '../components/buttons/RectButton';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import ProductCardSkeleton from '../components/skeleton/ProductCardSkeleton'

const londrina = Londrina_Solid({ subsets: ['latin'], weight: '400', })

const motionContainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const motionItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

const motionButton = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    },
    delayChildren: 4
}

const Featured = () => {
    const featuredProductsListQuery = useQuery({
        queryKey: ['featured-products'],
        queryFn: async () => await axios.get('/api/products/featured').then((res) => res.data)
    })

    return (
        <section className="w-11/12 flex flex-col text-center my-10 mx-auto 3xl:w-10/12 2xl:my-20 text-primary-500">
            <div className='text-center'>
                <h2 className={`${londrina.className} heading text-3xl xl:text-4xl`}>FEATURED PRODUCTS</h2>
                <p className='text-slate-400 mt-4'>
                    Super foods that are healthy and delicious.
                </p>
            </div>

            {
                featuredProductsListQuery.isError ? <strong>Could not get products</strong> : null
            }
            {
                featuredProductsListQuery.isLoading ?
                <div className='w-full my-5 gap-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:my-10 mx-auto 3xl:my-8 xl:min-h-[550px]'>
                    <ProductCardSkeleton/>
                    <ProductCardSkeleton/>
                    <ProductCardSkeleton/>
                    <ProductCardSkeleton/>
                </div>
                :
                <motion.ul
                    className='w-full my-5 gap-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:my-10 mx-auto 3xl:my-8 xl:min-h-[550px]'
                    variants={motionContainer}
                    initial="hidden"
                    animate="visible"
                >
                {
                    featuredProductsListQuery.data ? featuredProductsListQuery.data.map((prd, idx) => idx < 4 ? (
                        <motion.li
                            key={prd.pid}
                            variants={motionItem}
                            className='relative group p-3 border-2 border-transparent lg:hover:border-gray-100 rounded-3xl shadow-nav shadow-gray-200 bg-white h-fit'
                        >
                            <ProductCard product={prd} />
                        </motion.li>
                    ) : '') : ''
                }
                </motion.ul>
            }
            <motion.div
                className="mt-4 mx-auto 3xl:mt-8"
                variants={motionButton}
                initial="hidden"
                animate="visible"
            >
                <RectButton text="VIEW ALL PRODUCTS" variant='primary' iconRight={<IoArrowForward/>} link="/products"/>
            </motion.div>
        </section>
    )
}

export default Featured

