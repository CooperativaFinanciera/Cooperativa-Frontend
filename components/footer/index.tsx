import {
  FaFacebookSquare,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import {
  HiPhone,
  HiOutlineBanknotes,
  HiOutlineSlash,
  HiCreditCard,
  HiOutlineInformationCircle,
  HiOutlineEye,
  HiOutlineGlobeAlt,
  HiOutlineQuestionMarkCircle,
  HiOutlineExclamationCircle,
} from "react-icons/hi2";
import { HiLocationMarker } from "react-icons/hi";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="mt-10 bg-[#25466a] text-white">
      <div className="flex flex-col items-center px-6 pt-6 pb-4">
        {/* Dirección */}
        <h1 className="text-center text-sm md:text-base font-medium mb-4">
          <HiLocationMarker className="inline-block mr-2" />
          Edificio ANEUPI Cede principal: Susudel - Ecuador
        </h1>

        {/* Redes sociales*/}
        <div className="flex justify-center gap-4 items-center mb-4">
          <a href="https://www.facebook.com/aneupi.fundacion" className="text-2xl hover:text-orange-500 transition-all duration-300">
            <FaFacebookSquare />
          </a>
          <a href="https://www.whatsapp.com/channel/0029Vaf4il905MUazhwZ5M17" className="text-2xl hover:text-orange-500 transition-all duration-300">
            <FaWhatsapp />
          </a>
          <a href="https://www.instagram.com/fundacion_aneupi/" className="text-2xl hover:text-orange-500 transition-all duration-300">
            <FaInstagram />
          </a>
          <a href="https://x.com/FundacionANEUPI/" className="text-2xl hover:text-orange-500 transition-all duration-300">
            <FaSquareXTwitter />
          </a>
          <a href="" className="hover:opacity-80 hover:text-orange-500 transition-all duration-300">
            <img src="/Logos/gatitoplis.png" alt="Logo de GatitoPlis" width={40} className="rounded-full border-2 border-white" />
          </a>
        </div>

        <hr className="w-full border-t border-white mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-6xl text-sm pb-6">
          {/* Productos y Servicios */}
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-base mb-2">Productos y Servicios</h2>
            <Link href="/partners/accounts" className="hover:underline flex items-center gap-2">
              <HiOutlineBanknotes /> Cuenta de Ahorros
            </Link>
            <Link href="/" className="hover:underline flex items-center gap-2">
              <HiOutlineSlash /> Multicrédito
            </Link>
            <Link href="/" className="hover:underline flex items-center gap-2">
              <HiCreditCard /> American Express
            </Link>
          </div>

          {/* Acerca de Banco ANEUPI */}
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-base mb-2">Acerca de Banco ANEUPI</h2>
            <Link href="/" className="hover:underline flex items-center gap-2">
              <HiOutlineInformationCircle /> Conócenos
            </Link>
            <Link href="/" className="hover:underline flex items-center gap-2">
              <HiOutlineEye /> Transparencia
            </Link>
            <Link href="/" className="hover:underline flex items-center gap-2">
              <HiOutlineGlobeAlt /> Sostenibilidad
            </Link>
          </div>

          {/* Canales de Atención */}
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-base mb-2">Canales de Atención</h2>
            <p className="flex items-center gap-2">
              <HiPhone /> Celular: +593 0983341084
            </p>
            <Link href="/" className="hover:underline flex items-center gap-2">
              <HiOutlineQuestionMarkCircle /> Centro de Ayuda
            </Link>
            <Link href="/articulos/servicios" className="hover:underline flex items-center gap-2">
              <HiOutlineExclamationCircle /> Reclamos
            </Link>
          </div>

          {/* App */}
          <div className="flex flex-col gap-3 items-center text-center">
            <p className="text-sm">
              Personaliza tu cuenta con App Banco ANEUPI. Disponible en IOS y Android.
            </p>
            <div className="flex gap-2 justify-center">
              <a href="">
                <img src="/homeResources/app_store.webp" alt="App Store" width={90} className="rounded-md" />
              </a>
              <a href="">
                <img src="/homeResources/play_store.webp" alt="Google Play" width={90} className="rounded-md" />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-white mt-2 pt-2 text-xs text-center">
          © 2025 Banco ANEUPI. Todos los derechos reservados.
        </div>
      </div>
    </div>
  );
};
