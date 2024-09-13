'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { FaCircleXmark } from "react-icons/fa6";

export default function PopUp() {
    const [isOpen, setIsOpen] = useState(true); // Iniciar como true para abrir el modal al cargar la página

    const closeModal = () => setIsOpen(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto'; // Restaurar al desmontar el componente
        };
    }, [isOpen]);

    return (
        <div className="relative h-screen bg-gray-200">
            {isOpen && (
                <>
                    <div className="fixed inset-0 bg-black bg-opacity-70 z-40" />
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className='w-[400px] h-auto relative'>
                            <Image unoptimized src={'/assets/images/popup/popup1.png'} alt='popup' width={0} height={0} className='w-full h-auto ' />
                            <FaCircleXmark onClick={closeModal} size={20} className='mt-4 text-white rounded absolute top-px right-4 cursor-pointer' />
                        </div>
                        {/* <div className="bg-white p-6 rounded shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Contenido del Modal</h2>
              <p>Este es un ejemplo de contenido dentro del modal.</p>
              <button
                onClick={closeModal}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              >
                Cerrar
              </button>
            </div> */}
                    </div>
                </>
            )}
        </div>
    );
}
