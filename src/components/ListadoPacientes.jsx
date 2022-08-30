import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

  return (

    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-sky-600 font-bold">pacientes y citas</span>
          </p>

          { pacientes.map( (paciente) => (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente = {eliminarPaciente}
              />
            )
          )}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">Aun no hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Completa el formulario {''}
            <span className="text-sky-600 font-bold">y se agregarán aquí</span>
          </p>
        </>
      )}

    </div>
  )
}

export default ListadoPacientes