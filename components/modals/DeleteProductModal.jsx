import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { IoClose } from 'react-icons/io5'

const DeleteProductModal = ({isDeleteDialogOpen, closeModal, product, handleDeleteProduct}) => {

	return (
		<Transition appear show={isDeleteDialogOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <div className='flex items-center justify-between'>
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-slate-500"
                                    >
                                        Delete Product Confirmation
                                    </Dialog.Title>
                                    <IoClose className='p-0 m-0 text-2xl text-slate-300 drop-shadow-xl cursor-pointer' onClick={closeModal}/>
                                </div>
                                <hr className='my-4'/>
                                <div className="mt-2">
                                    <div className='flex items-center gap-3'>
                                        <img src={product.image_full} alt="" className='w-[80px] h-[80px] rounded-lg'/>
                                        <div className='flex flex-col'>
                                            <small className='text-primary-200'>{product.sub}</small>
                                            <h2 className='font-semibold text-slate-500 leading-4'>{product.name}</h2>
                                            <div className="flex items-center gap-2">
                                                <div className="flex items-center text-sm gap-2 mt-3 text-slate-500">
                                                    <strong>SKU:</strong>
                                                    <p>{product.sku}</p>
                                                </div>
                                                <div className="flex items-center text-sm gap-2 mt-3 text-slate-500">
                                                    <strong>Cat:</strong>
                                                    <p>{product.category}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-slate-500 mt-4 text-sm bg-slate-50 p-5 rounded-xl">
                                        Are you sure you want to delete this product?
                                        This action cannot be undone, and all information will be forever gone.
                                    </p>
                                </div>
                                <hr className='my-4'/>
                                <div className="mt-4 flex items-center justify-between">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-slate-100 px-4 py-2 text-sm font-medium text-slate-500 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-200 focus-visible:ring-offset-2"
                                        onClick={closeModal}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2"
                                        onClick={() => {handleDeleteProduct(product.pid); closeModal()}}
                                    >
                                        I'm aware and want to proceed
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
	)
}

export default DeleteProductModal