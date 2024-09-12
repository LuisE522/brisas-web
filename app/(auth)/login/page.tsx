import Login from "@/components/Auth/Login";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="h-screen w-full grid grid-cols-[70%_30%]">
        <div className="h-full w-full overflow-hidden relative">
            <Image unoptimized src="/assets/images/fondo_home.png" width={0} height={0} alt="Fondo login" className="w-full h-full object-cover" />
            <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center bg-[#1f1f1f]">
            <Login />
        </div>
    </div>
  )
}
