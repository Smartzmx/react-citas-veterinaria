import React from 'react';
import PropTypes from 'prop-types'


const Appointment = ({appointment, deleteAppointment}) => {
    return ( 
        <div className="cita">
            <p>Mascota:<span>{appointment.petName}</span></p>
            <p>Dueño::<span>{appointment.petOwner}</span></p>
            <p>Fecha:<span>{appointment.date}</span></p>
            <p>Hora:<span>{appointment.time}</span></p>
            <p>Sintomas::<span>{appointment.sintoms}</span></p>

            <button 
            className="button eliminar u-full-width"
            onClick = {() =>deleteAppointment(appointment.id)}
            >Eliminar &times;</button>
        </div>
     );
}
 
// documentando cada componente a traves de propTypes
// En este caso el componente cita, le estoy pasando la funcion deleteAppointment la cual es obligatoria y el objeto appointment
Appointment.prototype ={
    appointment:PropTypes.object.isRequired,
    deleteAppointment:PropTypes.func.isRequired
  }

export default Appointment;