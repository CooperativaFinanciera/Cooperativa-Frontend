"use client"

export const MainPage: React.FC = () => {
    return(
        <div className="relative flex w-full h-screen  text-white overflow-hidden rounded-lg justify-center m-0">
            <div className=" flex w-[1000px] left-0">
                {/* Mapa */}
                <div className="absolute flex w-[1000px] h-screen items-center justify-center mx-auto">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.6980952390554!2d-
                    79.041643326402!3d-2.903033539527687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x
                    91cd23f6f92fa71b%3A0xd927ad30589eaea8!2sFundaci%C3%B3n%20ANEUPI!5e0!3m2!1ses-419!2sec!4v1
                    744146136563!5m2!1ses-419!2sec" 
                    width="1000" 
                    height="600" 
                    style={{ border: 0}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-[1000px] h-[600] rounded-2xl"
                    />
                    <div className="absolute inset-0 border-4 border-[#25466a] rounded-lg pointer-events-none" />
                </div>
                {/* Formulario */}
                <div className="flex flex-col w-[400px] items-center justify-center">
                    <div className="absolute w-[400px] h-full  bg-[#25466a]/80 p-8 rounded-l-2xl z-10 border-4 border-[#25466a]"/>
                      <div className="absolute inset-0  rounded-xl pointer-events-none" />
                      <form className="relative z-10 flex flex-col gap-4 mt-4 ">
                        <div className="flex flex-col items-center justify-center mx-auto gap-4">
                            <div className="flex flex-col w-[350px] pb-5">
                                <p className="text-xl text-white font-serif font-semibold">Envianos un mensaje y te responderemos lo antes posible.</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <input
                                    type="text"
                                    placeholder="Nombres"
                                    className="w-[280px] bg-transparent border border-white rounded-md px-4 py-2 focus:outline-none placeholder-white transition-all duration-500 focus:border-orange-500 focus:shadow-md"
                                />
                                <input
                                    type="text"
                                    placeholder="Apellidos"
                                    className="w-[280px] bg-transparent border border-white rounded-md px-4 py-2 focus:outline-none placeholder-white transition-all duration-500 focus:border-orange-500 focus:shadow-md"
                                />
                            </div>
                            
                            <input
                                type="email"
                                placeholder="Correo electrónico"
                                className=" w-[280px] bg-transparent border border-white rounded-md px-4 py-2 focus:outline-none placeholder-white transition-all duration-500 focus:border-orange-500 focus:shadow-md"
                            />
                            <textarea
                                placeholder="Escribe tu mensaje aquí"
                                className=" w-[280px] bg-transparent border border-white rounded-md px-4 py-2 h-32 resize-none focus:outline-none placeholder-white transition-all duration-500 focus:border-orange-500 focus:shadow-md"
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                className="self-start bg-[#25466a] text-white font-bold px-6 py-2 rounded-md transition-all duration-500 hover:bg-orange-500"
                            >
                                ENVIAR
                            </button>
                        </div>
                        
                    </form>
                </div> 
            </div>        
        </div>
    );
}