import React from "react";

interface SortableTableProps {
  headers: { key: string; label: string }[];
  data: any[];
}

const SortableTable: React.FC<SortableTableProps> = ({ headers, data }) => (
  <>
    <style>
      {`
        body {
          background-color: black;
          color: white;
          margin: 0;
          font-family: Arial, sans-serif;
        }

        .sortable-table {
          border-collapse: collapse;
          width: 100%;
        }

        .sortable-table th,
        .sortable-table td {
          border: 1px solid white;
          padding: 8px;
        }

        .sortable-table th {
          background-color: #333;
        }

        .sortable-table tr:nth-child(even) {
          background-color: #222;
        }
      `}
    </style>
    <table className="sortable-table">
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header.key}>{header.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {headers.map((header) => (
              <td key={header.key}>{row[header.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

export default SortableTable;
