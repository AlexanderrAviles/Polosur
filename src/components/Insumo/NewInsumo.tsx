import { useEffect, useState } from 'react';
import {
  createAirtableRecord,
  updateAirtableRecord,
} from '../../api/airtableAPI'; // Importa la función desde airtableAPI.ts

const NewInsumo = ({ item, onClose }) => {
  const [nombre, setNombre] = useState('');
  const [activo, setActivo] = useState(false);
  const [descripcion, setDescripcion] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [vidaUtil, setVidaUtil] = useState('');
  const [precioCompra, setPrecioCompra] = useState('');
  const [precioVenta, setPrecioVenta] = useState('');
  const [stockMinimo, setStockMinimo] = useState('');

  useEffect(() => {
    if (item) {
      setNombre(item.fields.nombre || '');
      setActivo(item.fields.activo || false);
      setDescripcion(item.fields.descripcion || '');
      setMarca(item.fields.marca || '');
      setModelo(item.fields.modelo || '');
      setVidaUtil(item.fields.vida_util || '');
      setPrecioCompra(item.fields.precio_compra || '');
      setPrecioVenta(item.fields.precio_venta || '');
      setStockMinimo(item.fields.stock_minimo || '');
    }
  }, [item]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const recordData = {
      nombre,
      activo,
      descripcion,
      marca,
      modelo,
      vida_util: parseFloat(vidaUtil),
      precio_compra: parseFloat(precioCompra),
      precio_venta: parseFloat(precioVenta),
      stock_minimo: parseFloat(stockMinimo),
    };

    try {
      if (item) {
        const data = await updateAirtableRecord('insumo', item.id, recordData);
        console.log('Record updated:', data);
      } else {
        const data = await createAirtableRecord('insumo', recordData);
        console.log('Record saved:', data);
      }
      onClose();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">
          {item ? 'Editar Insumo' : 'Nuevo Insumo'}
        </h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="p-6.5">
          <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
            <div className="w-full xl:w-3/4">
              <label className="mb-2.5 block text-black dark:text-white">
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Ingrese Nombre Insumo"
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
          <div className="mb-6">
            <label className="mb-2.5 block text-black dark:text-white">
              Descripcion
            </label>
            <textarea
              rows={6}
              placeholder="Descripcion Insumo"
              name="descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            ></textarea>
          </div>
          <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
            <div className="w-full xl:w-1/2">
              <label className="mb-2.5 block text-black dark:text-white">
                Marca
              </label>
              <input
                type="text"
                placeholder="Ingrese Marca Insumo"
                name="marca"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>

            <div className="w-full xl:w-1/2">
              <label className="mb-2.5 block text-black dark:text-white">
                Modelo
              </label>
              <input
                type="text"
                name="modelo"
                value={modelo}
                onChange={(e) => setModelo(e.target.value)}
                placeholder="Ingrese Modelo Insumo"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
            <div className="w-full xl:w-1/2">
              <label className="mb-2.5 block text-black dark:text-white">
                Vida Util (Meses)
              </label>
              <input
                type="number"
                placeholder="Ingrese Vida Util Insumo"
                name="vida_util"
                value={vidaUtil}
                onChange={(e) => setVidaUtil(e.target.value)}
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>
          <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
            <div className="w-full xl:w-1/2">
              <label className="mb-2.5 block text-black dark:text-white">
                Precio Compra
              </label>
              <input
                type="number"
                name="precio_compra"
                value={precioCompra}
                onChange={(e) => setPrecioCompra(e.target.value)}
                placeholder="Ingrese Precio Compra Insumo"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>

            <div className="w-full xl:w-1/2">
              <label className="mb-2.5 block text-black dark:text-white">
                Precio Venta
              </label>
              <input
                type="number"
                name="precio_venta"
                value={precioVenta}
                onChange={(e) => setPrecioVenta(e.target.value)}
                placeholder="Ingrese Precio Venta Insumo"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
            <div className="w-full xl:w-1/2">
              <label className="mb-2.5 block text-black dark:text-white">
                Stock Minimo
              </label>
              <input
                type="number"
                name="stock_minimo"
                value={stockMinimo}
                onChange={(e) => setStockMinimo(e.target.value)}
                placeholder="Ingrese Stock Min. Insumo"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>

          <button
            type="submit"
            className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
          >
            {item ? 'Actualizar' : 'Guardar'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewInsumo;
