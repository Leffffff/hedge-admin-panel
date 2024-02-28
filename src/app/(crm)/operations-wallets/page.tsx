'use client';
import { createColumnHelper } from '@tanstack/react-table';
import ActionEdit from '../../../../public/actionEdit.svg';
import ActionNotification from '../../../../public/actionNotification.svg';
import * as React from 'react';
import { useRef, useState } from 'react';
import Table from '@/components/Table';
import BaseModal from '@/components/BaseModal';

type TableData = {
  address: string;
  balance: string;
  coins: string;
  firstIn: {
    date: string;
    time: string;
  };
  lastIn: {
    date: string;
    time: string;
  };
  firstOut: {
    date: string;
    time: string;
  };
  lastOut: {
    date: string;
    time: string;
  };
  ins: string;
  outs: string;
  action: string[];
};

const defaultData: TableData[] = [
  {
    address: 'EgZjaHJvbWUyBggAEEUYOTIICAEQABg',
    balance: '248,597BTC',
    coins: '1.28%',
    firstIn: {
      date: '2023/09/04',
      time: '20:01:57',
    },
    lastIn: {
      date: '2023/12/12',
      time: '20:01:57',
    },
    ins: '806',
    firstOut: {
      date: '2023/12/12',
      time: '18:31:54',
    },
    lastOut: {
      date: '2023/12/12',
      time: '18:31:54',
    },
    outs: '451',
    action: ['edit'],
  },
];

const columnHelper = createColumnHelper<TableData>();

