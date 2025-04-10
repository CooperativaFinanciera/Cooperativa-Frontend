import { VscSend } from "react-icons/vsc";

export const FormPage = () => {
    return(
        <div className="flex flex-col w-full h-[700px] items-center justify-center gap-4"> {/* Contenedor principal del Formulario */}
            <form className="flex flex-col w-[600px] h-[550px] items-center justify-center p-3 bg-[#25466a] gap-5 rounded-xl">
                <h1 className="text-white text-3xl font-bold font-serif">Contáctanos</h1>
                <div className="flex pb-2">
                    <h1 className="text-white text-lg font-serif">Envianos un mensaje por si tienes alguna <br /> duda y te responderemos lo antes posible.</h1>
                </div>
                <div className="flex flex-row gap-7">
                    <div className="flex flex-col gap-2">
                        <p className="text-white text-md">Nombres: *</p>
                        <input 
                            type="text"
                            className="w-[200px] h-[35px] rounded-md p-1 border border-gray-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-600 outline-none"
                            placeholder="Pablo Samuel" 
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-white text-md">Apellidos: *</p>
                        <input 
                            type="text"
                            className="w-[200px] h-[35px] rounded-md p-1 border border-gray-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-600 outline-none"
                            placeholder="Calderon Rodriguez"  
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-2">
                        <p className="text-white text-md">Email: *</p>
                        <input 
                            type="text" 
                            className="w-[420px] h-[40px] rounded-md p-1 border border-gray-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-600 outline-none"
                            placeholder="institucionfinaciera.aneupi@gmail.com"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-white text-md">Mensaje: *</p>
                        <textarea  
                            name="" 
                            id=""
                            className="w-[420px] h-[70px] rounded-md p-1 border border-gray-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-600 outline-none"
                            placeholder="Envianos un mensaje..."
                        ></textarea>
                    </div>
                </div>
                <button className="flex flex-row w-[130px] h-[50px] bg-slate-200 rounded-lg items-center justify-center gap-2 hover:bg-orange-600 group">
                    <p className="text-lg group-hover:text-white">Enviar</p>
                    <VscSend  className="text-lg group-hover:text-white"/>
                </button>
            </form>
            
        </div>
    );
}