import React, {Fragment, useState} from 'react';
import uuid from 'uuid/v4'

const Form = ({makeAppointment}) => {

    // Crear state de citas
    const [appointment, setAppointment] = useState({
        petName:'', 
        petOwner:'', 
        date:'', 
        time:'', 
        sintoms:''
    })

    const [error, setError] = useState(false)

    const handleChange = e =>{
        setAppointment({
            ...appointment,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

       // Validar informacion
       if (petName.trim() === '' || petOwner.trim() === '' || date.trim() === '' || time.trim() === '' || sintoms.trim()===''){
           setError(true)
           return
       }

       // limpiando formulario
       setError(false)

       // Crear un id
       appointment.id = uuid() // instale el paquete uuid para generar ids por cada cita npm install uuid

       // crear la cita
       makeAppointment(appointment)

       //Reiniciar el form
       setAppointment({
            petName:'', 
            petOwner:'', 
            date:'', 
            time:'', 
            sintoms:''
       })
    }

    const {petName, petOwner, date, time, sintoms} = appointment

    return ( 
        <Fragment>
            <h2>Crear Cita</h2>

            <form
                onSubmit = {handleSubmit}
            >
                <label>Mascota</label>
                <input 
                    type ='text'
                    name = 'petName'
                    className = 'u-full-width'
                    placeholder = 'Nombre de tu mascota'
                    onChange = {handleChange}
                    value = {petName}
                />

                <label>Dueño</label>
                <input 
                    type ='text'
                    name = 'petOwner'
                    className = 'u-full-width'
                    placeholder = 'Nombre del dueño'
                    onChange = {handleChange}
                    value = {petOwner}
                />

                <label>Fecha de Alta</label>
                <input 
                    type ='date'
                    name = 'date'
                    className = 'u-full-width'
                    onChange = {handleChange}
                    value = {date}
                />

                <label>Hora</label>
                <input 
                    type ='time'
                    name = 'time'
                    className = 'u-full-width'
                    onChange = {handleChange}
                    value = {time}
                />

                <label>Sintomas</label>
                <textarea
                    name = 'sintoms'
                    placeholder = 'Descripción de los sintomas que presenta la mascota'
                    onChange = {handleChange}
                    value = {sintoms}
                ></textarea>

                <button
                    type = 'submit'
                    className = 'mb-4 u-full-width button-primary'
                >Agregar cita</button>
               
            </form>
            {(error)? <p className='alerta-error'>Todos los campos son obligatorios</p>
            : null
            }
        </Fragment>
    )
}
 
export default Form;