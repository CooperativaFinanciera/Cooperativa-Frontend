import React from 'react';
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Image,
    PDFViewer
} from '@react-pdf/renderer';
import { number } from 'zod';

const tvlogo = '/footerPdfAneupi.png';
const logoBanco = '/logoBank.jpg';

// Definición de estilos
const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontFamily: 'Helvetica',
    },
    container: {
        border: '1px solid #000',
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly', // Centra el contenido
        marginBottom: 20,
    },
    logo: {
        width: 80,
        height: 80,
        marginRight: 10, // Agrega un margen derecho para separar del título
    },
    titleContainer: {
        flex: 1,
        textAlign: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 12,
    },
    sectionHeader: {
        backgroundColor: '#1a4b8c',
        color: 'white',
        padding: 6,
        marginBottom: 10,
        marginTop: 5
    },
    row: {
        flexDirection: 'row',
        borderBottom: '0.5px solid gray',
    },
    column: {
        flex: 1,
        padding: 5,
        borderRight: '1px solid gray',
    },
    columnEnd: {
        flex: 1,
        padding: 5,
    },
    label: {
        fontSize: 8,
    },
    value: {
        fontSize: 10
    },

    sectionlabel: {
        fontSize: 10,
    },
    input: {
        height: 20,
        borderBottom: '1px solid #ccc',
        marginTop: 0,
    },
    checkboxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkbox: {
        width: 12,
        height: 12,
        border: '1px solid #000',
        marginRight: 5,
    },
    checkboxLabel: {
        fontSize: 10,
        marginRight: 15,
    },
    externalLinks: {
        fontSize: 8,
        color: 'blue',
    },

    /*SECCION DE FIRMAR */
    firmarContainer: {
        marginTop: 15,
        paddingVertical: 20,
        textAlign: "center",
    },
    titleSign: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
        color: "#1a4b8c",
    },
    rowSign: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
    },
    columnSign: {
        flex: 1,
        textAlign: "center",
    },
    firmaLinea: {
        width: "80%",
        height: 1,
        backgroundColor: "gray",
        marginHorizontal: "auto",
        marginBottom: 5,
    },
    selloContainer: {
        width: 120,
        height: 80,
        marginHorizontal: "auto",
    },
    firmaText: {
        fontSize: 8,
        fontWeight: "bold",
    },

    footerContent: {
        flexDirection: 'row',
        flex: 1,
    },
    footerLeftSection: {
        width: '30%',
        padding: 10,
        justifyContent: 'center',
    },
    footerMiddleSection: {
        width: '45%',
        backgroundColor: 'white',
        padding: 10,
        marginLeft: -15,
    },
    footerMiddleContent: {
    },

    socialText: {
        color: 'white',
        fontSize: 9,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    socialIcon: {
        width: 15,
        height: 15,
        marginHorizontal: 2,
        borderRadius: 10,
    },
    contactText: {
        fontSize: 8,
        marginBottom: 3,
    },
    contactIcon: {
        width: 10,
        height: 10,
        marginRight: 5,
    },
    contactRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 2,
    },
    logoEnd: {
        width: 60,
        height: 40,
    },
    angledContainer: {
        position: 'relative',
        width: '45%',
        height: 60,
        overflow: 'hidden',
    },
    angledBackground: {
        position: 'absolute',
        left: -15,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'white',
    },
    contentContainer: {
        position: 'absolute',
        padding: 10,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    // Modificar el estilo de la imagen en el footer
    imageFooter: {
        width: '100%', // Asegúrate de que la imagen ocupe todo el ancho
        height: 'auto', // Ajusta la altura automáticamente para mantener la proporció
        maxHeight: 80, // Ajusta la altura según sea necesario
        objectFit: 'cover', // Asegúrate de que la imagen mantenga su proporción
    },

    // Modificar el estilo del footer
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 80, // Ajusta la altura del footer según sea necesario
        flexDirection: 'row',
        justifyContent: 'center', // Centra el contenido
    },

    // Modificar el estilo de la imagen en el footer
    imageLogo: {
        height: 45, // Ajusta la altura automáticamente para mantener la proporció
        maxHeight: 45, // Ajusta la altura según sea necesario
        objectFit: 'cover', // Asegúrate de que la imagen mantenga su proporción
    },

    // Modificar el estilo del footers
    imageContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 80, // Ajusta la altura del footer según sea necesario
        flexDirection: 'row',
        justifyContent: 'center', // Centra el contenido
    },


});


