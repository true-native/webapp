"use client"

import React from 'react'
import PrivateLayout from '../../../(private-views)/_layout'

import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
} from '@tanstack/react-table'
import { useQuery } from '@tanstack/react-query'
import { useAuth } from '../../../../contexts/AuthContext'
import { HiSortAscending } from 'react-icons/hi'
import axios from 'axios'
import { IoOpen, IoPencil, IoToggle, IoTrash } from 'react-icons/io5'
import { notify, notifyLoading } from '../../../../utils/notify'
import Link from 'next/link'
import ProductsTableSkeleton from '../../../../components/skeleton/ProductsTableSkeleton'

const ProductsList = () => {
    const { user } = useAuth()

    const productsListQuery = useQuery({
		queryKey: ['admin-products'],
        queryFn: async () => await axios.post('/api/monitors/products/list', {user}).then((res) => res.data)
    })

    const handleUpdateProductStatus = async (currentStatus, pid) => {
        const toastId = notifyLoading('Updating product status...')

        let data = currentStatus === 'active' ? 'inactive' : 'active'
        await axios.post('/api/monitors/products/update', { status: data, pid: pid }).then((response) => {
            if (response.status === 200) {
                notify('success', 'Status Updated Successfully', null, null, toastId)
                productsListQuery.refetch()
            }
        }).catch((err) => {
            console.error(err)
            notify('error', 'Could not update status!', null, null, toastId)
        })
    }

    const renderProductImage = (info) => {
        return (
            <div className='flex justify-center'>
                <img
                    src={info.getValue()} alt=""
                    className='h-[30px] w-[30px] rounded-full border border-slate-400 shadow-xl cursor-pointer hover:w-[400px] hover:h-[400px] hover:absolute hover:left-10 hover:top-10 hover:z-50 hover:rounded-lg'
                />
            </div>
        )
    }

    const renderProductName = (info) => {
        return (
            <div className='flex flex-col'>
                <small className='text-primary-200 text-xs'>{info.getValue().sub}</small>
                <p className='font-semibold'>{info.getValue().name}</p>
            </div>
        )
    }

    const renderProductCategory = (info) => {
        let categoryName

        switch (info.getValue()) {
            case 'acai':
                categoryName = 'Açaí'
                break;
            case 'pitaya':
                categoryName = 'Pitaya'
                break;
            case 'granola':
                categoryName = 'Granola'
                break;
            case 'organic_iqf':
                categoryName = 'Organic IQF'
                break;
            case 'conventional_iqf':
                categoryName = 'Conventional IQF'
                break;
            case 'dry_goods':
                categoryName = 'Dry Goods'
                break;
            case 'honey':
                categoryName = 'Honey'
                break;
            default:
                categoryName = 'Not Provided / Not Listed'
                break;
        }
        return categoryName
    }

    const renderProductNew = (info) => {
        return info.getValue() === 'new_yes' ? (
            <div className='px-4 py-1 text-sm font-semibold rounded-full bg-secondary-500/10 text-secondary-500 border border-secondary-500 w-fit'>New Product</div>
        ) : ''
    }

    const renderProductStatus = (info) => {
        let displayStatus = info.getValue().status === 'active' ? 'Active' : 'Inactive'
        return (
            <div className='flex items-center justify-between w-full'>
                {displayStatus}
                <IoToggle className={`text-3xl ml-4 cursor-pointer ${info.getValue().status === 'active' ? 'text-green-500' : 'text-slate-500 rotate-180'}`}
                    onClick={() => handleUpdateProductStatus(info.getValue().status, info.getValue().pid)}
                />
            </div>
        )
    }

    const renderProductPage = (info) => {
        return (
            <Link
                className='text-primary-200 flex items-center gap-2 font-semibold text-sm'
                href={{pathname: `/products/${info.getValue().category}`, query: { product: JSON.stringify(info.getValue()) }}}
                target='_blank'
            >
                View Product Page
                <IoOpen/>
            </Link>
        )
    }

    const renderEditProductButton = (url) => {
        if (!url) return ''

        return (
            <Link href={url} className='flex items-center justify-center bg-blue-500 w-[30px] h-[30px] rounded-md shadow-lg' target='_blank'>
                <IoPencil className='text-sm text-slate-200 p-0 m-0'/>
            </Link>
        )
    }

    const renderDeleteProductButton = (url) => {
        if (!url) return ''

        return (
            <Link href={url} className='flex items-center justify-center bg-red-500 w-[30px] h-[30px] rounded-md shadow-lg' target='_blank'>
                <IoTrash className='text-sm text-slate-200 p-0 m-0'/>
            </Link>
        )
    }

    const renderMonitorActions = (info) => {
        let actions = [];

        actions.push(renderEditProductButton(info.getValue()))
        actions.push(renderDeleteProductButton(info.getValue()))

        return actions;
    }

    const columnHelper = createColumnHelper()

    const columns = [
        columnHelper.accessor('image_full', {
            header: () => <div className='text-center'>Image</div>,
            cell: info => renderProductImage(info),
        }),
        columnHelper.accessor('sku', {
            cell: info => info.getValue(),
            header: () => <span>SKU</span>,
        }),
        columnHelper.accessor(row => row, {
            id: 'name',
            header: () => <div className="flex items-center justify-between">
                Name
                <HiSortAscending className='text-slate-400 dark:text-slate-400 ml-2'/>
            </div>,
            cell: info => renderProductName(info),
        }),
        columnHelper.accessor('category', {
            header: () => <div className="flex items-center justify-between">
                Category
                <HiSortAscending className='text-slate-400 dark:text-slate-400 ml-2'/>
            </div>,
            cell: info => renderProductCategory(info),
        }),
        columnHelper.accessor('new', {
            cell: info => <div className='flex justify-center'>{renderProductNew(info)}</div>,
            header: () => <div className='flex justify-center'>New Product</div>,
        }),
        columnHelper.accessor(row => row, {
            id: 'status',
            header: () => <div className="flex items-center justify-between">
                Product Status
                <HiSortAscending className='text-slate-400 dark:text-slate-400 ml-2'/>
            </div>,
            cell: info => renderProductStatus(info),
        }),
        columnHelper.accessor(row => row, {
            id: 'product_page',
            header: () => <div className="flex items-center justify-center">
                Product Page
            </div>,
            cell: info => <div className='flex justify-center'>{renderProductPage(info)}</div>,
        }),
        columnHelper.accessor(row => row, {
            id: 'actions',
            header: () => <div className='text-center'>Actions</div>,
            cell: info => <div className='flex items-center justify-center gap-2'>{renderMonitorActions(info)}</div>
        }),
    ]

    const table = useReactTable({
        data: productsListQuery.data,
        columns,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
    	getPaginationRowModel: getPaginationRowModel(),
		initialState: {
			pagination: {
				pageSize: 20,
			},
		}
    })

    return (
        <PrivateLayout>
            <main className="p-5 w-full min-h-[800px] relative">
                {
                    productsListQuery.isLoading ? <ProductsTableSkeleton /> : null
                }
                {
                    productsListQuery.isError ? <p>Something went Wrong</p> : null
                }
                {
                    Array.isArray(productsListQuery.data) && productsListQuery.data.length > 0 ? (
                        <>
                            <div className='mt-8 overflow-x-auto shadow-md rounded-lg w-full'>
                                <table className='w-full bg-white border-slate-400 text-slate-500 shadow-lg text-left'>
                                    <thead className='text-slate-500 bg-slate-200'>
                                        {table?.getHeaderGroups()?.map(headerGroup => (
                                        <tr key={headerGroup.id}>
                                            {headerGroup.headers.map(header => (
                                                <th key={header.id} scope='col' className='px-6 py-3 font-semibold whitespace-nowrap'>
                                                    {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                                </th>
                                            ))}
                                        </tr>
                                    ))}
                                    </thead>
                                    <tbody>
                                        {table?.getRowModel()?.rows.map(row => (
                                            <tr key={row.id} className='bg-white border-b last-of-type:border-b-0'>
                                            {row.getVisibleCells().map(cell => (
                                                <td key={cell.id} className='px-6 py-2 border-r last-of-type:border-r-0'>
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                </td>
                                            ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <nav className="flex items-center justify-between pt-4" aria-label="Table navigation">
                                <div className='flex items-center'>
                                    <select
                                        className='h-8 text-sm pl-1 pr-4 leading-tight border-slate-300 rounded-lg bg-slate-100 text-slate-600'
                                        value={table.getState().pagination.pageSize}
                                        onChange={e => {
                                            table.setPageSize(Number(e.target.value))
                                        }}
                                    >
                                        {[5, 10, 20, 30, 40, 50].map(pageSize => (
                                            <option key={pageSize} value={pageSize}>
                                                Show {pageSize}
                                            </option>
                                        ))}
                                    </select>
                                    <span className="ml-4 text-sm font-normal text-slate-500">
                                        Showing
                                        <span className="font-semibold text-slate-800 mx-2">
                                        {
                                            productsListQuery.data.length > table.getState().pagination.pageSize ? table.getState().pagination.pageSize : productsListQuery.data.length
                                        }
                                        </span>
                                        of
                                        <span className="font-semibold text-slate-800 mx-2">{productsListQuery.data.length}</span>
                                        Records
                                    </span>
                                </div>
                                <div className='flex items-center'>
                                    <span className="mr-4 flex items-center text-sm font-normal text-slate-500">
                                        <div>Page</div>
                                        <strong className='font-semibold text-slate-800 mx-2'>
                                            {table.getState().pagination.pageIndex + 1}
                                            <span className='font-normal text-slate-500 mx-2'>of</span>
                                            {table.getPageCount()}
                                        </strong>
                                    </span>
                                    <ul className="inline-flex -space-x-px text-sm h-8">
                                        <li>
                                            <button
                                                onClick={() => table.setPageIndex(0)}
                                                disabled={!table.getCanPreviousPage()}
                                                className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-slate-500 bg-white border border-slate-300 rounded-l-lg hover:bg-slate-100 hover:text-slate-700 "
                                            >
                                                First
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => table.previousPage()}
                                                disabled={!table.getCanPreviousPage()}
                                                className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-slate-500 bg-white border border-slate-300 hover:bg-slate-100 hover:text-slate-700"
                                            >
                                                Previous
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => table.nextPage()}
                                                disabled={!table.getCanNextPage()}
                                                className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-slate-500 bg-white border border-slate-300 hover:bg-slate-100 hover:text-slate-700"
                                            >
                                                Next
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                                                disabled={!table.getCanNextPage()}
                                                className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-slate-500 bg-white border border-slate-300 hover:bg-slate-100 hover:text-slate-700 rounded-r-lg"
                                            >
                                                Last
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </>
                    ) : null
                }
            </main>
        </PrivateLayout>
    )
}

export default ProductsList
