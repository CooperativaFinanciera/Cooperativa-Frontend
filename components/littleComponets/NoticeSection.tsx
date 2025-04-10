export const NoticeSection = () => {
    return(
        <div className="w-full h-[590px] flex flex-col items-center gap-4 p-6 border-b-8 border-[#25466a]"> {/*Contenedor de la sección de noticias*/}
            <h1 className="font-serif font-semibold text-[#25466a] text-4xl">Sección de Noticias</h1>
            <div className="flex flex-col justify-center items-center pt-5"> {/*Contenedor de la noticia*/}
                <a href="/"> {/*Enlace para registrarse en el congreso*/}
                    <img 
                        src="/homeResources/CongresoInternacional.jpg" 
                        alt="Imagen de Congreso Intenacional" 
                    />
                </a>
            </div>
            <div className="flex justify-center items-center"> {/*Contenedor de boton*/}
                <a href="/"> {/*Enlace para registrarse en el congreso*/}
                    <button className="w-[150px] h-[50px] text-white font-serif font-semibold bg-orange-600 rounded-md hover:bg-[#25466a] shadow-xl">
                        Ver más
                    </button>
                </a>
            </div>
        </div>
    );
}