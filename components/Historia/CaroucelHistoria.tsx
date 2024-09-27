"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Image from "next/image";

interface Historia_I {
  fecha:string,
  texto:string;
  imagen:string;
}

export default function CaroucelHistoria() {
  const historia:Historia_I[] = [
    {
      fecha: "1961",
      texto:
        "Fotografía de los fundadores (Jorge Rojas Gironda, Cesar Antonio Ontiveros Luna, Miguel Alférez Aguilar, Benjamín Cordero, Policarpo Miranda Mestas, Armando Azcuña Niño de Guzmán, Tommy Felipe Sardón Bacarreza y  Manuel Calderón) tomada en un estudio de La Victoria, a pocos días de haberle dado el nombre de Conjunto Musical Brisas del Titikaka.",
      imagen: "/assets/images/info/historia_62.png",
    },
    {
      fecha: "1962",
      texto:
        "Fotografía de los fundadores (Jorge Rojas Gironda, Cesar Antonio Ontiveros Luna, Miguel Alférez Aguilar, Benjamín Cordero, Policarpo Miranda Mestas, Armando Azcuña Niño de Guzmán, Tommy Felipe Sardón Bacarreza y  Manuel Calderón) tomada en un estudio de La Victoria, a pocos días de haberle dado el nombre de Conjunto Musical Brisas del Titikaka.",
      imagen: "/assets/images/info/historia_62.png",
    },
    {
      fecha: "1964",
      texto:
        "Carnavales briseños de entonces, se realizó un paseo campestre al estilo y semejanza de los que se realizan en Puno. como evidencias quedan las fotografías de las damas asistentes que estaban ataviadas con su traje pandillero. Esta demostración artística en el parque, fue la primera presentación de Brisas en las calles de Lima, con danzarines  y Estudiantina.",
      imagen: "/assets/images/info/historia_64.png",
    },
    {
      fecha: "1965",
      texto:
        "Presentación de Brisas del Titikaka y Alma Colavina cob el Alcalde Bedoya que se realizó en la Municipalidad de Lima. Aunque el elenco de la institución aún no estaba todavía organizado, el entusiasmo de los danzarines fue desbordante en aquellos tiempos aurorales, que creó la necesidad de contar formalmente con un elenco de danzas, el que empezó a organizarse en los siguientes días, convocándose a diversos jóvenes e hijos de los briseños.",
      imagen: "/assets/images/info/historia_65.png",
    },

    
    {
      fecha: "1964",
      texto:
        "Carnavales briseños de entonces, se realizó un paseo campestre al estilo y semejanza de los que se realizan en Puno. como evidencias quedan las fotografías de las damas asistentes que estaban ataviadas con su traje pandillero. Esta demostración artística en el parque, fue la primera presentación de Brisas en las calles de Lima, con danzarines  y Estudiantina.",
      imagen: "/assets/images/info/historia_64.png",
    },
    {
      fecha: "1965",
      texto:
        "Presentación de Brisas del Titikaka y Alma Colavina cob el Alcalde Bedoya que se realizó en la Municipalidad de Lima. Aunque el elenco de la institución aún no estaba todavía organizado, el entusiasmo de los danzarines fue desbordante en aquellos tiempos aurorales, que creó la necesidad de contar formalmente con un elenco de danzas, el que empezó a organizarse en los siguientes días, convocándose a diversos jóvenes e hijos de los briseños.",
      imagen: "/assets/images/info/historia_65.png",
    },
  ];

  return (
    <div className="w-full relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        /* loop={true} */
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        breakpoints={{
          740: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        {historia.map((hi, index) => (
          <>
            <SwiperSlide>
              <div className="w-full flex flex-col -z-0">
                <div className="w-full flex justify-end">
                  <div className="w-[90%] h-[300px] bg-slate-400 !relative">
                    <Image unoptimized src={hi.imagen} alt="alt" width={0} height={0} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="w-full text-white -mt-6 z-10 flex flex-col gap-2">
                  <h2
                    className="text-5xl"
                    style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 2)" }}
                  >
                    {hi.fecha}
                  </h2>
                  <p className="text-xs">
                    {hi.texto}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
}
