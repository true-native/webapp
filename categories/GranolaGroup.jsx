import React from 'react'

import ProductCard from '../components/cards/ProductCard'

const GranolaGroup = ({products}) => {
    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
            {
                products && products.map((prod) => (
                    <ProductCard
                        href={`/products/${prod.category}/${prod ? prod.pid : ''}`}
                        image={prod.images.large}
                        category={prod.category}
                        name={prod.name}
                        text={prod.card_text}
                        weight={prod.size}
                        key={prod.pid}
                    />
                ))
            }
        </div>
    )
}

export default GranolaGroup