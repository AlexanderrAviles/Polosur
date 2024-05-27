// airtableTypes.ts

export interface AirtableRecord {
  id: string;
  fields: {
    [key: string]: any;
  };
}

export interface AirtableQueryOptions {
  table: string;
  view?: string;
  formula?: string;
}
