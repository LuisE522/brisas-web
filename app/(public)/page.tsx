import CaroucelPeronsajes from "@/components/Home/CaroucelPeronsajes";
import NavFondo from "@/components/Home/NavFondo";
import NavTransparent from "@/components/Home/NavTransparent";
import PopUp from "@/components/Home/PopUp";

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

  return (
    <>
      <div className="h-screen bg-[url('/assets/images/fondo_home.png')] bg-center bg-cover"> {/* bg-gradient-to-bl from-[#00765A] to-[#021F73] */}
        <div className="w-full h-full flex flex-col gap-5 pb-4">
          {/* <NavFondo /> */}

          <div className="">
            <NavTransparent />
          </div>

          <div className="w-full max-w-[1280px] mx-auto h-full flex flex-col gap-5">
            <div className="grid grid-cols-3 w-full h-[calc(100%-124px-20px)]">
              <CaroucelPeronsajes images={i_images} />
              <div className="w-full h-full flex items-center justify-center">
                <div className="grid grid-cols-2 gap-x-5 w-full h-auto">
                  <div className="w-full h-auto flex flex-col gap-3 justify-center items-center">
                    <div className="w-full h-[100px] border-2"></div>
                    <button className="w-fit inline-flex items-center justify-center px-8 py-2 font-sans font-semibold tracking-wide text-white bg-transparent border-2 border-[#FFEC00] hover:bg-[#FFEC00] transition-all duration-300 rounded-full">
                      Reservar
                    </button>
                  </div>

                  <div className="w-full h-auto flex flex-col gap-3 justify-center items-center">
                    <div className="w-full h-[100px] border-2"></div>
                    <button className="w-fit inline-flex items-center justify-center px-8 py-2 font-sans font-semibold tracking-wide text-white bg-transparent border-2 border-[#FC228A] hover:bg-[#FC228A] transition-all duration-300 rounded-full">
                      Reservar
                    </button>
                  </div>
                </div>
              </div>
              <CaroucelPeronsajes images={d_images} />
            </div>

          </div>
        </div>

      </div>

      <div className="h-screen bg-[#1f1f1f]"></div>

      <PopUp />

    </>

  );
}