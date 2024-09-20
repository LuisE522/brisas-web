'use client'

import CaroucelPeronsajes from "@/components/Home/CaroucelPeronsajes";
import NavFondo from "@/components/Home/NavFondo";
import NavTransparent from "@/components/Home/NavTransparent";
import PopUp from "@/components/Home/PopUp";
import { useLanguage } from "@/context/LanguageProvider";
import Image from "next/image";

import trs from '@/public/locales/translate.json'

export default function Home() {

  const i_images = [
    "/assets/images/personajes/i_frame_10.png",
    "/assets/images/personajes/i_frame_9.png",
    "/assets/images/personajes/i_frame_8.png",
    "/assets/images/personajes/i_frame_7.png",
    "/assets/images/personajes/i_frame_6.png",
  ]

  const d_images = [
    "/assets/images/personajes/d_frame_17.png",
    "/assets/images/personajes/d_frame_16.png",
    "/assets/images/personajes/d_frame_15.png",
    "/assets/images/personajes/d_frame_14.png",
    "/assets/images/personajes/d_frame_13.png",
  ]

  const { language } = useLanguage();

  const translations = trs as any

  return (
    <>
      <div className="min-h-screen lg:h-screen bg-[url('/assets/images/fondo_home.png')] bg-center bg-cover relative">
        <div className="bg-black/60 h-full w-full absolute top-0 left-0 z-0"></div>
        <div className="w-full h-full flex flex-col gap-5 pb-4 relative z-10">
          {/* bg-gradient-to-bl from-[#00765A] to-[#021F73] */}
          <div className="">
            <NavTransparent />
          </div>
          <div className="w-[95%] max-w-[1280px] mx-auto h-full flex flex-col gap-5 relative">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full h-full lg:absolute z-10">

              <div className="w-full h-auto sm:h-[550px] md:h-[600px] lg:h-[calc(100%-180px-20px)] grid grid-cols-[60%_40%]">
                <CaroucelPeronsajes images={i_images} />
                <div className="w-full h-full flex flex-col gap-3 justify-center items-center">
                  <div className="w-full h-[50px] sm:h-[60px] md:h-[80px] flex justify-center">
                    <Image src={'/assets/images/logo_almuerzo_show.png'} unoptimized alt="" width={0} height={0} className="w-auto md:h-full" />
                  </div>
                  <button className="w-fit inline-flex items-center justify-center px-4 md:px-8 py-1 md:py-2 font-sans font-semibold tracking-wide text-white bg-transparent border-2 border-[#FFEC00] hover:bg-[#FFEC00] transition-all duration-300 rounded-full">
                    {translations[language].reservar}
                  </button>
                </div>
              </div>

              <div className="w-full h-auto sm:h-[550px] md:h-[600px] lg:h-[calc(100%-180px-20px)] grid grid-cols-[40%_60%]">
                <div className="w-full h-auto flex flex-col gap-3 justify-center items-center">
                  <div className="w-full h-[50px] sm:h-[60px] md:h-[80px] flex justify-center">
                    <Image src={'/assets/images/logo_noches_de_folklore.png'} unoptimized alt="" width={0} height={0} className="w-auto h-full" />
                  </div>
                  <button className="w-fit inline-flex items-center justify-center px-4 md:px-8 py-1 md:py-2 font-sans font-semibold tracking-wide text-white bg-transparent border-2 border-[#FFEC00] hover:bg-[#FFEC00] transition-all duration-300 rounded-full">
                    {translations[language].reservar}
                  </button>
                </div>
                <CaroucelPeronsajes images={d_images} />
              </div>

            </div>

          </div>
        </div>
      </div>


      <div className="h-screen bg-[#12141C]"></div>

      <PopUp />

    </>

  );
}