// Definir la interfaz para las propiedades
interface FormData {
    estadoCivil: string;
    nombres: string;
    apellidos: string;
    cedula: string;
    tituloProfesional: string;
    email: string;
    direccion: string;
    codigoPais: string, // 👈 nuevo campo
    numeroTelefono: string;
    pais: string;
    date: string;
    ciudad: string;
    provincia: string;
    canton: string;
    descripcionProfesional: string;
    montoInversion: number;
    discapacidad: string;
    nombreUniversidad: string;
    tipodiscapacidad: string;
    comprobantePago: string;
    fechaNacimiento: string;
    fechaSolicitud: string; // tipo string en formato ISO
    descripcionDiscapacidad: string;
    telefonoCompleto: String;
    numeroDocumento: String;
}

// Definir las propiedades del componente
interface FormularioAccionistaProps {
    formData: FormData;
}

// Componente principal
const FormularioAccionista: React.FC<FormularioAccionistaProps> = ({ formData }) => {

    const fecha = new Date(formData.fechaSolicitud);

    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const anio = fecha.getFullYear();



    return (

        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.container}>
                    {/* Encabezado con logo y título */}
                    <View style={styles.header}>

                        {/* Seccion footer */}
                            <Image style={styles.imageLogo} src={logoBanco} />


                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>Postulación para ser Accionista</Text>
                            <Text style={styles.subtitle}>Banco Financiero ANEUPI</Text>
                        </View>
                    </View>

                    {/* DATOS PERSONALES */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <View style={{ flex: 1, marginRight: 10 }}>

                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={styles.label}>Nombres:</Text>
                                    <Text style={styles.value}>{formData.nombres}</Text>

                                </View>
                                <View style={styles.columnEnd}>
                                    <Text style={styles.label}>Apellidos:</Text>
                                    <Text style={styles.value}>{formData.apellidos}</Text>

                                </View>
                            </View>

                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={styles.label}>Nº. Cédula:</Text>
                                    <Text style={styles.value}>{formData.cedula}</Text>

                                </View>
                                <View style={styles.columnEnd}>
                                    <Text style={styles.label}>Fecha de Nacimiento:</Text>
                                    <Text style={styles.value}>
                                        {formData.date
                                            ? new Date(formData.date).toLocaleDateString('es-ES', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                            })
                                            : 'No seleccionada'}
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={styles.value}> Nivel de Instrucción: </Text>

                                    <Text style={styles.value}>

                                        {formData.tituloProfesional === "Superior"
                                            ? `${formData.tituloProfesional} - ${formData.nombreUniversidad}`
                                            || "No especificado"
                                            : formData.tituloProfesional === "Otra"
                                                ? formData.descripcionProfesional || "No especificado"
                                                : formData.tituloProfesional}
                                    </Text>

                                </View>
                                <View style={styles.columnEnd}>
                                    <Text style={styles.label}>Estado Civil:</Text>
                                    <Text style={styles.value}>{formData.estadoCivil}</Text>

                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={styles.columnEnd}>
                                    <Text style={styles.label}>Tiene una discapacidad:</Text>
                                    <Text style={styles.value}>
                                        {formData.discapacidad === 'Si' ? (
                                            formData.tipodiscapacidad === 'Otra' && formData.descripcionDiscapacidad
                                                ? formData.descripcionDiscapacidad
                                                : formData.tipodiscapacidad || 'No especificado'
                                        ) : formData.discapacidad === 'No' ? (
                                            'No'
                                        ) : (
                                            'No especificado'
                                        )}
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.row}>
                                <View style={styles.columnEnd}>
                                    <Text style={styles.label}>Correo electrónico:</Text>
                                    <Text style={styles.value}>{formData.email}</Text>

                                </View>
                            </View>

                            <View style={styles.row}>
                                <View style={styles.columnEnd}>
                                    <Text style={styles.label}>Teléfono/WhatsApp:</Text>
                                    <Text style={styles.value}>{formData.telefonoCompleto}</Text>

                                </View>
                            </View>
                        </View>

                        <View style={{ width: 80, paddingLeft: 5, paddingTop: 20 }}>

                            <Text style={styles.label}>Documento Nº</Text>
                            <Text style={styles.value}>{formData.numeroDocumento}</Text>
                            <View style={styles.input}></View>

                            <Text style={{ ...styles.label, marginTop: 5 }}>Fecha de Solicitud:</Text>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={styles.label}>D</Text>
                                    <Text style={styles.value}>{dia}</Text>

                                </View>
                                <View style={styles.column}>
                                    <Text style={styles.label}>M:</Text>
                                    <Text style={styles.value}>{mes}</Text>

                                </View>
                                <View style={styles.columnEnd}>
                                    <Text style={styles.label}>A</Text>
                                    <Text style={styles.value}>{anio}</Text>

                                </View>
                            </View>
                        </View>
                    </View>
                    {/* Seccion de los paises */}

                    {/* DATOS PERSONALES */}


                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Text style={styles.label}>País:</Text>
                            <Text style={styles.value}>{formData.pais}</Text>

                        </View>
                        <View style={styles.columnEnd}>
                            <Text style={styles.label}>Ciudad:</Text>
                            <Text style={styles.value}>{formData.ciudad}</Text>

                        </View>
                    </View>

                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Text style={styles.label}>Provincia:</Text>
                            <Text style={styles.value}>{formData.provincia}</Text>

                        </View>
                        <View style={styles.columnEnd}>
                            <Text style={styles.label}>Cantón:</Text>
                            <Text style={styles.value}>{formData.canton}</Text>

                        </View>
                    </View>

                    <View style={styles.row}>
                        <View style={styles.columnEnd}>
                            <Text style={styles.label}>Dirección de Domicilio:</Text>
                            <Text style={styles.value}>{formData.direccion}</Text>

                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.columnEnd}>
                            <Text style={styles.label}>Monto del depósito:</Text>
                            <Text style={styles.value}>{formData.montoInversion}</Text>

                        </View>
                    </View>


                    {/* ACLARACIÓN */}
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionlabel}>ACLARACIÓN:</Text>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.columnEnd}>
                            <Text style={styles.label}> 1.-Enviar en  pdf por interno por los medios oficiales
                            </Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.columnEnd}>
                            <Text style={styles.label}> 2.-Para mas información contáctanos al telefono/whatsApp:
                                <Text style={styles.externalLinks}>+593 983341048</Text>
                            </Text>
                        </View>
                    </View>
                </View>
                {/* SECCION DE FIRMAR */}


                <View style={styles.firmarContainer}>
                    <Text style={styles.titleSign}>FIRMAR:</Text>

                    <View style={styles.rowSign}>
                        {/* Columna izquierda - Firma del accionista */}
                        <View style={styles.columnSign}>
                            <View style={styles.firmaLinea} />
                            <Text style={styles.label}>{formData.nombres.toUpperCase()}{" "}{formData.apellidos.toUpperCase()}</Text>

                            <Text style={styles.firmaText}>FUTURO ACCIONISTA DE LA{"\n"}INSTITUCION FINANCIERA</Text>
                        </View>

                        {/* Columna central - Espacio para el sello */}
                        <View style={styles.columnSign}>
                            <View style={styles.selloContainer} />
                            <Text style={styles.firmaText}>SELLO DE LA COMPAÑÍA-del</Text>
                        </View>

                        {/* Columna derecha - Firma del presidente */}
                        <View style={styles.columnSign}>
                            <View style={styles.firmaLinea} />
                            <Text style={styles.label}>HENRY RICARDO ERRAEZ</Text>
                            <Text style={styles.firmaText}>
                                PRESIDENTE DE LA INSTITUCION{"\n"}FINANCIERA
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Seccion footer */}
                <View style={styles.footer} fixed>
                    <Image style={styles.imageFooter} src={tvlogo} />
                </View>

            </Page>
        </Document>

    );
};






export default FormularioAccionista;
