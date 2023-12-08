"use client"

import React, { useState } from 'react'
import PrivateLayout from '../../../(private-views)/_layout'

import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
    getSortedRowModel
} from '@tanstack/react-table'
import { useQuery } from '@tanstack/react-query'
import { HiSortAscending, HiSortDescending } from 'react-icons/hi'
import axios from 'axios'
import { IoPencil, IoSearch, IoTrash } from 'react-icons/io5'
import { notify, notifyLoading } from '../../../../utils/notify'
import Link from 'next/link'
import { v4 } from 'uuid'
import DeleteUserModal from '../../../../components/modals/DeleteUserModal'
import ProductsTableSkeleton from '../../../../components/skeleton/ProductsTableSkeleton'
import { useAuth } from '../../../../contexts/AuthContext'

const UsersList = () => {
    const { user } = useAuth()

    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
    const [userToBeDeleted, setUserToBeDeleted] = useState({})
    const [sorting, setSorting] = useState([])
    const [searchValue, setSearchValue] = useState('')

    const handleCloseDeleteUserModal = () => {
        setIsDeleteDialogOpen(false)
        setUserToBeDeleted({})
    }

    const handleOpenDeleteUserModal = (info) => {
        console.log(info)
        setIsDeleteDialogOpen(true)
        setUserToBeDeleted(info)
    }

    const handleDeleteUser = async (uid) => {
        const toastId = notifyLoading('Deleting user ...')

        await axios.delete('/api/monitors/users/delete', { params: { uid: uid } }).then((response) => {
            if (response.status === 200) {
                notify('success', 'User Deleted Successfully', null, null, toastId)
                usersListQuery.refetch()
            }
        }).catch((err) => {
            console.error(err)
            notify('error', 'Could not delete user!', null, null, toastId)
        })
    }

    const usersListQuery = useQuery({
		queryKey: ['admin-users'],
        queryFn: async () => await axios.post('/api/monitors/users/list').then((res) => res.data),
        refetchOnMount: 'always'
    })

    const renderUserType = (info) => {
        return info.getValue().type === 'admin' ? (
            <div className='mx-auto py-1 px-4 font-semibold text-sm text-green-500 bg-yellow-500/10 border-2 border-green-500 rounded-full w-fit'>Admin</div>
        ) : (
            <div className='mx-auto py-1 px-4 font-semibold text-sm text-blue-500 bg-blue-500/10 border-2 border-blue-500 rounded-full w-fit'>Editor</div>
        )
    }

    const renderEditUserButton = (info) => {
        if (!info) return ''

        return (
            <Link key={v4()}
                className='flex items-center justify-center bg-blue-500 w-[30px] h-[30px] rounded-md shadow-lg pointer-events-none opacity-50'
                href={{pathname: `/products/edit/${info.getValue().category}`, query: { product: JSON.stringify(info.getValue()) }}}
            >
                <IoPencil className='text-sm text-slate-200 p-0 m-0'/>
            </Link>
        )
    }

    const renderDeleteUserButton = (info) => {
        if (!info) return ''

        return (
            <button key={v4()}
                className='flex items-center justify-center bg-red-500 w-[30px] h-[30px] rounded-md shadow-lg'
                onClick={() => handleOpenDeleteUserModal(info.getValue())}
            >
                <IoTrash className='text-sm text-slate-200 p-0 m-0'/>
            </button>
        )
    }

    const renderMonitorActions = (info) => {
        let actions = [];

        if (!info || user.type !== 'admin') return ''

        actions.push(renderEditUserButton(info))
        actions.push(renderDeleteUserButton(info))

        return actions;
    }

    const columnHelper = createColumnHelper()

    const columns = [
        columnHelper.accessor('uid', {
            cell: info => <div className='whitespace-nowrap'>{info.getValue()}</div>,
            header: () => <div>ID</div>
        }),
        columnHelper.accessor('displayName', {
            cell: info => <div className='whitespace-nowrap'>{info.getValue()}</div>,
            header: () => <div>Name</div>,
        }),
        columnHelper.accessor('email', {
            cell: info => <div className='whitespace-nowrap'>{info.getValue()}</div>,
            header: () => <div>Email</div>,
        }),
        columnHelper.accessor(row => row, {
            id: 'type',
            cell: info => renderUserType(info),
            header: () => <div className='mx-auto'>Type</div>
        }),
        columnHelper.accessor(row => row, {
            id: 'actions',
            enableSorting: false,
            enableColumnFilter: false,
            header: () => <div className='text-center'>Actions</div>,
            cell: info => <div className='flex items-center justify-center gap-2 whitespace-nowrap'>{renderMonitorActions(info)}</div>
        })
    ]

    const table = useReactTable({
        data: usersListQuery.data,
        columns,
		getCoreRowModel: getCoreRowModel(),
    	getPaginationRowModel: getPaginationRowModel(),
		initialState: {
			pagination: {
				pageSize: 20,
			},
		},
        state: {
            sorting,
            globalFilter: searchValue
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setSearchValue,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        enableSortingRemoval: false,
    })

    return user ? (
        <PrivateLayout>
            <main className="p-5 w-full xl:w-10/12 mx-auto min-h-[300px] 2xl:min-h-[670px] 4xl:min-h-[970px]">
                {
                    usersListQuery.isError ? <p>Something went Wrong</p> : null
                }
                {
                    usersListQuery.isLoading ? (
                        <ProductsTableSkeleton />
                    )
                    :
                    Array.isArray(usersListQuery.data) && usersListQuery.data.length > 0 ? (
                        <>
                            <div className='w-full xl:w-10/12 mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between'>
                                <div>
                                    <h1 className='mt-5 text-2xl text-primary-400 font-bold'>Listed User</h1>
                                    <p>These are all the users in the system.</p>
                                </div>
                                <div className="flex items-center mt-6 w-full lg:w-fit xl:mt-0">
                                    <div className="relative w-full">
                                        <input
                                            value={searchValue || ''}
                                            onChange={(e) => setSearchValue(e.target.value)}
                                            type="text"
                                            aria-label="search"
                                            placeholder="Search product"
                                            className="h-[40px] px-4 border-2 border-slate-300 rounded-full w-full pr-10 text-slate-400 placeholder-slate-300"
                                        />
                                        <IoSearch className="absolute top-3 right-4 text-slate-400" />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-8 overflow-x-auto shadow-md rounded-lg w-full scroll-xs'>
                                <table className='w-full bg-white border-slate-400 text-slate-500 shadow-lg text-left'>
                                    <thead className='text-slate-500 bg-slate-200'>
                                        {table?.getHeaderGroups()?.map(headerGroup => (
                                        <tr key={headerGroup.id}>
                                            {headerGroup.headers.map(header => (
                                                <th key={header.id} scope='col' className='px-6 py-3 font-semibold whitespace-nowrap'>
                                                    {
                                                        header.isPlaceholder
                                                        ? null
                                                        : (
                                                            <div
                                                                {...{
                                                                    className: header.column.getCanSort()
                                                                    ? 'cursor-pointer select-none flex items-center justify-between'
                                                                    : '',
                                                                    onClick: header.column.getToggleSortingHandler(),
                                                                }}
                                                            >
                                                                {   flexRender(
                                                                        header.column.columnDef.header,
                                                                        header.getContext()
                                                                    )}
                                                                    {{
                                                                        asc: <HiSortAscending className='text-slate-400 dark:text-slate-400 ml-2'/>,
                                                                        desc: <HiSortDescending className='text-slate-400 dark:text-slate-400 ml-2'/>,
                                                                    }[header.column.getIsSorted()] ?? null
                                                                }
                                                            </div>
                                                        )
                                                    }
                                                </th>
                                            ))}
                                        </tr>
                                    ))}
                                    </thead>
                                    <tbody>
                                        {table?.getRowModel().rows.map(row => (
                                            <tr key={row.id} className='bg-white border-b last-of-type:border-b-0 hover:bg-slate-100'>
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

                            <nav className="flex flex-col gap-4 lg:flex-row items-center justify-between pt-4" aria-label="Table navigation">
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
                                            usersListQuery.data.length > table.getState().pagination.pageSize ? table.getState().pagination.pageSize : usersListQuery.data.length
                                        }
                                        </span>
                                        of
                                        <span className="font-semibold text-slate-800 mx-2">{usersListQuery.data.length}</span>
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
            <DeleteUserModal
                isDeleteDialogOpen={isDeleteDialogOpen}
                setIsDeleteDialogOpen={setIsDeleteDialogOpen}
                user={userToBeDeleted}
                closeModal={handleCloseDeleteUserModal}
                handleDeleteUser={handleDeleteUser}
            />
        </PrivateLayout>
    ) : (
        <strong>Not allowed</strong>
    )
}

export default UsersList
