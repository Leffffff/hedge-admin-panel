'use client';
import * as React from 'react';

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  TableMeta,
  useReactTable,
} from '@tanstack/react-table';

export type TableProps<Data extends object> = {
  data: Data[];
  columns: ColumnDef<Data, any>[];
  meta?: TableMeta<Data>;
  customHeaderName?: string;
  customRowName?: string;
};

function Table<Data extends object>({
  data,
  columns,
  meta,
  customHeaderName,
}: TableProps<Data>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: meta,
  });

  return (
    <table className='w-full overflow-hidden rounded-b-xl rounded-t-xl bg-[#FFF]'>
      <thead className='border-b border-[#EBE8E4] bg-[#3885E81A]'>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className={`h-[53px] p-3 text-sm font-semibold text-[#3885E8] ${customHeaderName}`}
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row, index, array) => (
          <tr
            key={row.id}
            className={
              index === array.length - 1
                ? 'h-[63px]'
                : 'h-[63px] border-b border-[#EBEAEA]'
            }
          >
            {row.getVisibleCells().map((cell) => {
              return (
                <td key={cell.id} className='h-[63px] p-3'>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
