import DefaultLayout from '../../layout/DefaultLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { useEffect, useState } from 'react';
import { AirtableRecord, AirtableQueryOptions } from '../../types/airtable';
import { fetchAirtableData } from '../../api/airtableAPI';
import TableThree from '../../components/Tables/TableThree';
import NewInsumo from '../../components/Insumo/NewInsumo';
import Modal from '../../components/utils/Modal';

const Insumos = () => {
  const [data, setData] = useState<AirtableRecord[]>([]);
  const [modalStatus, setModalStatus] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedItem, setSelectedItem] = useState<AirtableRecord | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const options: AirtableQueryOptions = {
      table: 'insumo',
    };
    try {
      const result = await fetchAirtableData(options);
      setData(result);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data from Airtable:', error);
      setLoading(false);
    }
  };

  const openModal = (item = null) => {
    setSelectedItem(item);
    setModalStatus(true);
  };

  const closeModal = () => {
    setModalStatus(false);
    setSelectedItem(null);
    fetchData();
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Insumos" />

      <TableThree
        data={data}
        headers={['Nombre', 'Descripcion', 'Marca', 'Estado']}
        columnNumbers={[1, 2, 3, 4]}
        fieldNames={['nombre', 'descripcion', 'marca', 'activo']}
        onEdit={openModal}
      >
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Lista de Registro
        </h4>
        <button
          onClick={() => openModal()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
        >
          Nuevo
        </button>
      </TableThree>

      {modalStatus && (
        <Modal close={closeModal}>
          <NewInsumo item={selectedItem} onClose={closeModal} />
        </Modal>
      )}
    </DefaultLayout>
  );
};

export default Insumos;
