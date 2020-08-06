import React, {Fragment, useState, useEffect} from 'react';
import Form from './components/Form'
import Appointment from './components/Appointment'
import PropTypes from 'prop-types'

function App() {

// Agregando citas al local Storage
let myAppointments = JSON.parse(localStorage.getItem('appointments')) 
if(!myAppointments){
  myAppointments=[]
}

// Arreglo de citas
const [appointments , setAppointments] = useState(myAppointments)

// UseEffect para actualizar algo en caso de que cambie algo
useEffect( () =>{
  let myAppointments = JSON.parse(localStorage.getItem('appointments')) 
  
if(myAppointments){
  localStorage.setItem('appointments', JSON.stringify(appointments))
} else {
  localStorage.setItem('appointments', JSON.stringify([]))
}
},[appointments])


// Funcion que tome las citas actuales y agrege la nueva
const makeAppointment = (appointment) =>{
  setAppointments([
    ...appointments, 
    appointment
  ])
}

// Funcion eliminar cita por su id
const deleteAppointment = (id) => {
  const newAppointments = appointments.filter(appointment => appointment.id !== id)
  setAppointments(newAppointments)
}

// mensaje condicional en adminsitra tus citas
const title = appointments.length === 0? 'No hay citas' : 'Administra tus citas'

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>

      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-12'>
            <Form 
              makeAppointment = {makeAppointment}
            />
          </div>
          <div className='col-lg-6 col-12 mis-citas'>
            <h2>{title}</h2>
            {
              appointments.map(appointment => (
                <Appointment 
                  key={appointment.id}
                  appointment={appointment}
                  deleteAppointment = {deleteAppointment}
                />
              ))
            }
          </div>
        </div>
      </div>

    </Fragment>
  );
}

// documentando cada componente a traves de propTypes

// En este caso el componente formulario, le estoy pasando la funcion crearCitas la cual es obligatoria

Form.prototype ={
  makeAppointment:PropTypes.func.isRequired
}

export default App;
