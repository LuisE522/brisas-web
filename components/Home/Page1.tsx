"use client";

import trs from "@/public/locales/translate.json";
import { useEffect, useState } from "react";
import Link from "next/link";
import NavOnlyLogo from "@/components/Home/NavOnlyLogo";
import React from "react";
import CaroucelPeronsajes from "./CaroucelPeronsajes";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageProvider";

interface Props {
    i_images: string[]
    d_images: string[]
}

export default function Page1({ i_images, d_images }: Props) {
  const [load, setLoad] = useState(false);
  const [loadAnimation, setLoadAnimaion] = useState(false);

  useEffect(() => {
    setLoad(true);

    setTimeout(() => {
      setLoadAnimaion(true);
    }, 1000);
  }, []);

  useEffect(() => {
    const parallaxContainer = document.getElementById("parallax-container");
    const imagesContainer = document.getElementById("images-container");
    if (!imagesContainer) return;
    if (!parallaxContainer) return;
    const images = imagesContainer.getElementsByTagName("img");

    const handleMouseMove = (e: any) => {
      const { clientX: mouseX, clientY: mouseY } = e;
      const { innerWidth: width, innerHeight: height } = window;

      const speedFactors = [0.5, 1, 1.5, 2, 3]; // Velocidades diferentes para cada imagen
      const rotationFactors = [10, 10, 30, 30, 30]; // Velocidades diferentes para cada imagen
      const posFactors = [20, 60, 90, 100, 220]; // Velocidades diferentes para cada imagen

      Array.from(images).forEach((img, index) => {
        // Calcular el ángulo de rotación basado en la posición del mouse
        const rotateX = (mouseY / height) * rotationFactors[index] - 10; // Rango de -10 a 10
        const rotateY = (mouseX / width) * rotationFactors[index] - 10; // Rango de -10 a 10
        const speed = speedFactors[index] || 1;
        const scale = 130;

        const xPos = (mouseX / width) * posFactors[index] - 10; // Ajusta el rango
        const yPos = (mouseY / height) * posFactors[index] - 10; // Ajusta el rango

        // Aplicar transformaciones
        img.style.transform = `translate(${xPos / speed}px, ${
          yPos / speed
        }px) scale(${scale}%)`;
        img.style.transitionDuration = "0ms";
      });
    };

    parallaxContainer.addEventListener("mousemove", handleMouseMove);

    return () => {
      parallaxContainer.removeEventListener("mousemove", handleMouseMove);
    };
  });

  const { language } = useLanguage();

  const translations = trs as any;

  return (
    <>
      <div
        className="min-h-screen h-full lg:h-screen w-full bg-slate-900 overflow-hidden relative"
        id="images-container"
      >
        <img
          src="/assets/images/fondo_animado/1.png"
          alt=""
          className={`w-full h-full object-cover ${
            load == false
              ? "transition-transform  duration-1000 scale-[250%]"
              : "transition-transform  duration-1000 scale-[130%]"
          } absolute -top-10 md:-top-36`}
        />
        <img
          src="/assets/images/fondo_animado/2.png"
          alt=""
          className={`w-full object-cover ${
            load == false
              ? "transition-transform  duration-1000 scale-[250%]"
              : "transition-transform  duration-1000 scale-[130%]"
          } absolute -bottom-0 left-0`}
        />
        <img
          src="/assets/images/fondo_animado/3.png"
          alt=""
          className={`w-full object-cover ${
            load == false
              ? "transition-transform  duration-1000 scale-[250%]"
              : "transition-transform  duration-1000 scale-[130%]"
          } absolute -bottom-0 left-0`}
        />
        <img
          src="/assets/images/fondo_animado/4.png"
          alt=""
          className={`w-full object-cover ${
            load == false
              ? "transition-transform  duration-1000 scale-[250%]"
              : "transition-transform  duration-1000 scale-[130%]"
          } absolute -bottom-0 left-0`}
        />
        <img
          src="/assets/images/fondo_animado/5.png"
          alt=""
          className={`w-full object-cover ${
            load == false
              ? "transition-transform  duration-1000 scale-[250%]"
              : "transition-transform  duration-1000 scale-[130%]"
          } absolute -bottom-0 left-0`}
        />
      </div>
      <div
        className="min-h-screen lg:h-screen w-full bg-center bg-cover absolute top-0 left-0"
        id="parallax-container"
      >
        <div className="bg-black/80 h-full w-full absolute top-0 left-0 z-0"></div>
        <div>
          <Image
            unoptimized
            src={"/assets/images/i_humo.png"}
            alt=""
            width={0}
            height={0}
            className="w-full h-full absolute top-0 left-0"
          />
          <Image
            unoptimized
            src={"/assets/images/i_humo.png"}
            alt=""
            width={0}
            height={0}
            className="w-full h-full absolute top-0 left-0"
          />
          <Image
            unoptimized
            src={"/assets/images/d_humo.png"}
            alt=""
            width={0}
            height={0}
            className="w-full h-full absolute top-0 left-0"
          />
          <Image
            unoptimized
            src={"/assets/images/d_humo.png"}
            alt=""
            width={0}
            height={0}
            className="w-full h-full absolute top-0 left-0"
          />
        </div>

        <div className="w-full h-full flex flex-col gap-5 pb-4 relative overflow-hidden">
          {/* bg-gradient-to-bl from-[#00765A] to-[#021F73] */}
          <div className="mt-10">
            <NavOnlyLogo />
          </div>
          <div className="w-[95%] max-w-[1280px] mx-auto h-[calc(100%-180px-20px)] -mt-20 flex flex-col gap-5 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full h-full lg:absolute ">
              <div className="w-full h-full grid grid-cols-[60%_40%]">
                <CaroucelPeronsajes images={i_images} />
                <div className="w-full h-full flex flex-col gap-3 justify-center items-center z-20">
                  <div className="w-full h-[50px] sm:h-[60px] md:h-[80px] flex justify-center">
                    <Image
                      src={"/assets/images/logo_almuerzo_show.png"}
                      unoptimized
                      alt=""
                      width={0}
                      height={0}
                      className="w-auto md:h-full"
                    />
                  </div>
                  <Link
                    href={"/evento/almuerzo-show"}
                    className="w-fit inline-flex items-center justify-center px-4 md:px-8 py-1 md:py-2 font-sans font-semibold tracking-wide text-white bg-transparent border-2 border-[#FF9900] hover:bg-[#FF9900] transition-all duration-300 rounded-full"
                  >
                    {translations[language].reservar}
                  </Link>
                </div>
              </div>

              <div className="w-full h-full grid grid-cols-[40%_60%]">
                <div className="w-full h-auto flex flex-col gap-3 justify-center items-center z-20">
                  <div className="w-full h-[50px] sm:h-[60px] md:h-[80px] flex justify-center">
                    <Image
                      src={"/assets/images/logo_noches_de_folklore.png"}
                      unoptimized
                      alt=""
                      width={0}
                      height={0}
                      className="w-auto h-full"
                    />
                  </div>
                  <Link
                    href={"/evento/noche-de-folklore"}
                    className="w-fit inline-flex items-center justify-center px-4 md:px-8 py-1 md:py-2 font-sans font-semibold tracking-wide text-white bg-transparent border-2 border-[#FC228A] hover:bg-[#FC228A] transition-all duration-300 rounded-full"
                  >
                    {translations[language].reservar}
                  </Link>
                </div>
                <CaroucelPeronsajes images={d_images} />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full top-0 left-0 absolute ">
          <Image
            unoptimized
            src={"/assets/images/d_planta.png"}
            alt=""
            width={0}
            height={0}
            className={`${
              loadAnimation == false ? "divOnLoad" : "divOnLoad"
            } h-auto absolute bottom-0 right-0`}
          />
          <Image
            unoptimized
            src={"/assets/images/d_planta.png"}
            alt=""
            width={0}
            height={0}
            className={`${
              loadAnimation == false ? "divOnLoad" : "divOnLoad"
            } scale-x-[-1] h-auto absolute bottom-0 left-0`}
          />
          <Image
            unoptimized
            src={"/assets/images/a_planta.png"}
            alt=""
            width={0}
            height={0}
            className=" w-[20%] h-auto absolute top-0 right-0"
          />
        </div>
      </div>
    </>
  );
}
