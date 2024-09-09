import Image from "next/image";
import Link from "next/link";
import { FaRegCircleUser } from "react-icons/fa6";
import { GrLanguage } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";

export default function Home() {

  const logoImage = 'https://www.brisasdeltiticaca.com/wp-content/uploads/2023/04/Logo-Negativo-Blanco.svg'

  return (
    <div className="min-h-screen bg-gradient-to-bl from-[#00765A] to-[#021F73]">
      <div className="w-full max-w-[1280px] mx-auto h-full flex flex-col gap-10 pb-4">
        <div className="w-full  grid grid-cols-3 justify-between h-[124px] items-center">
          <Image src={logoImage} width={0} height={0} alt="Logo" className="h-[85px] w-auto " />
          <div className="w-full text-white flex justify-center gap-5">
            <Link href="#eventos">Eventos</Link>
            <Link href="#cultural">Cultural</Link>
          </div>
          <div className="text-white w-full flex justify-end gap-3">
            <GrLanguage className='' size={25} />
            <FaRegCircleUser className='' size={25} />
            <IoSearch className='' size={25} />
          </div>
        </div>

        <div className="grid grid-cols-3 w-full h-full">
          <div className="border-2 h-[600px]"></div>
        </div>

      </div>
    </div>
  );
}
