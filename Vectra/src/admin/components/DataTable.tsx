import { useState } from "react";
import StatusBadge from "./StatusBadge";

type Column = {
  key: string;
  label: string;
  badge?: boolean;
  format?: (value: string | number) => string;
};

type Row = {
  id: string | number;
  [key: string]: string | number;
};

type DataTableProps = {
  columns: Column[];
  rows: Row[];
  searchable?: boolean;
};

export default function DataTable({ columns, rows, searchable = true }: DataTableProps) {
  const [query, setQuery] = useState("");

  const shownRows = rows.filter((row) =>
    Object.values(row).join(" ").toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="rounded border border-gray-200 bg-white">
      {searchable && (
        <div className="border-b border-gray-200 p-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="w-full rounded border border-gray-300 px-3 py-2 outline-none focus:border-red-600 sm:w-72"
          />
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-red-50 text-red-700">
            <tr>
              {columns.map((column) => (
                <th key={column.key} className="px-4 py-3 font-semibold">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {shownRows.map((row) => (
              <tr key={row.id} className="border-t border-gray-100">
                {columns.map((column) => (
                  <td key={column.key} className="px-4 py-3 text-gray-700">
                    {column.badge ? (
                      <StatusBadge value={String(row[column.key])} />
                    ) : column.format ? (
                      column.format(row[column.key])
                    ) : (
                      row[column.key]
                    )}
                  </td>
                ))}
              </tr>
            ))}
            {shownRows.length === 0 && (
              <tr>
                <td colSpan={columns.length} className="px-4 py-8 text-center text-gray-500">
                  Nothing matches your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
