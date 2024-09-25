"use client";

import React, { useState } from "react";
import NavTransparent from "./NavTransparent";
import Image from "next/image";
import Link from "next/link";



export default function Page2() {
  const [load, setLoad] = useState(false);

  return (
    <>
      <div
        className={`h-screen w-full bg-[url("/assets/images/fondo2_home.png")] bg-no-repeat bg-cover bg-center relative z-0`}
      >
        <div className="bg-[#343434]/40 h-full w-full absolute top-0 left-0 -z-10"></div>
        <div className="bg-gradient-to-t from-black to-transparent w-full h-[200px] absolute bottom-0 left-0"></div>
        <div className="w-full h-auto z-[9990]">
          <NavTransparent />
        </div>
        <div className="w-full h-[calc(100%-124px)] absolute top-[62px] left-0 z-50">
          <div className="relative max-w-[95%] w-[1080px] mx-auto h-full flex flex-col gap-1 items-start justify-center">
            <p className="text-white">Lo mejor del Perú</p>
            <h1 className="tracking-tight uppercase font-bold text-5xl leading-tight bg-gradient-to-t from-[#FC228A] to-[#FF9900] bg-clip-text text-transparent">62 años de historia</h1>

            <p className="w-2/4 text-white">
              Lorem ipsum dolor sit amet consectetur. Egestas amet tincidunt
              platea id. Ut augue proin odio est molestie elit nisl facilisis
              sodales. Varius adipiscing maecenas ut dolor.
            </p>
          </div>
        </div>
        {/* <div className="w-full z-10">
          <div className="w-full h-[70px] bg-white"></div>
        </div> */}
      </div>
    </>
  );
}
