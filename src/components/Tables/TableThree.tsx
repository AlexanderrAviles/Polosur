import { useState } from 'react';
import { AirtableRecord, AirtableQueryOptions } from '../types/airtable';
import BtnBorrar from '../utils/BtnBorrar';
import BtnDescargar from '../utils/BtnDescargar';
import BtnVer from '../utils/BtnVer';

const TableThree = ({
  children,
  data,
  headers,
  columnNumbers,
  fieldNames,
  onEdit,
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex justify-between mb-5">{children}</div>
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="py-4 px-4 font-medium text-black dark:text-white xl:pl-11"
                >
                  {header}
                </th>
              ))}
              <th className="text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, rowIndex) => (
              <tr key={rowIndex}>
                {columnNumbers?.map((columnIndex) => (
                  <td
                    key={columnIndex}
                    className={`border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11`}
                    style={{ minWidth: '150px', maxWidth: '300px' }} // Define el ancho mínimo y máximo
                  >
                    <div>
                      <span
                        className={`font-medium ${
                          fieldNames[columnIndex - 1] === 'activo'
                            ? item.fields[fieldNames[columnIndex - 1]]
                              ? 'bg-green-400 dark:bg-green-500 text-white p-2 rounded-xl font-semibold'
                              : 'bg-red-400 dark:bg-red-500 text-white p-2 rounded-xl font-semibold'
                            : 'text-black dark:text-white'
                        }`}
                      >
                        {fieldNames[columnIndex - 1] === 'activo'
                          ? item.fields[fieldNames[columnIndex - 1]]
                            ? 'Activo'
                            : 'Inactivo'
                          : item.fields[fieldNames[columnIndex - 1]]}
                      </span>
                      {/* Agrega aquí cualquier lógica adicional para formatear los campos */}
                    </div>
                  </td>
                ))}

                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <div className="flex items-center justify-evenly space-x-3.5">
                    <BtnVer onClick={() => onEdit(item)} />
                    <BtnBorrar />
                    <BtnDescargar />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableThree;
