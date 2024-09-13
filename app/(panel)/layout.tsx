import { UserProvider } from "@/context/SessionProvider";
import { getUserDataServer } from "@/lib/getUserDataServer";
import Link from "next/link";
import { redirect } from "next/navigation";

import { FaHome, FaUsers } from "react-icons/fa";
import { RiDiscountPercentFill } from "react-icons/ri";
import { GrWorkshop } from "react-icons/gr";
import { FaRegNewspaper } from "react-icons/fa6";
import { MdEventAvailable } from "react-icons/md";

async function PanelLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

    const data = await getUserDataServer();

    if (!data) {
        redirect('/login')
    }

    return (
        <>
            <div className="min-h-screen w-full bg-[#140107]">

                <UserProvider initialUserData={data}>
                    <div className="w-full h-full flex flex-row relative text-white">
                        <div className="h-full fixed w-[250px] ">
                            <div className={`h-full w-full flex flex-col gap-5 bg-black/40 `}>
                                <div className="h-[70px] w-full flex justify-center items-center border-b-2 border-white/20">
                                    Brisas del titicaca
                                </div>
                                <div className="flex flex-col gap-3 p-5">
                                    <Link href={'#'} className="w-full px-3 py-2 flex flex-row gap-2 items-center bg-black/70 rounded-lg"><FaHome /> Home</Link>
                                    <Link href={'#'} className="w-full px-3 py-2 flex flex-row gap-2 items-center rounded-lg"><MdEventAvailable /> Eventos</Link>
                                    <Link href={'#'} className="w-full px-3 py-2 flex flex-row gap-2 items-center rounded-lg"><RiDiscountPercentFill /> Promociones</Link>
                                    <Link href={'#'} className="w-full px-3 py-2 flex flex-row gap-2 items-center rounded-lg"><GrWorkshop /> Talleres</Link>
                                    <Link href={'#'} className="w-full px-3 py-2 flex flex-row gap-2 items-center rounded-lg"><FaRegNewspaper /> Noticias</Link>
                                    <Link href={'/admin/usuarios'} className="w-full px-3 py-2 flex flex-row gap-2 items-center rounded-lg"><FaUsers /> Usuarios</Link>
                                </div>
                            </div>
                        </div>
                        <div className={`ml-[250px] p-4 w-full`}>
                            {children}
                        </div>
                    </div>
                </UserProvider>
            </div>
        </>
    )
}

export default PanelLayout;