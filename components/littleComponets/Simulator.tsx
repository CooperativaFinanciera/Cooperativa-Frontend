
export const Simulator = () => {
    return(
        <div className="flex flex-col gap-7 w-full h-[600px] border-b-8 border-[#25466a] items-center"> {/*Contenedor de la sección de simulador*/}
            <h1 className="font-serif font-semibold text-4xl text-[#25466a]">SIMULADORES</h1>
            <div className="flex flex-row gap-6 p-3 w-full h-[450px] items-center"> {/*Contenedor de los elementos de la sección*/}
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-6"> {/*Contenedor de los campos de texto*/}
                        <p className="font-serif text-2xl">Necesitas un crédito para tu casa, negocio o estudios <br /> puedes usar los botones que 
                        se encuentran aquí <br /> para acceder a nuestros <span className="font-semibold">simuladores</span>.</p>
                        
                        <p className="font-serif text-2xl">Recuerda que siempre estamos a tu disposición <br /> utiliza 
                        alguno de nuestros canales para <span className="font-semibold">contactarnos</span>.</p>
                    </div>
                    <a href="/"> {/*Boton que te lleva al simulador*/}
                        <button className="w-[200px] h-[50px] bg-orange-600 text-white text-xl font-serif font-semibold p-2 rounded-md hover:bg-[#25466a] shadow-xl">
                            Credito
                        </button>
                    </a>
                </div>
                
                <div className="border-3 border-black rounded-lg"> {/*Contenedor de la imagen*/}
                    <img 
                        src="/homeResources/Simulador.png" 
                        alt="Imagen alusiva a credito"
                        width={450}
                        height={450} 
                    />
                </div>
            </div>
        </div>
    )
}