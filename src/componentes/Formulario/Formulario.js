import { useState } from "react"
import "./Formulario.css"
import Campo from "../campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../boton"

const Formulario = (props) => {

    const[nombre,actualiarNombre] = useState("")
    const[puesto,actualiarPuesto] = useState("")
    const[foto,actualiarFoto] = useState("")
    const[equipo,actualiarEquipo] = useState("")

    const[titulo,actualiarTitulo] = useState("")
    const[color,actualiarColor] = useState("")


    const{registrarColaborador, crearEquipo} = props


    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log ("Manejar el envio", e)
        let datosAEnviar ={
             nombre,
             puesto,
             foto,
             equipo
        }
      registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }




    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena El formulario para crear el colaborador.</h2>
            <Campo 
            titulo="Nombre"
            placeholder="Ingresar nombre"
            required 
            valor={nombre} actualizarValor={actualiarNombre}
            
            />

            <Campo 
            titulo="Puesto" 
            placeholder="Ingresar puesto"
            required
            valor={puesto} actualizarValor={actualiarPuesto}
            
            />

            <Campo
            titulo="Foto"  
            placeholder="Ingresar enlance de foto" 
            required
            valor={foto} actualizarValor={actualiarFoto}

            />  

            <ListaOpciones
            valor={equipo} 
            actualizarEquipo={actualiarEquipo}
            equipos={props.equipos}
            />
            <Boton>
                Crear 
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena El formulario para crear el equipo.</h2>
            <Campo 
            titulo="Titulo"
            placeholder="Ingresar titulo"
            required 
            valor={titulo} 
            actualizarValor={actualiarTitulo}
            
            />

            <Campo 
            titulo="Color" 
            placeholder="Ingresar el color en Hex"
            required
            valor={color}
             actualizarValor={actualiarColor}
             type="color"
            
            />
            <Boton>Registrar Equipo</Boton>
            </form>
    </section>  
}

export default Formulario