'use client'

import { ListUsers, UsuariosRoles } from "@/app/(panel)/admin/models/Usuarios";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { FaEdit } from "react-icons/fa";

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { API_URL } from "@/const";
import { getAuthTokenClient } from "@/lib/getUserData";
import { Checkbox } from "@/components/ui/checkbox"
import { Roles } from "@/app/(panel)/admin/models/Roles";


interface Props {
    usuario: ListUsers
    listRoles: Roles[]
}

export default function EditUser({ usuario, listRoles }: Props) {

    const { register, handleSubmit } = useForm()

    const [dni, setDni] = useState<string>(usuario.dni)
    const [username, setUsername] = useState<string>(usuario.username)
    const [email, setEmail] = useState<string>(usuario.email)
    const [listUserRoles, setListUserRoles] = useState(usuario.usuarios_roles.map((usuario_soles: UsuariosRoles) => usuario_soles.idRol));

    const token = getAuthTokenClient();

    const onSubmit = async () => {
        const dataJson = {
            dni: dni,
            username: username,
            email: email,
            id: usuario.id,
            listUserRoles
        }

        console.log(listUserRoles)

        const userUpdate = await fetch(`${API_URL}/auth/update`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(dataJson)
        })

        const data = await userUpdate.json()

    }

    

    const rolCheckedChange = (rolId: number) => {
        if (listUserRoles.includes(rolId)) {
            const newListId = listUserRoles.filter(role => role !== rolId);
            setListUserRoles(newListId);
        } else {
            const newListId = [...listUserRoles, rolId];
            setListUserRoles(newListId);
        }
    };


    return (
        <>
            <Dialog>
                <DialogTrigger>
                    <FaEdit size={30} className='cursor-pointer' />
                </DialogTrigger>
                <DialogContent className="dark text-white">
                    <DialogHeader>
                        <DialogTitle>Editar usuario</DialogTitle>
                        <DialogDescription className="w-full flex flex-col pt-5 gap-5">
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="dni">DNI</Label>
                                <Input type="text" id="dni" readOnly value={dni} onChange={(e) => setDni(e.target.value)} />
                            </div>
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="username">Username</Label>
                                <Input autoFocus type="text" id="username" value={username} onChange={(e: any) => setUsername(e.target.value)} />
                            </div>
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" id="email" value={email} onChange={(e: any) => setEmail(e.target.value)} />
                            </div>

                            <div className="flex flex-row flex-wrap gap-3">
                                {listRoles.map((rol: Roles, index: number) => (
                                    <div className="flex items-center space-x-2" key={index}>
                                        <Checkbox id={rol.nombre} checked={listUserRoles.includes(rol.id)} onCheckedChange={() => rolCheckedChange(rol.id)} />
                                        <label
                                            htmlFor={rol.nombre}
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            {rol.nombre}
                                        </label>
                                    </div>
                                ))}
                            </div>

                            <Button onClick={onSubmit}>Actualizar</Button>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </>
    )
}
