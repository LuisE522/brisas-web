'use client'

import { useForm, SubmitHandler } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { API_URL } from "@/const"
import { setCookie } from "cookies-next";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation"

export default function Login() {

    const { register, handleSubmit } = useForm()

    const router = useRouter()

    const onSubmit = async (data: any) => {
        console.log(data)

        const dataJson = {
            'email': data.email,
            'password': data.pass
        }

        const resLogin = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(dataJson)
        })

        const res = await resLogin.json()

        if (!resLogin.ok) {
            toast.warning('Datos incorrectos',)
            return null;
        }

        setCookie('auth_token', res.token, { maxAge: 3600 })
        toast.success('Inicio de sesion correctamente.')

        router.push('/admin')


    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[90%] mx-auto flex flex-col gap-5">

                <div className="grid w-full items-center gap-1.5">
                    <Label className="text-white" htmlFor="email">Email</Label>
                    <Input className="bg-white" type="email" placeholder="Email" id="email" {...register('email', { required: true })} />
                </div>

                <div className="grid w-full items-center gap-1.5">
                    <Label className="text-white" htmlFor="password">Email</Label>
                    <Input className="bg-white" type="password" placeholder="******" id="password" {...register('pass', { required: true })} />
                </div>

                <Button variant="default" className="dark w-full bg-black hover:bg-black text-white">Iniciar</Button>
            </form>
        </>
    )
}
