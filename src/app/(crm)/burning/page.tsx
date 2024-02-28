'use client';
import Table from '@/components/Table';
import { createColumnHelper } from '@tanstack/react-table';
import { useState } from 'react';
import ActionEdit from '../../../../public/actionEdit.svg';
import ActionNotification from '../../../../public/actionNotification.svg';
import MintingBurningChart3 from '../../../../public/minting-burning-chart-3.svg';
import MintingBurningChart from '../../../../public/minting-burning-chart.svg';
import ThreeDots from '../../../../public/three-vertical-dots.svg';

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

const Burning = () => {
  const [ethereum, setEthereum] = useState('1,280.00');
  const [binance, setBinance] = useState('1,280.00');

  return (
    <div className='px-6 py-[47px]'>
      <div className='flex items-center justify-between pb-6'>
        <h3 className='text-[28px] font-semibold text-[#1F1E1C]'>
          Authorized and Un-authorized tokens in circulation
        </h3>
        <button className='h-[32px] w-[111px] rounded-s bg-[#3885E8] text-[14px] text-white'>
          Burn tokens
        </button>
      </div>
      <div className='flex gap-6'>
        <div>
          <div className='mb-[20px] h-[204px] min-w-[792px] rounded-xl bg-white px-6 py-[36px]'>
            <h3 className='mb-6 text-[28px] text-[#031734]'>
              Authorized tokens
            </h3>
            <p className='mb-3 text-[13px] text-[#73716D]'>Total</p>
            <p className='text-[28px] text-[#031734]'>317,648.920</p>
          </div>
          <div className='h-[204px] min-w-[792px] rounded-xl bg-white px-6 py-[36px]'>
            <h3 className='mb-6 text-[28px] text-[#031734]'>
              Un-authorized tokens
            </h3>
            <p className='mb-3 text-[13px] text-[#73716D]'>Total</p>
            <p className='text-[28px] text-[#031734]'>42,331.876</p>
          </div>
        </div>
        <div className='h-[428px] w-[792px] rounded-lg bg-white px-[30px] py-4'>
          <h3 className='mb-[50px] text-[18px] text-[#1F1E1C]'>
            Authorized and Un-authorized tokens in circulation
          </h3>
          <div className='flex items-center gap-6'>
            <MintingBurningChart />
            <div>
              <div className='flex items-center gap-[6.5px]'>
                <div className='h-[11px] w-[11px] rounded-[2px] bg-[#FFA812]' />
                <p className='text-[16px] leading-6 text-[#1F1E1C]'>
                  Un-authorized tokens
                </p>
              </div>
              <div className='flex items-center gap-[9px]'>
                <div className='h-[11px] w-[11px] rounded-[2px] bg-[#3C84F0]' />
                <p className='text-[16px] leading-6 text-[#1F1E1C]'>
                  Authorized tokens
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h4 className='mb-6 mt-12 text-[28px] font-semibold text-[#1F1E1C]'>
        Burn un-authorized tokens
      </h4>
      <div className='flex gap-6'>
        {/*Card*/}
        <div className='h-[428px] min-w-[384px] rounded-xl bg-white p-4'>
          <div className='flex items-center justify-between'>
            <h4 className='text-[22px] text-[#031734]'>Ethereum</h4>
            <ThreeDots />
          </div>
          <div className='mt-[32px] px-3'>
            <h4 className='mb-3 text-[18px] text-[#021229]'>
              Un-authorized tokens
            </h4>
            <p className='mb-[156px] text-[22px] text-[#031734]'>211,843.783</p>
            <div>
              <h4 className='mb-3 text-[18px] text-[#021229]'>
                Burn un-authorized token
              </h4>
              <div className='flex justify-between'>
                <input
                  className='h-[36px] w-[238px] rounded bg-[#F7F5F0] px-3 py-[6px]'
                  value={ethereum}
                  onChange={(e) => setEthereum(e.target.value)}
                />
                <button className='h-[36px] w-[84px] rounded bg-[#3885E8] text-[14px] text-white'>
                  Burn
                </button>
              </div>
            </div>
          </div>
        </div>

        {/*Card*/}
        <div className='h-[428px] min-w-[384px] rounded-xl bg-white p-4'>
          <div className='flex items-center justify-between'>
            <h4 className='text-[22px] text-[#031734]'>Binance</h4>
            <ThreeDots />
          </div>
          <div className='mt-[32px] px-3'>
            <h4 className='mb-3 text-[18px] text-[#021229]'>
              Un-authorized tokens
            </h4>
            <p className='mb-[156px] text-[22px] text-[#031734]'>105,921,892</p>
            <div>
              <h4 className='mb-3 text-[18px] text-[#021229]'>
                Burn un-authorized token
              </h4>
              <div className='flex justify-between'>
                <input
                  className='h-[36px] w-[238px] rounded bg-[#F7F5F0] px-3 py-[6px]'
                  value={binance}
                  onChange={(e) => setBinance(e.target.value)}
                />
                <button className='h-[36px] w-[84px] rounded bg-[#3885E8] text-[14px] text-white'>
                  Burn
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='h-[428px] w-[792px] rounded-lg bg-white px-[30px] py-4'>
          <h3 className='mb-[50px] text-[18px] text-[#1F1E1C]'>
            Un-authorized tokens in circulation
          </h3>
          <div className='flex items-center gap-6'>
            <MintingBurningChart3 />
            <div>
              <div className='flex items-center gap-[6.5px]'>
                <div className='h-[11px] w-[11px] rounded-[2px] bg-[#FFA812]' />
                <p className='text-[16px] leading-6 text-[#1F1E1C]'>Ethereum</p>
              </div>
              <div className='flex items-center gap-[9px]'>
                <div className='h-[11px] w-[11px] rounded-[2px] bg-[#FF6F00]' />
                <p className='text-[16px] leading-6 text-[#1F1E1C]'>Binance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className='mb-6 mt-12 text-[28px] font-semibold text-[#33322F]'>
        Ethereum mint / Burn Wallet
      </h3>
      <Table data={defaultData} columns={columns} />
      <h3 className='mb-6 mt-12 text-[28px] font-semibold text-[#33322F]'>
        Binance mint / Burn Wallet
      </h3>
      <Table data={defaultData} columns={columns} />
    </div>
  );
};

export default Burning;
