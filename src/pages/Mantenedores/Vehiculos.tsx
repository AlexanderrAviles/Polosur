import DefaultLayout from '../../layout/DefaultLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { useEffect, useState } from 'react';
import { AirtableRecord, AirtableQueryOptions } from '../../types/airtable';
import { fetchAirtableData } from '../../api/airtableAPI';

const Vehiculos = () => {
  const [data, setData] = useState<AirtableRecord[]>([]);
  const [modalStatus, setModalStatus] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      const options: AirtableQueryOptions = {
        table: 'vehiculo',
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
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Vehiculos" />

      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        )}
      </div>
    </DefaultLayout>
  );
};

export default Vehiculos;
