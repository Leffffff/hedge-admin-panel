'use client';
import Table from '@/components/Table';
import { createColumnHelper } from '@tanstack/react-table';
import { useRef, useState } from 'react';
import ActionEdit from '../../../../public/actionEdit.svg';
import ActionNotification from '../../../../public/actionNotification.svg';
import MintingBurningChart3 from '../../../../public/minting-burning-chart-3.svg';
import MintingBurningChart from '../../../../public/minting-burning-chart.svg';
import ThreeDots from '../../../../public/three-vertical-dots.svg';
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

const Burning = () => {
  const [ethereum, setEthereum] = useState('1,280.00');
  const [binance, setBinance] = useState('1,280.00');

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
      <h3 className='mb-6 mt-12 text-[28px] font-semibold text-[#33322F]'>
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

export default Burning;
