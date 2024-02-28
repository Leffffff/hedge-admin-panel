'use client';
import ActionPlus from '../../../../public/actionPlus.svg';
import * as React from 'react';
import { useRef, useState } from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import ActionDelete from '../../../../public/actionDelete.svg';
import Table from '@/components/Table';
import ProfileIcon from '../../../../public/profileIcon.svg';
import BaseModal from '@/components/BaseModal';

type TableData = {
  adminName: string;
  contactDetails: string;
  email: string;
  tag: string;
  action: string[];
};

const defaultData: TableData[] = [
  {
    adminName: 'Owner',
    contactDetails: 'EgZjaHJvbWUyBggAEEUYOTIICAEQABg',
    email: '',
    tag: '',
    action: [''],
  },
  {
    adminName: 'Steve',
    contactDetails: 'EgZjaHJvbWUyBggAEEUYOTIICAEQABg',
    email: 'Steve.shearer@hedge-group.io\n +1 925 997 0576',
    tag: '@Steve_shearer',
    action: ['delete'],
  },
  {
    adminName: 'Justin',
    contactDetails: 'EgZjaHJvbWUyBggAEEUYOTIICAEQABg',
    email: 'Justin.offord@hedge-group.io\n +44 1234 5679',
    tag: '@Justin_offord',
    action: ['delete'],
  },
  {
    adminName: 'Jason',
    contactDetails: 'EgZjaHJvbWUyBggAEEUYOTIICAEQABg',
    email: 'Jason.drew@hedge-group.io\n +44 2768 5524',
    tag: '@Justin_offord',
    action: ['delete'],
  },
];

const columnHelper = createColumnHelper<TableData>();

const columns = [
  columnHelper.accessor('adminName', {
    header: () => (
      <div className='text-left text-lg font-medium'>Admin name</div>
    ),
    cell: (info) => (
      <div className='flex w-[255px] items-center gap-6 text-[16px] font-medium text-[#33322F]'>
        <ProfileIcon />
        {info.getValue()}
      </div>
    ),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('contactDetails', {
    header: () => (
      <div className='text-left text-lg font-medium'>Contact details</div>
    ),
    cell: (info) => (
      <div className='w-[375px] text-left'>
        <p className='mb-1 text-sm text-[#33322F]'>{info.getValue()}</p>
        <p className='text-xs text-[#73716D]'>wallet: Binance-coldwallet</p>
      </div>
    ),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('email', {
    header: () => <div className='text-left text-xs'></div>,
    cell: (info) => (
      <div className='w-[241px] whitespace-pre-line text-sm text-[#3885E8] underline'>
        {info.getValue()}
      </div>
    ),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('tag', {
    header: () => <div className='text-left text-sm'></div>,
    cell: (info) => (
      <div className='w-[177px] text-left text-sm text-[#3885E8]'>
        {info.getValue()}
      </div>
    ),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('action', {
    header: () => <div className='text-center text-xs'></div>,
    cell: ({ getValue, table, row }) => {
      const actions = getValue();
      const meta = table.options.meta;
      return (
        <div className='flex flex w-[133px] justify-center gap-6'>
          {actions.includes('delete') && (
            <ActionDelete
              className='cursor-pointer'
              onClick={() => {
                // @ts-ignore
                meta?.deleteRow(row.index);
              }}
            />
          )}
        </div>
      );
    },
    footer: (info) => info.column.id,
  }),
];

const Settings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState(() => [...defaultData]);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const tagRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);

  const handleAddAdmin = () => {
    if (
      nameRef.current &&
      emailRef.current &&
      tagRef.current &&
      addressRef.current
    ) {
      if (!addressRef.current.value) {
        return;
      }

      setData([
        ...data,
        {
          adminName: nameRef.current.value,
          contactDetails: addressRef.current.value,
          email: emailRef.current.value,
          tag: tagRef.current.value,
          action: ['delete'],
        },
      ]);

      setIsModalOpen(false);
    }
  };
  return (
    <div className='px-6 pt-[45px]'>
      <div className='mb-[29px] flex items-center justify-between'>
        <h3 className='text-[28px] font-semibold text-[#1F1E1C]'>
          Profile settings
        </h3>
        <button
          onClick={() => setIsModalOpen(true)}
          className='flex h-[48px] w-[176px] items-center justify-center gap-2 rounded bg-[#3885E8] text-[18px] text-white'
        >
          <ActionPlus />
          <span>Add Admin</span>
        </button>
      </div>
      <Table
        data={data}
        columns={columns}
        meta={{
          deleteRow: (rowIndex: number) => {
            setData((arr) => arr.filter((_row, index) => index !== rowIndex));
          },
        }}
      />
      <BaseModal
        showModal={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        customExternalStyles={{ width: '454px', height: '546px' }}
        btnText={'Add'}
        btnAction={handleAddAdmin}
        customButtons={true}
      >
        <form>
          <div className='flex flex-col items-center justify-center'>
            <h4 className='mb-3 max-w-[268px] text-center text-[28px] font-medium text-[#202534]'>
              Add Admin
            </h4>

            <div className='mb-3 flex flex-col items-center justify-center'>
              <span className='mb-[6px] text-[14px] leading-6 text-[#8A8884]'>
                Name
              </span>
              <input
                ref={nameRef}
                className='h-[44px] w-[361px] rounded bg-[#F7F5F0] py-[6px] text-center text-sm font-medium text-[#031734]'
              />
            </div>

            <div className='mb-3 flex flex-col items-center justify-center'>
              <span className='mb-[6px] text-[14px] leading-6 text-[#8A8884]'>
                Email
              </span>
              <input
                ref={emailRef}
                className='h-[44px] w-[361px] rounded bg-[#F7F5F0] py-[6px] text-center text-sm font-medium text-[#031734]'
              />
            </div>

            <div className='mb-3 flex flex-col items-center justify-center'>
              <span className='mb-[6px] text-[14px] leading-6 text-[#8A8884]'>
                Telegram
              </span>
              <input
                ref={tagRef}
                className='h-[44px] w-[361px] rounded bg-[#F7F5F0] py-[6px] text-center text-sm font-medium text-[#031734]'
              />
            </div>

            <div className='mb-[36px] flex flex-col items-center justify-center'>
              <span className='mb-[6px] text-[14px] leading-6 text-[#8A8884]'>
                Wallet address (required)
              </span>
              <input
                ref={addressRef}
                required={true}
                className='h-[44px] w-[361px] rounded bg-[#F7F5F0] py-[6px] text-center text-sm font-medium text-[#031734]'
              />
            </div>
            <div className='flex justify-center gap-6'>
              <button
                onClick={() => {
                  handleAddAdmin();
                }}
                className='flex h-[42px] w-[170px] items-center justify-center rounded bg-[#3885E8] text-[18px] text-white'
              >
                Add
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className='flex h-[42px] w-[170px] items-center justify-center rounded bg-[#BAB8B3] text-[18px] text-white'
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </BaseModal>
    </div>
  );
};

export default Settings;
