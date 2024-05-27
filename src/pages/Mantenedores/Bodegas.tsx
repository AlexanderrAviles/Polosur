import DefaultLayout from '../../layout/DefaultLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { useEffect, useState } from 'react';
import { AirtableRecord, AirtableQueryOptions } from '../../types/airtable';
import { fetchAirtableData } from '../../api/airtableAPI';
import TableThree from '../../components/Tables/TableThree';
import Modal from '../../components/utils/Modal';
import NewBodegas from '../../components/Bodegas/NewBodegas';

const Bodegas = () => {
  const [data, setData] = useState<AirtableRecord[]>([]);
  const [modalStatus, setModalStatus] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      const options: AirtableQueryOptions = {
        table: 'bodega',
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

    fetchData();
  }, []);

  const openModal = () => {
    setModalStatus(true);
  };
  const closeModal = () => {
    setModalStatus(false);
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Bodegas" />
      <TableThree
        data={data}
        headers={['Nombre', 'Activo']}
        columnNumbers={[1, 2]}
        fieldNames={['nombre', 'activo']}
      >
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Lista de Registro
        </h4>
        <button
          onClick={openModal}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
        >
          Nuevo
        </button>
      </TableThree>

      {modalStatus && (
        <Modal close={closeModal}>
          <NewBodegas />
        </Modal>
      )}
    </DefaultLayout>
  );
};

export default Bodegas;
