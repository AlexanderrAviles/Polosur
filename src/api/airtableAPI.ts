import { AirtableRecord, AirtableQueryOptions } from '../types/airtable';

const AIRTABLE_API_KEY =
  'pat0F1ycdCiUsh4WA.ed326606b19183db4cc832516f78d7b3212de90d2c6b4f914f53c34da0939039';
const AIRTABLE_BASE_ID = 'appscKKWBoYZnBetg';

export async function fetchAirtableData(
  options: AirtableQueryOptions,
): Promise<AirtableRecord[]> {
  const { table, view, formula } = options;
  let url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(
    table,
  )}`;

  const params = [];
  if (view) {
    params.push(`view=${encodeURIComponent(view)}`);
  }
  if (formula) {
    params.push(`filterByFormula=${encodeURIComponent(formula)}`);
  }

  if (params.length > 0) {
    url += `?${params.join('&')}`;
  }

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error('Error fetching data from Airtable');
  }

  const data = await response.json();
  return data.records;
}

export async function createAirtableRecord(
  table: string,
  recordData: { [key: string]: any },
): Promise<AirtableRecord> {
  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(
    table,
  )}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ fields: recordData }),
  });

  if (!response.ok) {
    throw new Error('Error creating record in Airtable');
  }

  const data = await response.json();
  return data;
}
export async function updateAirtableRecord(
  table: string,
  recordId: string,
  recordData: { [key: string]: any },
): Promise<AirtableRecord> {
  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(
    table,
  )}/${recordId}`;

  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ fields: recordData }),
  });

  if (!response.ok) {
    throw new Error('Error updating record in Airtable');
  }

  const data = await response.json();
  return data;
}
