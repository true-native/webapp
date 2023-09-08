import React from 'react'
import { IoCloseCircle } from 'react-icons/io5'

const ProductImageModal = ({url, isModalVisible, setIsModalVisible}) => {
	return (
		<div className={`${isModalVisible? 'grid' : 'hidden'} w-full h-full bg-black/50 place-items-center absolute z-50 top-0 left-0`}>
			<div className='relative rounded-2xl overflow-clip shadow-xl'>
				<IoCloseCircle className='text-3xl text-secondary-500 shadow-xl cursor-pointer absolute top-4 right-4 rounded-full'
					onClick={() => setIsModalVisible(false)}
				/>
				<img src={url} alt=""/>
			</div>
		</div>
	)
}

export default ProductImageModal