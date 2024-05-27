import { useState } from 'react';
import { createAirtableRecord } from '../../api/airtableAPI'; // Importa la función desde airtableAPI.ts

const NewBodegas = () => {
  const [nombre, setNombre] = useState('');
  const [activo, setActivo] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const recordData = {
      nombre,
      activo,
    };

    try {
      const data = await createAirtableRecord('bodega', recordData); // Llama a la función
      console.log('Record saved:', data);
      // Clear form after submission
      setNombre('');
      setActivo(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">Nueva Bodega</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="p-6.5">
          <div className="mb-8 flex flex-col gap-6 xl:flex-row">
            <div className="w-full xl:w-3/4">
              <label className="mb-2.5 block text-black dark:text-white">
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Ingrese Nombre Bodega"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>

            <div className="w-full xl:w-1/4">
              <label className="mb-2.5 block text-black dark:text-white">
                Activo
              </label>
              <input
                type="checkbox"
                name="activo"
                checked={activo}
                onChange={(e) => setActivo(e.target.checked)}
                className="w-10 h-5 md:mt-3 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>

          <button
            type="submit"
            className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewBodegas;
