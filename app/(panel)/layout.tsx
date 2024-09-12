import { UserProvider } from "@/context/SessionProvider";
import { getUserDataServer } from "@/lib/getUserDataServer";
import Link from "next/link";
import { redirect } from "next/navigation";

async function PanelLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

    const data = await getUserDataServer();

    if (!data) {
        redirect('/login')
    }

    return (
        <>
            <div className="min-h-screen w-full bg-[#1f1f1f]">

                <UserProvider initialUserData={data}>
                    <div className="w-full h-full flex flex-row relative text-white">
                        <div className="h-full fixed w-[250px] p-3">
                            <div className={`h-full w-full flex flex-col gap-5 bg-black/40 rounded-2xl`}>
                                <div className="h-[70px] w-full flex justify-center items-center border-b-2">
                                    Brisas del titicaca
                                </div>
                                <div className="flex flex-col gap-3 p-5">
                                    <Link href={'#'}>Home</Link>
                                    <Link href={'#'}>Eventos</Link>
                                    <Link href={'#'}>Promociones</Link>
                                    <Link href={'#'}>Talleres</Link>
                                    <Link href={'#'}>Noticias</Link>
                                    <Link href={'/admin/usuarios'}>Usuarios</Link>
                                </div>
                            </div>
                        </div>
                        <div className={`ml-[250px] p-4`}>
                            {JSON.stringify(data)}
                            {JSON.stringify(data)}
                            {JSON.stringify(data)}
                            {JSON.stringify(data)}
                            {JSON.stringify(data)}
                            {JSON.stringify(data)}
                            {JSON.stringify(data)}
                            {JSON.stringify(data)}
                            {JSON.stringify(data)}
                            {JSON.stringify(data)}
                            {JSON.stringify(data)}
                            {JSON.stringify(data)}
                            {JSON.stringify(data)}
                            {JSON.stringify(data)}
                            {JSON.stringify(data)}
                            {JSON.stringify(data)}
                            {JSON.stringify(data)}
                            {JSON.stringify(data)}
                            {JSON.stringify(data)}
                            {JSON.stringify(data)}
                            {JSON.stringify(data)}
                            {JSON.stringify(data)}
                            {JSON.stringify(data)}
                            {JSON.stringify(data)}
                            {JSON.stringify(data)}
                            {JSON.stringify(data)}
                            {JSON.stringify(data)}
                            {JSON.stringify(data)}
                            {JSON.stringify(data)}
                            {JSON.stringify(data)}
                            {JSON.stringify(data)}
                            {JSON.stringify(data)}
                            {JSON.stringify(data)}
                            {JSON.stringify(data)}
                            {JSON.stringify(data)}
                            {JSON.stringify(data)}
                            {JSON.stringify(data)}
                            {JSON.stringify(data)}
                            {children}
                        </div>
                    </div>
                </UserProvider>
            </div>
        </>
    )
}

export default PanelLayout;