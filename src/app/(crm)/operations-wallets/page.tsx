'use client';
import { createColumnHelper } from '@tanstack/react-table';
import ActionEdit from '../../../../public/actionEdit.svg';
import ActionNotification from '../../../../public/actionNotification.svg';
import * as React from 'react';
import Table from '@/components/Table';

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
    cell: (info) => {
      const actions = info.getValue();
      return (
        <div className='flex flex w-[139px] justify-center gap-6'>
          {actions.includes('edit') && <ActionEdit />}
          {actions.includes('notification') && <ActionNotification />}
        </div>
      );
    },
    footer: (info) => info.column.id,
  }),
];

const OperationsWallets = () => {
  return (
    <div className='pl-[30px] pt-[41px]'>
      <h3 className='mb-6 text-[28px] font-semibold text-[#33322F]'>
        Ethereum mint / Burn Wallet
      </h3>
      <Table data={defaultData} columns={columns} />
      <h3 className='mb-6 mt-[48px] text-[28px] font-semibold text-[#33322F]'>
        Binance mint / Burn Wallet
      </h3>
      <Table data={defaultData} columns={columns} />
    </div>
  );
};

export default OperationsWallets;
