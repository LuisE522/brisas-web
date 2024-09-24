"use client";

import Image from "next/image";

interface Props {
    evento: {
        imagen: string,
        color: string,
        btn_color: string,
    }
}

export default function Evento({evento}:Props) {

    console.log(evento)

  return (
    <>
      <div className={`min-h-screen relative bg-[${evento.color}]`}>
        <div className="w-full h-full relative">
          <Image
            unoptimized
            src={evento.imagen}
            width={0}
            height={0}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className={`h-full absolute w-full top-0 left-0`}></div>
          <div className={`h-[100px] absolute w-full bg-gradient-to-t from-[${evento.color}] to-transparent bottom-0 left-0`}></div>

            <Image unoptimized src={evento.imagen} alt="alt" width={0} height={0} />

        </div>
        <div className="min-h-screen mx-auto max-w-[95%] w-[900px] py-10 flex flex-col gap-5">
          <Image
            unoptimized
            src={"/assets/images/eventos/mapa_evento.png"}
            alt="alt"
            width={0}
            height={0}
            className="w-full h-auto"
          />
          <div className="w-full flex flex-col gap-2 text-sm">
            <li>Público recomendado Adulto.</li>
            <li>
              Al momento del ingreso el cliente deberá portar mascarilla y
              respetar las indicaciones brindadas por el local.
            </li>
            <li>
              Recuerda que los mayores de 18 años deberán presentar su cartilla
              de vacunación con sus 3 dosis para ingresar a espacios cerrados.
            </li>
            <li>Precios incluyen comisión ticketera e impuestos.</li>
          </div>

          <button className={`bg-[${evento.btn_color}] px-4 py-2.5 md:px-6 md:py-4 text-white rounded-full`}>
            Compra regular
          </button>
        </div>
        <div className="h-[100px]"></div>
      </div>
    </>
  );
}
