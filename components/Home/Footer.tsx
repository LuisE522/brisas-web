import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";


export default function Footer() {
    return (
        <div className="bg-[#1578BC] py-10">
            <div className='w-full max-w-[1080px] mx-auto flex flex-col gap-10'>
                <div className="w-full grid grid-cols-3 justify-between gap-x-5">
                    <Image unoptimized src={'/assets/images/nav_logo.png'} alt="Footer logo" width={0} height={0} className="h-[50px] w-auto" />
                    <div className="w-full flex flex-row items-center rounded-lg overflow-hidden">
                        <div className="w-full h-full bg-white text-black">
                            <input type="email" className="bg-white text-black w-full h-full outline-none px-2" placeholder="Escribe tu e-mail" />
                        </div>
                        <span className="w-fit h-full px-5 py-2 bg-[#00A859] flex items-center text-white">Suscríbete</span>
                    </div>
                    <div className="w-full grid grid-cols-5 gap-x-5">
                        <div className="w-full h-full bg-white rounded-lg flex justify-center items-center">
                            <FaFacebookF color="#1578BC" size={25} />
                        </div>
                        <div className="w-full h-full bg-white rounded-lg flex justify-center items-center">
                            <FaXTwitter color="#1578BC" size={25} />
                        </div>
                        <div className="w-full h-full bg-white rounded-lg flex justify-center items-center">
                            <FaInstagram color="#1578BC" size={25} />
                        </div>
                        <div className="w-full h-full bg-white rounded-lg flex justify-center items-center">
                            <FaYoutube color="#1578BC" size={25} />
                        </div>
                        <div className="w-full h-full bg-white rounded-lg flex justify-center items-center">
                            <FaWhatsapp color="#1578BC" size={25} />
                        </div>
                    </div>
                </div>
                <div className="w-full grid grid-cols-2 text-white">
                    <div className="w-full grid grid-cols-2">
                        <div className="w-full flex flex-col gap-1">
                            <p>Nosotros</p>
                            <p>Nuestra institución</p>
                            <p>Misión Visión</p>
                            <p>Consejo directivo</p>
                        </div>
                        <div className="w-full flex flex-col gap-1">
                            <p>Elenco</p>
                            <p>Elenco de Danzas</p>
                            <p>Coro Brisas del Titicaca</p>
                            <p>Estudiantina</p>
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-2">
                        <div className="w-full flex flex-col gap-1">
                            <p>Libro de reclamaciones</p>
                            <p>Trabaja con nosotros</p>
                        </div>
                        <div className="w-full flex flex-col gap-1">
                            <p>Contáctanos</p>
                            <p>Jr. Héroes de Tarapacá 168</p>
                            <div className="w-full flex flex-row justify-between">
                                <p>01-715 6960</p>
                                <p>01-715 6961</p>
                            </div>
                            <p>eventos@brisasdeltiticaca.com</p>
                            <p>ventas@brisasdeltiticaca.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
