'use client';
import Table from '@/components/Table';
import ArrowLeft from '@/icons/ArrowLeft';
import ArrowRight from '@/icons/ArrowRight';
import ChartPieYellowIcon from '@/icons/ChartPieYellowIcon';
import ThreeDots from '@/icons/ThreeDots';
import TransferIcon from '@/icons/TransferIcon';
import { createColumnHelper } from '@tanstack/react-table';
import * as React from 'react';
import { useRef, useState } from 'react';
import ActionEdit from '../../../../public/actionEdit.svg';
import ActionNotification from '../../../../public/actionNotification.svg';
import BaseModal from '@/components/BaseModal';

const ethereumData = [
  { walletName: 'Escrow wallet', balance: '13,648.90' },
  {
    walletName: 'Wallet 1',
    balance: '13,648.90',
  },
  { walletName: 'Wallet 2', balance: '13,648.90' },
  { walletName: 'Wallet 3', balance: '13,648.90' },
];

type TableData = {
  wallet: string;
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
  secondFirstIn: {
    date: string;
    time: string;
  };
  secondLastIn: {
    date: string;
    time: string;
  };
  ins: string;
  outs: string;
  action: string[];
};

const defaultData: TableData[] = [
  {
    wallet: 'Distribution wallet 1',
    address: 'EgZjaHJvbWUyBggAEEUYOTIICAEQABg',
    balance: '248,597BTC',
    coins: '1.28%',
    firstIn: {
      date: '2023/09/04',
      time: '20:01:57',
    },
    lastIn: {
      date: '2023/12/12',
      time: '18:31:54',
    },
    ins: '806',
    secondFirstIn: {
      date: '2023/09/04',
      time: '20:01:57',
    },
    secondLastIn: {
      date: '2023/12/12',
      time: '18:31:54',
    },
    outs: '451',
    action: ['edit', 'notification'],
  },
  {
    wallet: 'Distribution wallet 2',
    address: 'EgZjaHJvbWUyBggAEEUYOTIICAEQABg',
    balance: '248,597BTC',
    coins: '1.28%',
    firstIn: {
      date: '2023/09/04',
      time: '20:01:57',
    },
    lastIn: {
      date: '2023/12/12',
      time: '18:31:54',
    },
    ins: '806',
    secondFirstIn: {
      date: '2023/09/04',
      time: '20:01:57',
    },
    secondLastIn: {
      date: '2023/12/12',
      time: '18:31:54',
    },
    outs: '451',
    action: ['edit', 'notification'],
  },
  {
    wallet: 'Distribution wallet 3',
    address: 'EgZjaHJvbWUyBggAEEUYOTIICAEQABg',
    balance: '248,597BTC',
    coins: '1.28%',
    firstIn: {
      date: '2023/09/04',
      time: '20:01:57',
    },
    lastIn: {
      date: '2023/12/12',
      time: '18:31:54',
    },
    ins: '806',
    secondFirstIn: {
      date: '2023/09/04',
      time: '20:01:57',
    },
    secondLastIn: {
      date: '2023/12/12',
      time: '18:31:54',
    },
    outs: '451',
    action: ['edit', 'notification'],
  },
  {
    wallet: 'Escrow wallet',
    address: 'EgZjaHJvbWUyBggAEEUYOTIICAEQABg',
    balance: '248,597BTC',
    coins: '1.28%',
    firstIn: {
      date: '2023/09/04',
      time: '20:01:57',
    },
    lastIn: {
      date: '2023/12/12',
      time: '18:31:54',
    },
    ins: '806',
    secondFirstIn: {
      date: '2023/09/04',
      time: '20:01:57',
    },
    secondLastIn: {
      date: '2023/12/12',
      time: '18:31:54',
    },
    outs: '451',
    action: ['edit'],
  },
  {
    wallet: 'Bank wallet',
    address: 'EgZjaHJvbWUyBggAEEUYOTIICAEQABg',
    balance: '248,597BTC',
    coins: '1.28%',
    firstIn: {
      date: '2023/09/04',
      time: '20:01:57',
    },
    lastIn: {
      date: '2023/12/12',
      time: '18:31:54',
    },
    ins: '806',
    secondFirstIn: {
      date: '2023/09/04',
      time: '20:01:57',
    },
    secondLastIn: {
      date: '2023/12/12',
      time: '18:31:54',
    },
    outs: '451',
    action: ['edit'],
  },
];

