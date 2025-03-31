"use client"
import { useRef } from 'react';
import { saveAs } from 'file-saver';
import { pdf } from '@react-pdf/renderer';
import { formularioSchema } from "@/schemas/formularioRegistroSchema";
import { ZodError } from "zod";

import { motion } from 'framer-motion';
import Link from 'next/link';
import router from 'next/router';
import React, { useState } from 'react';
import { FiHome } from 'react-icons/fi'; // Importing FiHome icon from react-icons
import MiniCalendar from "@/components/littleComponets/dropCalendar";
import MoneySlider from "@/components/littleComponets/moneySlider";
import MoneySliderInteractive from "@/components/littleComponets/moneySliderInte";
import FormularioAccionista from "./PDFAccio"; // Importamos el PDF
import { PDFDownloadLink } from "@react-pdf/renderer";
import PaymentModal from "@/components/modals/paymentMethods";
import { style } from 'framer-motion/client';
import Image from "next/image";
import gatitoPlis from '@/public/gatitoplis.png';
import LegalAdviseModal from '../modals/legalAdviseModal';

const FormularioRegistro = () => {
    const [formData, setFormData] = useState({
        estadoCivil: '',
        nombres: '',
        apellidos: '',
        cedula: '',
        tituloProfesional: '',
        email: '',
        direccion: '',
        codigoPais: '', // codigo de pais + numero de telefono es codigo completo
        numeroTelefono: '',
        pais: '',
        fechaNacimiento: '',
        ciudad: '',
        provincia: '',
        canton: '',
        descripcionProfesional: '',
        montoInversion: 150, // Default value for slider
        discapacidad: '', // Added discapacidad property
        nombreUniversidad: '', // Added nombreUniversidad property
        tipodiscapacidad: '', // Added tipodiscapacidad property
        comprobantePago: '', // Added comprobantePago property
        date: '', // Added date property
        fechaSolicitud: new Date().toISOString(), // esto lo pone automáticamente
        descripcionDiscapacidad: '', // Added descripcionDiscapacidad property
        numeroDocumento: '',
    });
    const telefonoCompleto = `${formData.codigoPais}${formData.numeroTelefono}`;
    const [mostrarSliders, setMostrarSliders] = useState(false);
    const [sliderUsado, setSliderUsado] = useState(false);
    const [pagoCompletado, setPagoCompletado] = useState(false);
    const [comprobanteArchivo, setComprobanteArchivo] = useState<File | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [activeSection, setActiveSection] = useState<string | null>(null);
    // const [errores, setErrores] = useState<string[]>([]);
    const [mostrarLegalModal, setMostrarLegalModal] = useState(false);

    const [errores, setErrores] = useState<Record<string, string>>({});

    const [mostrarErrorCampos, setMostrarErrorCampos] = useState(false);
    const tieneError = (campo: string) => errores.hasOwnProperty(campo) ? 'border-red-500' : '';
    const pdfLinkRef = useRef<HTMLAnchorElement>(null);

    const camposObligatorios = [
        "estadoCivil", "nombres", "apellidos", "cedula", "tituloProfesional", "email",
        "direccion", "telefonoCompleto", "pais", "fechaNacimiento", "ciudad", "provincia",
        "canton", "numeroTelefono"
    ];


    const inputClass = (campo: string) =>
        `w-full p-2 border bg-gray-100 placeholder-gray-400 placeholder:font-bold ${errores[campo] ? "border-red-500" : ""
        }`;

    const inputStyle = (campo: string) => ({
        borderRadius: 10,
        borderColor: errores[campo] ? "#ef4444" : mainColor,
    });
    const mainColor = 'rgb(35, 66, 99)';
    const validarFormulario = () => {
        try {
            const datos = {
                ...formData,
                fechaNacimiento: formData.date,
            };

            // Validaciones condicionales con refine si quieres
            formularioSchema
                .refine((data) => {
                    if (data.discapacidad === "Si" && !data.tipodiscapacidad) return false;
                    if (data.tipodiscapacidad === "Otra" && !data.descripcionDiscapacidad) return false;
                    if (data.tituloProfesional === "Otra" && !data.descripcionProfesional) return false;
                    if (data.tituloProfesional === "Superior" && !data.nombreUniversidad) return false;
                    return true;
                }, {
                    message: "Faltan campos llenar los campos condicionales",
                })
                .parse(datos);

            setErrores({});
            setMostrarErrorCampos(false);
            return true;

        } catch (err) {
            if (err instanceof ZodError) {
                const camposConErrores = err.errors.reduce((acc, e) => {
                    const campo = e.path[0];
                    if (campo) {
                        acc[campo.toString()] = e.message;
                    } else {
                        // Error general (ej: refine sin path), lo manejamos como "__general"
                        acc["__general"] = e.message;
                    }
                    return acc;
                }, {} as Record<string, string>);
                setErrores(camposConErrores);
                setMostrarErrorCampos(true);
            }
            return false;
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name === 'pais') {
            const paisSeleccionado = countriesWithCodes.find(p => p.nombre === value);
            setFormData({
                ...formData,
                pais: value,
                codigoPais: paisSeleccionado ? paisSeleccionado.codigo : ''
            });
            return; // 👈 importante: salimos de la función
        }
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const prefijo = formData.codigoPais;
        if (value.startsWith(prefijo)) {
            const numeroSinPrefijo = value.slice(prefijo.length).replace(/\D/g, '');
            setFormData({ ...formData, numeroTelefono: numeroSinPrefijo });
        } else {
            // Evitamos borrar el prefijo
            setFormData({ ...formData });
        }
    };



    const handleSliderChange = (value: number) => {
        setFormData({
            ...formData,
            montoInversion: value
        });
    };
    const handleSliderStop = () => {
        if (!sliderUsado) {
            setSliderUsado(true);
            setShowModal(true);
        }
    };

    const handleFileUploaded = (file: File) => {
        setComprobanteArchivo(file); // guarda el archivo
        setPagoCompletado(true);     // ✅ desbloquea los campos
    };

    const sections = [
        {
            id: 'inscriptions',
            title: 'Inscripciones Abiertas',
            description: 'Aprovecha esta oportunidad única de inscribirte al Congreso Internacional.',
            link: 'https://aneupi.com/congreso-internacional',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
            )
        },
        {
            id: 'raffle',
            title: 'Sorteo Internacional',
            description: 'Participa en nuestro sorteo internacional con increíbles premios.',
            link: 'https://aneupi.com/congreso-internacional',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                </svg>

            )
        },
        {
            id: 'credits',
            title: 'Créditos Inmediatos',
            description: 'Obtén créditos inmediatos al participar en el congreso.',
            link: 'https://aneupi.com/congreso-internacional',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                </svg>

            )
        }
    ];

    const tiposDiscapacidad = ["Discapacidad Auditiva", "Discapacidad Física", "Discapacidad Intelectual", "Discapacidad Psicosocial", "Discapacidad Visual", "Otra"];
    const ynoption = ["Si", "No"];
    const civil = ["Soltero", "Casado", "Divorciado", "Viudo"]; // Define the civil array
    const countriesWithCodes = [
        { nombre: "Argentina", codigo: "+54" },
        { nombre: "Bolivia", codigo: "+591" },
        { nombre: "Brasil", codigo: "+55" },
        { nombre: "Chile", codigo: "+56" },
        { nombre: "Colombia", codigo: "+57" },
        { nombre: "Costa Rica", codigo: "+506" },
        { nombre: "Cuba", codigo: "+53" },
        { nombre: "Ecuador", codigo: "+593" },
        { nombre: "El Salvador", codigo: "+503" },
        { nombre: "España", codigo: "+34" },
        { nombre: "Estados Unidos", codigo: "+1" },
        { nombre: "Guatemala", codigo: "+502" },
        { nombre: "Honduras", codigo: "+504" },
        { nombre: "México", codigo: "+52" },
        { nombre: "Nicaragua", codigo: "+505" },
        { nombre: "Panamá", codigo: "+507" },
        { nombre: "Paraguay", codigo: "+595" },
        { nombre: "Perú", codigo: "+51" },
        { nombre: "Portugal", codigo: "+351" },
        { nombre: "Puerto Rico", codigo: "+1" }, // Usa el mismo código que EE.UU.
        { nombre: "República Dominicana", codigo: "+1" }, // También usa +1
        { nombre: "Uruguay", codigo: "+598" },
        { nombre: "Venezuela", codigo: "+58" }
    ];

    const academicLevel = [
        "Superior", "Secundaria", "Primaria", "Otra"
    ];



    return (
        <div className="w-full max-w-7xl mx-auto font-sans">
            {/* Título principal */}
            <div className="w-full p-2 text-center text-white text-xl font-bold mb-4" style={{ backgroundColor: mainColor }}>
                ¿ Deseas ser accionista de esta institución financiera ?
            </div>

            <div className="flex flex-row gap-4">
                {/* Columna izquierda - Formulario principal */}
                <div className="border border-gray-300 rounded p-4 w-2/3">


                    {/* Campos de formulario en grid de 2 columnas */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="mb-4">
                            <input
                                type="text"
                                name="nombres"
                                value={formData.nombres}
                                placeholder='Nombres'
                                onChange={handleInputChange}
                                className={inputClass("nombres")}
                                style={inputStyle("nombres")}
                            />
                            {errores["nombres"] && (
                                <p className="text-red-500 text-sm mt-1">{errores["nombres"]}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                name="apellidos"
                                value={formData.apellidos}
                                placeholder='Apellidos'
                                onChange={handleInputChange}
                                className={inputClass("apellidos")}
                                style={inputStyle("apellidos")}
                            />
                            {errores["apellidos"] && (
                                <p className="text-red-500 text-sm mt-1">{errores["apellidos"]}</p>
                            )}
                        </div>

                        <div className="mb-4">
                            <input
                                type="text"
                                name="cedula"
                                value={formData.cedula}
                                onChange={handleInputChange}
                                placeholder='Cédula'
                                className={inputClass("cedula")}
                                style={inputStyle("cedula")}
                            />
                            {errores["cedula"] && (
                                <p className="text-red-500 text-sm mt-1">{errores["cedula"]}</p>
                            )}
                        </div>


                        <div className="mb-4">
                            <MiniCalendar
                                label="Fecha de nacimiento"
                                initialDate={formData.date ? new Date(formData.date) : undefined}
                                onDateChange={(date) => {
                                    setFormData({
                                        ...formData,
                                        date: date ? date.toISOString() : ''
                                    });
                                }}
                                error={Boolean(errores["fechaNacimiento"])}
                                helperText={errores["fechaNacimiento"]}
                            />
                        </div>
                        {/* Selector de titulo profesional */}

                        <div className="mb-4">
                            <select
                                name="tituloProfesional"
                                value={formData.tituloProfesional}
                                onChange={handleInputChange}
                                className={inputClass("tituloProfesional")}
                                style={inputStyle("tituloProfesional")}
                            >

                                <option value="">Nivel de Instrucción</option>
                                {academicLevel.map((level, index) => (
                                    <option key={index} value={level}>{level}</option>
                                ))}
                            </select>
                            {errores["tituloProfesional"] && (
                                <p className="text-red-500 text-sm mt-1">{errores["tituloProfesional"]}</p>
                            )}
                        </div>

                        {/* Conditional text input for "Otra" option */}
                        {formData.tituloProfesional === "Otra" && (
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="descripcionProfesional"
                                    value={formData.descripcionProfesional || ''}
                                    onChange={handleInputChange}
                                    placeholder="Estudiante Universitario"
                                    maxLength={150}
                                    className={inputClass("tituloProfesional")}
                                    style={inputStyle("tituloProfesional")}
                                />
                                {errores["tituloProfesional"] && (
                                    <p className="text-red-500 text-sm mt-1">{errores["tituloProfesional"]}</p>
                                )}
                                <p className="text-xs text-gray-500 mt-1">Máximo 25 palabras</p>
                            </div>
                        )}
                        {/* Conditional text input for "Otra" option */}
                        {formData.tituloProfesional === "Superior" && (
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="nombreUniversidad"
                                    value={formData.nombreUniversidad || ''}
                                    onChange={handleInputChange}
                                    placeholder="Escriba el nombre de su Institución Superior"
                                    maxLength={150}
                                    className="w-full p-2 border border-gray-300 bg-gray-100 placeholder-gray-400 placeholder:font-bold"
                                    style={{ borderColor: mainColor, borderRadius: 10 }}
                                />
                            </div>
                        )}

                        {/* Selector de estado civil */}


                        <div className="mb-4">
                            <select
                                name="estadoCivil"
                                value={formData.estadoCivil}
                                onChange={handleInputChange}
                                className={inputClass("estadoCivil")}
                                style={inputStyle("estadoCivil")}
                            >
                                <option value="">Seleccione su estado civil</option>
                                {civil.map((civil, index) => (
                                    <option key={index} value={civil}>{civil}</option>
                                ))}
                            </select>
                            {errores["estadoCivil"] && (
                                <p className="text-red-500 text-sm mt-1">{errores["estadoCivil"]}</p>
                            )}
                        </div>

                        {/* Selector de discapacidad */}

                        <div className="mb-4">
                            <select
                                name="discapacidad"
                                value={formData.discapacidad}
                                onChange={handleInputChange}
                                className={inputClass("discapacidad")}
                                style={inputStyle("discapacidad")}
                            >

                                <option value="">Tiene una discapacidad?</option>
                                {ynoption.map((sentence, index) => (
                                    <option key={index} value={sentence}>{sentence}</option>
                                ))}
                            </select>
                            {errores["discapacidad"] && (
                                <p className="text-red-500 text-sm mt-1">{errores["discapacidad"]}</p>
                            )}
                        </div>

                        {/* Conditional text input for "Sí" option */}
                        {formData.discapacidad === "Si" && (
                            <select
                                name="tipodiscapacidad"
                                value={formData.tipodiscapacidad}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 bg-gray-100 placeholder-gray-400 placeholder:font-bold"
                                style={{ borderColor: mainColor, borderRadius: 10 }}
                            >
                                <option value="">Seleccione su Discapacidad</option>
                                {tiposDiscapacidad.map((discapacidad, index) => (
                                    <option key={index} value={discapacidad}>{discapacidad}</option>
                                ))}
                            </select>
                        )}

                        {/* Conditional text input for "Otro" option */}
                        {formData.tipodiscapacidad === "Otra" && (
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="descripcionDiscapacidad"
                                    value={formData.descripcionDiscapacidad || ''}
                                    onChange={handleInputChange}
                                    placeholder="Describa su tipo de discapacidad"
                                    maxLength={150}
                                    className="w-full p-2 border border-gray-300 bg-gray-100 placeholder-gray-400 placeholder:font-bold"
                                    style={{ borderColor: mainColor, borderRadius: 10 }}
                                />
                            </div>
                        )}

                        <div className="mb-4">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder='Correo Electrónico'
                                className={inputClass("email")}
                                style={inputStyle("email")}
                            />
                            {errores["email"] && (
                                <p className="text-red-500 text-sm mt-1">{errores["email"]}</p>
                            )}
                        </div>


                        <div className="mb-4">
                            <input
                                type="tel"
                                name="numeroTelefono"
                                value={
                                    formData.codigoPais
                                        ? `${formData.codigoPais}${' '}${formData.numeroTelefono}`
                                        : formData.numeroTelefono
                                }
                                onChange={handlePhoneChange}
                                placeholder='Whatsapp - Gatito Plis'
                                className={inputClass("numeroTelefono")}
                                style={inputStyle("numeroTelefono")}
                            />
                            {errores["numeroTelefono"] && (
                                <p className="text-red-500 text-sm mt-1">{errores["numeroTelefono"]}</p>
                            )}
                        </div>

                        <div className="mb-4 mx-auto">
                            <motion.button
                                type="button"
                                onClick={() => setMostrarSliders(true)}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.9, rotate: -5 }}
                                className="flex items-center gap-3 px-6 py-3 bg-[rgba(37,70,106,1)] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
                            >
                                <motion.div
                                    animate={{ x: [0, -5, 5, 0] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                    </svg>
                                </motion.div>
                                <span>Subir su Voucher de su postulación</span>
                            </motion.button>
                        </div>
                        {showModal && (
                            <PaymentModal
                                amount={formData.montoInversion}
                                onClose={() =>
                                    setShowModal(false)
                                }
                                onFileUploaded={handleFileUploaded}
                                onPayDatafast={() => {
                                    // lógica para Datafast
                                    setComprobanteArchivo(comprobanteArchivo);
                                    setPagoCompletado(true);
                                    setShowModal(false);
                                    setMostrarSliders(false);
                                }}
                                onPayBanco={() => {
                                    // lógica para Banco Pichincha
                                    setComprobanteArchivo(comprobanteArchivo);
                                    setPagoCompletado(true);
                                    setShowModal(false);
                                    setMostrarSliders(false); // ocultar sliders si se subió comprobante
                                }}
                                setSliderUsado={setSliderUsado}
                            />
                        )}

                    </div>

                    <div className={`${!pagoCompletado ? 'pointer-events-none opacity-50' : ''}`}>
                        <div className="mb-4">
                            <select
                                name="pais"
                                value={formData.pais}
                                onChange={handleInputChange}
                                className={inputClass("pais")}
                                style={inputStyle("pais")}
                            >
                                <option value="">Seleccione su país de origen</option>
                                {countriesWithCodes.map((country, index) => (
                                    <option key={index} value={country.nombre}>{country.nombre}</option>
                                ))}
                            </select>
                            {errores["pais"] && (
                                <p className="text-red-500 text-sm mt-1">{errores["pais"]}</p>
                            )}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="ciudad"
                                    value={formData.ciudad}
                                    placeholder='Ciudad'
                                    onChange={handleInputChange}
                                    className={inputClass("ciudad")}
                                    style={inputStyle("ciudad")}
                                />
                                {errores["ciudad"] && (
                                    <p className="text-red-500 text-sm mt-1">{errores["ciudad"]}</p>
                                )}
                            </div>

                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="provincia"
                                    value={formData.provincia}
                                    onChange={handleInputChange}
                                    placeholder='Provincia'
                                    className={inputClass("provincia")}
                                    style={inputStyle("provincia")}
                                />
                                {errores["provincia"] && (
                                    <p className="text-red-500 text-sm mt-1">{errores["provincia"]}</p>
                                )}
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="canton"
                                    value={formData.canton}
                                    onChange={handleInputChange}
                                    placeholder='Cantón'
                                    className={inputClass("canton")}
                                    style={inputStyle("canton")}
                                />
                                {errores["canton"] && (
                                    <p className="text-red-500 text-sm mt-1">{errores["canton"]}</p>
                                )}
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="direccion"
                                    value={formData.direccion}
                                    onChange={handleInputChange}
                                    placeholder='Direcciòn de domicilio'
                                    className={inputClass("direccion")}
                                    style={inputStyle("direccion")}
                                />
                                {errores["direccion"] && (
                                    <p className="text-red-500 text-sm mt-1">{errores["direccion"]}</p>
                                )}
                            </div>
                        </div>


                    </div>

                    {/* Money slider section */}

                    {mostrarSliders && (
                        <div className="mb-6 px-4 border border-gray-300 rounded-lg"
                            style={{ backgroundColor: mainColor }}
                        >
                            <h3 className="text-lg font-bold mb-2 text-center" style={{ color: 'white' }}>
                                Seleccione su monto de inversión
                            </h3>
                            <div onMouseUp={handleSliderStop} onTouchEnd={handleSliderStop}>
                                <MoneySliderInteractive
                                    value={formData.montoInversion}
                                    onChange={handleSliderChange}
                                />
                            </div>

                            <div onMouseUp={handleSliderStop} onTouchEnd={handleSliderStop}>
                                <MoneySlider
                                    value={formData.montoInversion}
                                    onChange={handleSliderChange}
                                />
                            </div>

                        </div>
                    )}
                    {/* Botón finalizar postulacion */}

                    <div className="flex gap-4">
                        <button
                            className="border w-full p-2 text-white font-bold flex items-center justify-center gap-2"
                            style={{ backgroundColor: 'rgb(35, 66, 99)', borderRadius: 10 }}
                            onClick={async () => {
                                const esValido = validarFormulario();

                                if (!esValido) {
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                    return;
                                }

                                if (!pagoCompletado) {
                                    alert("Debe subir su comprobante de pago para completar la postulación.");
                                    return;
                                }

                                setMostrarLegalModal(true);
                            }}
                        >
                            <span>Finalice su postulación</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                        {mostrarErrorCampos && (
                            <div className="text-red-700 font-bold mb-4 bg-red-100 border border-red-400 rounded p-3 text-center">
                                ⚠️ Error: campos del formulario incompletos
                            </div>
                        )}
                    </div>

                </div>



                {/* Columna derecha - Métodos de pago y congreso  */}
                <div className="flex flex-col gap-4 w-1/3">
                    {/* Sección métodos de pago */}
                    <div className="border border-gray-300 rounded p-4">

                        <div className='flex justify-center items-center'>
                            <Link href={'/'}>
                                <motion.button
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.9, rotate: -5 }}
                                    className="flex items-center gap-3 px-6 py-3 bg-[rgba(37,70,106,1)] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
                                >
                                    <motion.div
                                        animate={{ x: [0, -5, 5, 0] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                    >
                                        <FiHome className="w-6 h-6" />
                                    </motion.div>
                                    <span>Volver al Inicio</span>
                                </motion.button>
                            </Link>

                        </div>

                    </div>
                    {/* Sección Congreso internacional */}
                    <div className="max-w-auto mx-auto bg-white shadow-md rounded-lg overflow-hidden transform transition-all hover:scale-105 duration-300 border border-gray-300"
                        style={{ borderColor: mainColor }}
                    >
                        {/* Encabezado */}
                        <div
                            className="p-2 flex items-center justify-center text-white font-bold text-sm"
                            style={{ backgroundColor: mainColor }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 mr-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                            </svg>
                            III Congreso Internacional
                        </div>

                        {/* Secciones Interactivas */}
                        <div className="p-4 space-y-2 text-sm">
                            {sections.map((section) => (
                                <div
                                    key={section.id}
                                    className={`border rounded-lg p-4 transition-all duration-300 ease-in-out cursor-pointer
                                            ${activeSection === section.id
                                            ? 'border-blue-500 bg-blue-50 scale-105'
                                            : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                                        }`}
                                    onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div className={`
                  p-2 rounded-full transition-colors
                  ${activeSection === section.id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'}
                `}>
                                                {section.icon}
                                            </div>
                                            <h3 className="font-bold text-[rgb(35,66,99)]">{section.title}</h3>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    {activeSection === section.id && (
                                        <div className="mt-3 pl-12 text-gray-600 animate-fade-in">
                                            <p>{section.description}</p>
                                            <a
                                                href={section.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-2 inline-block text-blue-600 hover:underline"
                                            >
                                                Más información
                                            </a>
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="max-w-lg border-2 border-gray-300 my-4 shadow-md"></div>

                            {/* <div className="border-2 border-[rgb(35,66,99)] my-4"></div> */}

                            {/* Contacto de WhatsApp */}
                            <div className="bg-green-50 flex flex-col items-center justify-center space-x-3 text-sm"
                            >
                                <div className="self-end">
                                    <Image
                                        className="hover:scale-125 transition-transform"
                                        alt={"Gatito-Plis"}
                                        src={gatitoPlis.src}
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <div className='fex flex-row'>
                                    <a
                                        href="https://wa.me/+593983341084"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-green-700 font-bold hover:text-green-900 transition-colors flex flex-col items-center"
                                    >

                                        <span>Contáctanos</span>

                                        <div className="flex items-center ml-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="32"
                                                height="32"
                                                viewBox="0 0 24 24"
                                                fill="#25D366"
                                                className="mr-1"
                                            >
                                                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.72.045.477-.099.883z" />
                                            </svg>
                                            <span>+593 983 341 084</span>
                                        </div>
                                    </a>

                                </div>



                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <LegalAdviseModal
                open={mostrarLegalModal}
                onClose={() => setMostrarLegalModal(false)}
                onAccept={async () => {
                    setMostrarLegalModal(false);
                    const documentoPDF = (
                        <FormularioAccionista
                            formData={{
                                ...formData,
                                telefonoCompleto,
                                numeroDocumento: formData.numeroDocumento || Math.floor((Math.random() * 6000000) + 1).toString().padStart(7, '0'),
                            }}
                        />
                        );
            
                        const blob = await pdf(documentoPDF).toBlob();
                        saveAs(blob, `formulario_accionista_${formData.numeroDocumento || 'temp'}.pdf`);
                }}
            />


        </div>
    );
};

export default FormularioRegistro;