const columns = [
  columnHelper.accessor('address', {
    header: () => <div className='text-left text-xs'>Address</div>,
    cell: (info) => (
      <div className='w-[336px] text-left'>
        <p className='mb-1 text-sm text-[#33322F]'>{info.getValue()}</p>
        <p className='text-xs text-[#73716D]'>wallet: Binance-coldwallet</p>
      </div>
    ),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('balance', {
    header: () => <div className='text-right text-xs'>Balance</div>,
    cell: (info) => (
      <div className='w-[88px] text-right text-xs text-[#33322F]'>
        {info.getValue()}
      </div>
    ),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('coins', {
    header: () => <div className='text-center text-xs'>% of coins</div>,
    cell: (info) => (
      <div className='w-[86px] text-center text-xs text-[#33322F]'>
        {info.getValue()}
      </div>
    ),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('firstIn', {
    header: () => <div className='text-left text-xs'>First In</div>,
    cell: (info) => {
      const text = info.getValue();
      return (
        <div className='w-[86px] text-left'>
          <div className='text-sm text-[#33322F]'>{text.date}</div>
          <div className='text-xs text-[#73716D]'>{text.time}</div>
        </div>
      );
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('lastIn', {
    header: () => <div className='text-right text-xs'>Last In</div>,
    cell: (info) => {
      const text = info.getValue();
      return (
        <div className='w-[86px] text-right'>
          <div className='text-sm text-[#33322F]'>{text.date}</div>
          <div className='text-xs text-[#73716D]'>{text.time}</div>
        </div>
      );
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('ins', {
    header: () => <div className='text-center text-xs'>Ins</div>,
    cell: (info) => (
      <div className='w-[77px] text-center text-xs text-[#33322F]'>
        {info.getValue()}
      </div>
    ),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('firstOut', {
    header: () => <div className='text-left text-xs '>First Out</div>,
    cell: (info) => {
      const text = info.getValue();
      return (
        <div className='w-[86px] text-left'>
          <div className='text-sm text-[#33322F]'>{text.date}</div>
          <div className='text-xs text-[#73716D]'>{text.time}</div>
        </div>
      );
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('lastOut', {
    header: () => <div className='text-right text-xs'>Last Out</div>,
    cell: (info) => {
      const text = info.getValue();
      return (
        <div className='w-[86px] text-right'>
          <div className='text-sm text-[#33322F]'>{text.date}</div>
          <div className='text-xs text-[#73716D]'>{text.time}</div>
        </div>
      );
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('outs', {
    header: () => <div className='text-right text-xs'>Outs</div>,
    cell: (info) => (
      <div className='w-[83px] text-right text-xs text-[#33322F]'>
        {info.getValue()}
      </div>
    ),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('action', {
    header: () => <div className='text-center text-xs'>Action</div>,
    cell: ({ getValue, row, column, table }) => {
      const actions = getValue();
      return (
        <div className='flex flex w-[139px] justify-center gap-6'>
          {actions.includes('edit') && (
            <ActionEdit
              className='cursor-pointer'
              onClick={() => {
                // @ts-ignore
                table.options.meta?.updateData(row.index, column.id);
              }}
            />
          )}
          {actions.includes('notification') && <ActionNotification />}
        </div>
      );
    },
    footer: (info) => info.column.id,
  }),
];

const OperationsWallets = () => {
  const [isEthereumModalOpen, setIsEthereumModalOpen] = useState(false);
  const [isBinanceModalOpen, setIsBinanceModalOpen] = useState(false);
  const [ethereumDataTable, setEthereumDataTable] = useState(() => [
    ...defaultData,
  ]);
  const [binanceDataTable, setBinanceDataTable] = useState(() => [
    ...defaultData,
  ]);
  const [activeRow, setActiveRow] = useState<TableData | null>(null);
  const [activeRowIndex, setActiveRowIndex] = useState(0);
  const [columnId, setColumnId] = useState('');
  const addressRef = useRef<HTMLInputElement>(null);

  const handleUpdateEthereumRow = () => {
    setEthereumDataTable((old) =>
      old.map((row, index) => {
        if (index === activeRowIndex) {
          return {
            ...old[activeRowIndex],
            address: addressRef.current?.value || '',
          };
        }
        return row;
      })
    );
    setIsEthereumModalOpen(false);
  };

  const handleUpdateBinanceRow = () => {
    setBinanceDataTable((old) =>
      old.map((row, index) => {
        if (index === activeRowIndex) {
          return {
            ...old[activeRowIndex],
            address: addressRef.current?.value || '',
          };
        }
        return row;
      })
    );
    setIsBinanceModalOpen(false);
  };

  return (
    <div className='pl-[30px] pt-[41px]'>
      <h3 className='mb-6 text-[28px] font-semibold text-[#33322F]'>
        Ethereum mint / Burn Wallet
      </h3>
      <Table
        data={ethereumDataTable}
        columns={columns}
        meta={{
          updateData: (rowIndex: number, columnId: string) => {
            const currentRow = ethereumDataTable.find(
              (_, index) => index === rowIndex
            );
            if (currentRow) {
              setColumnId(columnId);
              setActiveRowIndex(rowIndex);
              setActiveRow(currentRow);
              setIsEthereumModalOpen(true);
            }
          },
        }}
      />
      <BaseModal
        showModal={isEthereumModalOpen}
        onClose={() => setIsEthereumModalOpen(false)}
        customExternalStyles={{ width: '454px' }}
        customButtons={true}
      >
        <div className='flex flex-col items-center justify-center'>
          <h4 className='mb-3 max-w-[268px] text-center text-[28px] font-medium text-[#202534]'>
            Edit wallet
          </h4>
          <div className='mb-[36px] flex flex-col items-center justify-center'>
            <span className='mb-[6px] text-[14px] leading-6 text-[#8A8884]'>
              Wallet address
            </span>
            <input
              ref={addressRef}
              defaultValue={activeRow?.address}
              required={true}
              className='h-[44px] w-[361px] rounded bg-[#F7F5F0] py-[6px] text-center text-sm font-medium text-[#031734]'
            />
          </div>
          <div className='flex justify-center gap-6'>
            <button
              onClick={() => {
                handleUpdateEthereumRow();
              }}
              className='flex h-[42px] w-[170px] items-center justify-center rounded bg-[#3885E8] text-[18px] text-white'
            >
              Update
            </button>
            <button
              onClick={() => setIsEthereumModalOpen(false)}
              className='flex h-[42px] w-[170px] items-center justify-center rounded bg-[#BAB8B3] text-[18px] text-white'
            >
              Cancel
            </button>
          </div>
        </div>
      </BaseModal>
      <h3 className='mb-6 mt-[48px] text-[28px] font-semibold text-[#33322F]'>
        Binance mint / Burn Wallet
      </h3>
      <Table
        data={binanceDataTable}
        columns={columns}
        meta={{
          updateData: (rowIndex: number, columnId: string) => {
            const currentRow = binanceDataTable.find(
              (_, index) => index === rowIndex
            );
            if (currentRow) {
              setColumnId(columnId);
              setActiveRowIndex(rowIndex);
              setActiveRow(currentRow);
              setIsBinanceModalOpen(true);
            }
          },
        }}
      />

      <BaseModal
        showModal={isBinanceModalOpen}
        onClose={() => setIsBinanceModalOpen(false)}
        customExternalStyles={{ width: '454px' }}
        customButtons={true}
      >
        <div className='flex flex-col items-center justify-center'>
          <h4 className='mb-3 max-w-[268px] text-center text-[28px] font-medium text-[#202534]'>
            Edit wallet
          </h4>
          <div className='mb-[36px] flex flex-col items-center justify-center'>
            <span className='mb-[6px] text-[14px] leading-6 text-[#8A8884]'>
              Wallet address
            </span>
            <input
              ref={addressRef}
              defaultValue={activeRow?.address}
              required={true}
              className='h-[44px] w-[361px] rounded bg-[#F7F5F0] py-[6px] text-center text-sm font-medium text-[#031734]'
            />
          </div>
          <div className='flex justify-center gap-6'>
            <button
              onClick={() => {
                handleUpdateBinanceRow();
              }}
              className='flex h-[42px] w-[170px] items-center justify-center rounded bg-[#3885E8] text-[18px] text-white'
            >
              Update
            </button>
            <button
              onClick={() => setIsBinanceModalOpen(false)}
              className='flex h-[42px] w-[170px] items-center justify-center rounded bg-[#BAB8B3] text-[18px] text-white'
            >
              Cancel
            </button>
          </div>
        </div>
      </BaseModal>
    </div>
  );
};

export default OperationsWallets;
