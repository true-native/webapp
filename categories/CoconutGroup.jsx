import ProductCard from '../components/cards/ProductCard'

const CoconutGroup = ({products}) => {
    return (
        <div className='w-12/12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3'>
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

export default CoconutGroup