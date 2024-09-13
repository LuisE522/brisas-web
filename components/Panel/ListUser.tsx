import { ListUsers } from '@/app/(panel)/admin/models/Usuarios'
import React from 'react'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import EditUser from './EditUser'
import { Roles } from '@/app/(panel)/admin/models/Roles'

interface Props {
    list: ListUsers[]
    listRoles: Roles[]
}

export default function ListUser({ list, listRoles }: Props) {

    console.log(list)

    return (
        <>
            <div className='w-full flex flex-col gap-5'>

                <div className='bg-black/40 px-5 py-3 rounded-lg'>
                    <h1 className='text-xl'>Lista de todos los usuarios</h1>
                </div>

                <div className=' bg-black/40 px-5 py-3 rounded-lg'>
                    <Table className='w-full dark'>
                        <TableCaption>Lista de todos los usuarios</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">ID</TableHead>
                                <TableHead>DNI</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Username</TableHead>
                                <TableHead>Accion</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {list.map((user: ListUsers, index: number) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{user.id}</TableCell>
                                    <TableCell>{user.dni}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.username}</TableCell>
                                    <TableCell className='flex flex-row gap-3 items-center'>
                                        <EditUser usuario={user} listRoles={listRoles} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>

        </>
    )
}
