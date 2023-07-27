import React, {useState, useEffect} from 'react'
import generarId from '../helpers/generarId'
import Error from './Error'

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [alta, setAlta] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)

  useEffect(() => {
    if(Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setAlta(paciente.alta)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])
  
  const handleSubmit = (e) => {
    e.preventDefault()

    // validar
    if([nombre, propietario, email, alta, sintomas].includes('')) {
      setError(true)
      return
    }
    setError(false)

    const objetoPaciente = {
      nombre,
      propietario,
      email,
      alta,
      sintomas,
    }

    // Editando o Agregando
    if(paciente.id) {
      // Editando
      objetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map((pacienteState) => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
      setPacientes(pacientesActualizados)
      setPaciente({})
    } else {
      // Nuevo registro
      objetoPaciente.id = generarId()
      setPacientes([...pacientes, objetoPaciente])
    }

    // reiniciar form
    setNombre('')
    setPropietario('')
    setEmail('')
    setAlta('')
    setSintomas('')
  }

  return (
    <div className='mx-3 md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

      <p className='text-lg mt-5 text-center font-semibold mb-10'>
        Añade Pacientes y {''}
        <span className='text-indigo-600'>Administralos</span>
      </p>
      
      <form onSubmit={handleSubmit} className='bg-white p-5 rounded-xl shadow-md mb-10'>
        {error  && <Error mensaje='Todos los campos son obligatorios' />}

        <div className='space-y-4'>
          <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>
          <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            id='mascota'
            type='text'
            placeholder='Nombre de la Mascota'
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
          <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>Nombre Propietario</label>
          <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            id='propietario'
            type='text'
            placeholder='Nombre del Propietario'
            value={propietario}
            onChange={e => setPropietario(e.target.value)}
          />
          <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>Email</label>
          <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            id='email'
            type='email'
            placeholder='Email del Propietario'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>Alta</label>
          <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            id='alta'
            type='date'
            value={alta}
            onChange={e => setAlta(e.target.value)}
          />
          <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>Sintomas</label>
          <textarea className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            id='sintomas'
            type='date'
            placeholder='Describe los sintomas'
            value={sintomas}
            onChange={e => setSintomas(e.target.value)}
          />

          <input className='bg-indigo-600 w-full p-3 text-white font-bold rounded-lg hover:bg-indigo-700 cursor-pointer transition-colors'
            type='submit'
            value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
          />
        </div>
      </form>
    </div>
  )
}

export default Formulario
