import { VscLocation } from "react-icons/vsc";
import { VscMail } from "react-icons/vsc";
import { VscThumbsup } from "react-icons/vsc";
import 
{  
  FaFacebookSquare,
  FaInstagram,
  FaWhatsapp,
 } from "react-icons/fa";
 import { FaSquareXTwitter } from "react-icons/fa6";

export const InfoContactPage = () => {
    return(
        <div className="flex w-[900px] h-[350px] items-center justify-center bg-slate-200 border-2 border-[#25466a] rounded-xl py-4 mx-auto">
            <div className="flex flex-row w-[800px] items-center justify-center gap-6">
                <div className="flex flex-col gap-3">
                    <div className="flex flex-row gap-2"> {/* Direccion */}
                        <VscLocation className="w-[25px] h-[25px]"/>
                        <div className="gap-2">
                            <h3 className="font-bold font-serif">Dirección</h3>
                            <p className="font-serif">Av. Juan Montalvo - Junto a la <br /> constructora - LECENI </p>
                         <p className="font-serif">Cuenca - Ecuador</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">{/* Email */}
                        <VscMail className="w-[25px] h-[25px]"/>
                        <div className="gap-2"> 
                            <h3 className="font-bold font-serif">Email</h3>
                            <p className="font-serif">institucionfinanciera.aneupi@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2"> {/* Telefono */}
                        <FaWhatsapp className="w-[25px] h-[25px]"/>
                        <div className="gap-2">
                            <h3 className="font-bold font-serif">Teléfono</h3>
                            <p className="font-serif">+593 983341084</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <div>
                            <div>
                                <div className="flex flex-row gap-2">
                                    <VscThumbsup className="w-[25px] h-[25px]"/>
                                    <h3 className="font-bold font-serif">Redes Sociales</h3>
                                </div>
                                <div>
                                    <div className="flex flex-row gap-3 p-2 rounded-md justify-center items-center">
                                        <a href="">
                                            <img 
                                                src="/Logos/gatitoplis.png" 
                                                alt="Logo de GatitoPlis"
                                                width={30}
                                                height={30}
                                                className="text-white rounded-full hover:opacity-50 border-1 border-white" 
                                            />
                                        </a>
                                        <a href="https://www.facebook.com/aneupi.fundacion/">
                                            <FaFacebookSquare className="w-[25px] h-[25px] text-[#25466a] rounded-lg hover:opacity-50"/>
                                        </a>
                                        <a href="https://www.instagram.com/fundacion_aneupi/">
                                            <FaInstagram className="w-[25px] h-[25px] text-pink-600 bg-white rounded-lg hover:opacity-50"/>
                                        </a>
                                        <a href="https://x.com/FundacionANEUPI/">
                                            <FaSquareXTwitter className="w-[25px] h-[25px] text-black rounded-lg hover:opacity-50"/>
                                        </a>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2" > {/* Mapa que localiza la fundacion */}
                    <h3 className="font-bold font-serif">Donde encontrarnos</h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.698076334019!2d-79.03906839999999!3d-2.9030389!2m3!1f0!
                        2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cd23f6f92fa71b%3A0xd927ad30589eaea8!2sFundaci%C3%B3n%20ANEUPI!5e0!3m2!1ses-419!2sec
                        !4v1743631244376!5m2!1ses-419!2sec" 
                        width="400" height="300" style={{border: 0}} 
                        allowFullScreen loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg"></iframe>
                </div>
            </div>
        </div>
    );
}