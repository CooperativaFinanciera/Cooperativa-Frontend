import { Button, Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import { SocialButton } from "../buttons/SocialButton";
import { Brand } from "../littleComponets/Brand";
import Link from "next/link";
import { HiEnvelope, HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { HiLocationMarker, HiOfficeBuilding } from "react-icons/hi";
import { RiWhatsappFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import 
{  
  FaFacebookSquare,
  FaInstagram,
  FaWhatsapp,
 } from "react-icons/fa";
 import { FaSquareXTwitter } from "react-icons/fa6";
 import { HiPhone } from "react-icons/hi2";
 
export const Footer = () => {
  return (
    <div className="mt:10">
      <div className="mt-10">
      <div className="flex flex-col rounded-t-2xl bg-[#25466a] w-full mx-auto items-center p-6">
        <h1 className="text-white text-center text-lg font-semibold">
          <HiLocationMarker className="inline-block mr-2" /> Edificio ANEUPI Cede principal: Susudel - Ecuador
        </h1>

        {/* Redes Sociales y Logo GatitoPlis */}
        <div className="flex justify-center gap-6 mb-6 mt-4 items-center">
          <a href="https://www.facebook.com/aneupi.fundacion" className="text-white text-3xl hover:text-[#004f6c] transition-all duration-300">
            <FaFacebookSquare />
          </a>
          <a href="https://www.whatsapp.com/channel/0029Vaf4il905MUazhwZ5M17" className="text-white text-3xl hover:text-[#25d366] transition-all duration-300">
            <FaWhatsapp />
          </a>
          <a href="https://www.instagram.com/fundacion_aneupi/" className="text-white text-3xl hover:text-[#e4405f] transition-all duration-300">
            <FaInstagram />
          </a>
          <a href="https://x.com/FundacionANEUPI/" className="text-white text-3xl hover:text-[#1DA1F2] transition-all duration-300">
            <FaSquareXTwitter />
          </a>

          {/* Logo GatitoPlis */}
          <a href="" className="text-white text-3xl hover:opacity-70">
            <img src="/Logos/gatitoplis.png" alt="Logo de GatitoPlis" width={50} className="rounded-full border-2 border-white" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-8 mt-6 px-6">
          {/* Productos y Servicios */}
          <div className="flex flex-col gap-3">
            <h2 className="text-white font-bold text-lg">Productos y Servicios</h2>
            <Link href="/socios/Cuentas" className="text-white flex items-center gap-2 hover:underline">
              <HiOutlineBuildingOffice2 /> Cuenta de Ahorros
            </Link>
            <Link href="/" className="text-white flex items-center gap-2 hover:underline">
              <HiOutlineBuildingOffice2 /> Multicrédito
            </Link>
            <Link href="/" className="text-white flex items-center gap-2 hover:underline">
              <HiOutlineBuildingOffice2 /> American Express
            </Link>
          </div>

          {/* Acerca de Banco ANEUPI */}
          <div className="flex flex-col gap-3">
            <h2 className="text-white font-bold text-lg">Acerca de Banco ANEUPI</h2>
            <Link href="/" className="text-white flex items-center gap-2 hover:underline">
              <HiOutlineBuildingOffice2 /> Conócenos
            </Link>
            <Link href="/" className="text-white flex items-center gap-2 hover:underline">
              <HiOutlineBuildingOffice2 /> Transparencia
            </Link>
            <Link href="/" className="text-white flex items-center gap-2 hover:underline">
              <HiOutlineBuildingOffice2 /> Sostenibilidad
            </Link>
          </div>

          {/* Canales de Atención */}
          <div className="flex flex-col gap-3">
            <h2 className="text-white font-bold text-lg">Canales de Atención</h2>
            <p className="text-white flex items-center gap-2">
              <HiPhone /> Celular: +593 0983341084
            </p>
            <Link href="/" className="text-white flex items-center gap-2 hover:underline">
              <HiOutlineBuildingOffice2 /> Centro de Ayuda
            </Link>
            <Link href="/articles/Servicios" className="text-white flex items-center gap-2 hover:underline">
              <HiOutlineBuildingOffice2 /> Reclamos
            </Link>
          </div>

          {/* Redes Sociales y App */}
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-white text-sm text-center">
              Personaliza tu cuenta con App Banco ANEUPI. Disponible en IOS y Android.
            </h2>
            <div className="flex gap-2">
              <a href="">
                <img src="/homeResources/app_store.webp" alt="App Store" width={100} className="rounded-lg" />
              </a>
              <a href="">
                <img src="/homeResources/play_store.webp" alt="Google Play" width={100} className="rounded-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
