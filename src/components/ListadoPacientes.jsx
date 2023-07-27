import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  return (
    <div className='mx-3 md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>

      {pacientes && pacientes.length
        ? (
          <>
            <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>

            <p className='text-lg mt-5 text-center font-semibold mb-10'>
              Administra tus {''}
              <span className='text-indigo-600'>Pacientes y Citas</span>
            </p>

            {pacientes.map((paciente) => {
              return (
                <Paciente
                  key={paciente.id}
                  paciente={paciente}
                  setPaciente={setPaciente}
                  eliminarPaciente={eliminarPaciente}
                />
              )
            })}
          </>
        ) : (
          <>
            <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>

            <p className='text-lg mt-5 text-center font-semibold mb-10'>
              Comienza a agregar {''}
              <span className='text-indigo-600'>tus Pacientes</span>
            </p>
          </>
        )
      }
    </div>
  )
}

export default ListadoPacientes