const columnHelper = createColumnHelper<TableData>();

const columns = [
  columnHelper.accessor('wallet', {
    header: () => <div className='text-left'>Wallet</div>,
    cell: (info) => (
      <div className='h-full w-[216px] text-nowrap text-left align-top text-[16px] font-semibold text-[#33322F]'>
        {info.getValue()}
      </div>
    ),
    footer: (info) => info.column.id,
  }),
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
    header: () => <div className='text-left text-xs'>First in</div>,
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
    header: () => <div className='text-right text-xs'>Last in</div>,
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
      <div className='w-[53px] text-center text-xs text-[#33322F]'>
        {info.getValue()}
      </div>
    ),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('secondFirstIn', {
    header: () => <div className='text-left text-xs '>First In</div>,
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
  columnHelper.accessor('secondLastIn', {
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

const Card = ({ walletName, balance }: any) => {
  const [state, setState] = React.useState(0);
  const [amount, setAmount] = React.useState(1200);
  return (
    <div className='flex h-[360px] w-full min-w-[230px] max-w-[248px] flex-col justify-between rounded-lg bg-white p-4'>
      {state === 0 ? (
        <div className='flex h-full flex-col justify-between'>
          <div>
            <div className='mb-8 flex items-center justify-between'>
              <h4 className='text-lg'>{walletName}</h4>
              <ThreeDots />
            </div>
            <p className='mb-[6px] text-[13px] text-[#73716D]'>Balance</p>
            <div className='flex items-center justify-between'>
              <p className='text-[18px] text-[#33322F]'>USDT</p>
              <p className='text-[22px] font-medium text-[#33322F]'>
                {balance}
              </p>
            </div>
          </div>
          <button
            className='group flex h-[48px] w-full items-center justify-center rounded-md hover:bg-[#3C84F0]'
            onClick={() => setState(1)}
          >
            <TransferIcon className='group-hover:fill-[#FFF]' />
            <span className='ml-2 text-[18px] font-medium text-[#3885E8] group-hover:text-[#FFF]'>
              Transfer funds
            </span>
          </button>
        </div>
      ) : (
        <div className='flex h-full flex-col justify-between'>
          <div>
            <div className='items-left flex flex-col justify-between'>
              <div onClick={() => setState(0)} className='cursor-pointer'>
                <ArrowLeft />
              </div>
              <h4 className='pt-3 text-lg'>{walletName}</h4>
            </div>
            <div className='flex items-center justify-between'>
              <p className='text-[18px] text-[#33322F]'>USDT</p>
              <p className='text-[22px] font-medium text-[#33322F]'>
                {balance}
              </p>
            </div>
            <p className='mb-[6px] p-2 text-[13px] text-[#73716D]'>
              Transfer amount
            </p>
          </div>
          <div className='relative'>
            <div className='pointer-events-none absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 text-gray-500'>
              USDT
            </div>
            <input
              type='number'
              value={amount}
              className='text-md h-[44px] w-[216px] appearance-none rounded bg-[#F7F5F0] py-[6px] text-right font-medium text-[#031734]'
              onChange={(e) => setAmount(+e.target.value)}
            />
          </div>
          {['to bank', 'to escrow', 'to wallet2', 'to wallet3'].map((e) => {
            return (
              <div key={e}>
                <div className='flex items-center justify-between px-2'>
                  <p className='text-sm text-[#33322F]'>{e}</p>
                  <div className='cursor-pointer'>
                    <ArrowRight className='transition-all hover:fill-[#3C84F0]' />
                  </div>
                </div>
                <div className='mt-2 h-px w-full bg-gray-300' />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const EscrowAndDistribution = () => {
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
  const walletRef = useRef<HTMLInputElement>(null);

  const handleUpdateEthereumRow = () => {
    setEthereumDataTable((old) =>
      old.map((row, index) => {
        if (index === activeRowIndex) {
          return {
            ...old[activeRowIndex],
            address: addressRef.current?.value || '',
            wallet: walletRef.current?.value || '',
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
            wallet: walletRef.current?.value || '',
          };
        }
        return row;
      })
    );
    setIsBinanceModalOpen(false);
  };

  return (
    <section className='px-6 py-12'>
      <h2 className='mb-6 text-[28px] font-medium font-semibold text-[#1F1E1C]'>
        Ethereum blockchain
      </h2>
      <div className='mb-12 flex gap-6'>
        {ethereumData.map((el, idx) => (
          <Card key={idx} {...el} />
        ))}
        <div className='h-[360px] min-w-[521px] shrink-0 rounded-lg bg-white px-7'>
          <div className='flex h-full items-center gap-[30px]'>
            <ChartPieYellowIcon className='shrink-0' />
            <div className='flex flex-col gap-[6px]'>
              <div className='flex items-center gap-[6.5px]'>
                <div className='h-[11px] w-[11px] rounded-[2px] bg-[#FFA812]' />
                <p className='text-[16px] leading-6 text-[#1F1E1C]'>
                  Escrow Wallet
                </p>
              </div>
              <div className='flex items-center gap-[6.5px]'>
                <div className='h-[11px] w-[11px] rounded-[2px] bg-[#3C84F0]' />
                <p className='text-[16px] leading-6 text-[#1F1E1C]'>Wallet 1</p>
              </div>
              <div className='flex items-center gap-[6.5px]'>
                <div className='h-[11px] w-[11px] rounded-[2px] bg-[#E8C1A0]' />
                <p className='text-[16px] leading-6 text-[#1F1E1C]'>Wallet 2</p>
              </div>
              <div className='flex items-center gap-[6.5px]'>
                <div className='h-[11px] w-[11px] rounded-[2px] bg-[#FF7500]' />
                <p className='text-[16px] leading-6 text-[#1F1E1C]'>Wallet 3</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className='mb-6 text-[28px] font-medium font-semibold text-[#1F1E1C]'>
        Binance blockchain
      </h2>
      <div className='mb-12 flex gap-6'>
        {ethereumData.map((el, idx) => (
          <Card key={idx} {...el} />
        ))}
        <div className='h-[360px] w-[521px] shrink-0 rounded-lg bg-white px-7'>
          <div className='flex h-full items-center gap-[30px]'>
            <ChartPieYellowIcon className='shrink-0' />
            <div className='flex flex-col gap-[6px]'>
              <div className='flex items-center gap-[6.5px]'>
                <div className='h-[11px] w-[11px] rounded-[2px] bg-[#FFA812]' />
                <p className='text-[16px] leading-6 text-[#1F1E1C]'>
                  Escrow Wallet
                </p>
              </div>
              <div className='flex items-center gap-[6.5px]'>
                <div className='h-[11px] w-[11px] rounded-[2px] bg-[#3C84F0]' />
                <p className='text-[16px] leading-6 text-[#1F1E1C]'>Wallet 1</p>
              </div>
              <div className='flex items-center gap-[6.5px]'>
                <div className='h-[11px] w-[11px] rounded-[2px] bg-[#E8C1A0]' />
                <p className='text-[16px] leading-6 text-[#1F1E1C]'>Wallet 2</p>
              </div>
              <div className='flex items-center gap-[6.5px]'>
                <div className='h-[11px] w-[11px] rounded-[2px] bg-[#FF7500]' />
                <p className='text-[16px] leading-6 text-[#1F1E1C]'>Wallet 3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className='mb-6 text-[28px] font-medium font-semibold text-[#1F1E1C]'>
        Ethereum wallets
      </h2>
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
              Wallet name
            </span>
            <input
              ref={walletRef}
              defaultValue={activeRow?.wallet}
              required={true}
              className='h-[44px] w-[361px] rounded bg-[#F7F5F0] py-[6px] text-center text-sm font-medium text-[#031734]'
            />
          </div>
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

      <h2 className='mb-6 mt-[48px] text-[28px] font-medium font-semibold text-[#1F1E1C]'>
        Binance wallet
      </h2>
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
              Wallet name
            </span>
            <input
              ref={walletRef}
              defaultValue={activeRow?.wallet}
              required={true}
              className='h-[44px] w-[361px] rounded bg-[#F7F5F0] py-[6px] text-center text-sm font-medium text-[#031734]'
            />
          </div>
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
    </section>
  );
};

export default EscrowAndDistribution;
