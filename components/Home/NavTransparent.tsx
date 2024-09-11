import Image from "next/image";
import Link from "next/link";
import { FaRegCircleUser } from "react-icons/fa6";
import { GrLanguage } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";

export default function NavTransparent() {
    return (
        <div className="w-full mx-auto"> {/* max-w-[1280px] */}
            <div className="w-full grid grid-cols-3 justify-between  h-[124px] items-center">
                <div className="w-full text-white flex justify-center gap-5">
                    <Link href="#eventos">Eventos</Link>
                    <Link href="#cultural">Cultural</Link>
                </div>
                <Image unoptimized src={`/assets/images/nav_logo.png`} width={0} height={0} alt="Logo" className="h-[60px] w-auto " />
                <div className="text-white w-full flex justify-between gap-3 items-center">
                    <div className="w-full flex justify-start gap-8 items-center">
                        <Image unoptimized src={'/assets/images/logo nav_Puquina_Qocha.png'} height={0} width={0} alt="Puquina Q´ocha" className="w-auto h-[60px]" />
                        <Image unoptimized src={'/assets/images/logo_CFA_Brisas_Vertical.png'} height={0} width={0} alt="Puquina Q´ocha" className="w-auto h-[60px]" />
                    </div>
                    <div className="w-full h-full items-center gap-3 flex"> {/* justify-end */}
                        <GrLanguage className='' size={25} />
                        <FaRegCircleUser className='' size={25} />
                        <IoSearch className='' size={25} />
                    </div>
                </div>
            </div>
        </div>
    )
}
