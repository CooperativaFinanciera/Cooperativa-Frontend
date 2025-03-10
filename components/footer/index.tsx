import { Button, Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { SocialButton } from "../buttons/SocialButton";
import { Brand } from "../littleComponets/Brand";
import Link from "next/link";
import { HiEnvelope, HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { HiLocationMarker, HiOfficeBuilding } from "react-icons/hi";
import { RiWhatsappFill } from "react-icons/ri";
import { FaX } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className=" mt-10">
      <Card
        as="footer"
        className="rounded-none rounded-t-2xl p-0 md:px-6 bg-[#25466a]  mx-auto"
        shadow="none"
      >
      
        <CardBody className="grid grid-cols-3 gap-5 mx-auto py-2">
         
          <section className="space-y-2 text-sm">
            <h3 className="text-default-300 text-lg font-normal">Servicios</h3>
            <div className="flex flex-col gap-1 text-white">
              <Link className="" href="#">
                Ser accionista
              </Link>
              <Link className="" href="#">
                Consulta accionista
              </Link>
              <Link className="" href="#">
                Denuncias
              </Link>
     
            </div>
          </section>
          <section className="space-y-2 text-sm">
            <h3 className="text-default-300 text-lg font-normal">Matríz</h3>
            <div className="flex flex-col gap-1 text-white">
              <Link className="" href="#">
                <p className="flex items-center gap-1">
                  <HiOfficeBuilding size={20} />
                  Cede principal: Susudel - Ecuador
                </p>
            
              </Link>
        
              <Link className="" href="#">
                <p className="flex items-center gap-1">
                  <HiLocationMarker size={20} />
              
              Av. Las Escondidas por la Panamericana Sur
                </p>
              </Link>
            </div>
          </section>
          <section className="space-y-2 text-sm">
            <h3 className="text-default-300 text-lg font-normal">
              Contáctanos
            </h3>
            <div className="flex flex-col gap-1 text-white">
              <Link
                className="flex items-center gap-2"
                href="mailto:cooperativafinanciera.aneupi@gmail.com"
              >
                <HiEnvelope size={20} />
                <p>cooperativafinanciera.aneupi@gmail.com</p>
              </Link>
              <Link className="flex items-center gap-2" target="_blank" href="https://wa.me/593983341084">
              <RiWhatsappFill size={20} />
              +593 0983341084
              </Link>
        
            </div>
          </section>
          
        </CardBody>
        <Divider />
        <CardFooter className="flex items-center justify-between w-[70%] mx-auto py-0">
          <p className="text-white text-sm">© 2025 Cooperativa de Ahorro y Crédito</p>
          <div className="flex items-center gap-5">
          <a href="https://www.facebook.com/aneupi.fundacion/" target="_blank" rel="noopener noreferrer">
            <SocialButton>
              <FaFacebook />
            </SocialButton>
            </a>
          <a href="https://www.tiktok.com/@fundacionaneupi" target="_blank" rel="noopener noreferrer">
            <SocialButton>
              <FaTiktok />
            </SocialButton>
            </a>
          <a href="https://www.youtube.com/@tvaneupi" target="_blank" rel="noopener noreferrer">
            <SocialButton>
              <FaYoutube />
            </SocialButton>
            </a>
          <a href="https://www.instagram.com/fundacion_aneupi/" target="_blank" rel="noopener noreferrer">
            <SocialButton>
              <FaInstagram />
            </SocialButton>
            </a>
          <a href="https://x.com/FundacionANEUPI/" target="_blank" rel="noopener noreferrer">
            <SocialButton>
            <FaX />
            </SocialButton>
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
