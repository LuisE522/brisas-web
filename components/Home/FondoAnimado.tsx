"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function FondoAnimado() {
  const [load, setLoad] = useState(false);
  const [loadAnimation, setLoadAnimaion] = useState(false);

  useEffect(() => {
    setLoad(true);

    setTimeout(() => {
      setLoadAnimaion(true);
    }, 1000);
  }, []);

  return (
    <>
      <div
        className="min-h-screen h-full lg:h-screen w-full bg-slate-900 overflow-hidden relative border-2"
        id="images-container"
      >
        {/* Imágenes de fondo */}
        <Image
          src="/assets/images/fondo_animado/1.png"
          unoptimized
          alt="Fondo 1"
          width={0}
          height={0}
          className={`w-full h-full object-cover ${
            load === false
              ? "transition-transform duration-1000 scale-[250%]"
              : "transition-transform duration-1000 scale-[130%]"
          } absolute -top-10 md:-top-36`}
        />
        <Image
          src="/assets/images/fondo_animado/2.png"
          unoptimized
          alt="Fondo 2"
          width={0}
          height={0}
          className={`w-full object-cover ${
            load === false
              ? "transition-transform duration-1000 scale-[250%]"
              : "transition-transform duration-1000 scale-[130%]"
        } absolute -bottom-0 left-0`}
        />
        <Image
          src="/assets/images/fondo_animado/3.png"
          unoptimized
          alt="Fondo 3"
          width={0}
          height={0}
          className={`w-full object-cover ${
            load === false
              ? "transition-transform duration-1000 scale-[250%]"
              : "transition-transform duration-1000 scale-[130%]"
          } absolute -bottom-0 left-0`}
        />
        <Image
          src="/assets/images/fondo_animado/4.png"
          unoptimized
          alt="Fondo 4"
          width={0}
          height={0}
          className={`w-full object-cover ${
            load === false
              ? "transition-transform duration-1000 scale-[250%]"
              : "transition-transform duration-1000 scale-[130%]"
          } absolute -bottom-0 left-0`}
        />
        <Image
          src="/assets/images/fondo_animado/5.png"
          unoptimized
          alt="Fondo 5"
          width={0}
          height={0}
          className={`w-full object-cover ${
            load === false
              ? "transition-transform duration-1000 scale-[250%]"
              : "transition-transform duration-1000 scale-[130%]"
          } absolute -bottom-0 left-0`}
        />
      </div>
    </>
  );
}
