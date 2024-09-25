"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import CaroucelPeronsajes from "./CaroucelPeronsajes";
import FondoAnimado from "./FondoAnimado";

interface Props {
  i_images: string[];
  d_images: string[];
}

export default function Page3({ i_images, d_images }: Props) {
  const [load, setLoad] = useState(false);
  const [loadAnimation, setLoadAnimaion] = useState(false);

  useEffect(() => {
    setLoad(true);

    setTimeout(() => {
      setLoadAnimaion(true);
    }, 1000);
  }, []);

  return (
    <div className="w-full h-full relative">
      <FondoAnimado />

      <div className="w-full h-screen absolute top-0 left-0 bg-black/40">
        <div className="h-full flex flex-col relative">
          <div className="w-full h-[90px] flex justify-center py-3">
            <Image
              unoptimized
              src="/assets/images/nav_logo.png"
              alt="Logo"
              width={0}
              height={0}
              className="w-fit h-full"
            />
          </div>
          <div className="h-full w-full relative">
            <div className="w-full h-full overflow-hidden relative">
              <div className="w-full h-full grid grid-cols-3 gap-5">
                <div className=" h-full flex justify-center items-center">
                  <div className="w-full h-full relative overflow-auto">
                    <Image
                      src={i_images[0]}
                      alt="Imagen 1"
                      width={0}
                      height={0}
                      unoptimized
                      className="h-[800px] w-auto object-cover"
                    />
                  </div>
                </div>
                <div className=" h-full flex justify-center items-center">
                  <h1>Texto</h1>
                </div>
                <div className=" h-full flex justify-center items-center">
                  <div className="w-full h-full relative overflow-auto">
                    <Image
                      src={i_images[3]}
                      alt="Imagen 1"
                      width={0}
                      height={0}
                      unoptimized
                      className="h-[800px] w-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
