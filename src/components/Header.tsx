'use client';
import RingIcon from '@/icons/RingIcon';
import Image from 'next/image';
import * as React from 'react';
import { useRef, useState } from 'react';
import BaseModal from '@/components/BaseModal';

const Header = () => {
  const addressRef = useRef<HTMLInputElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className='sticky left-0 top-0 flex w-full justify-between border-b border-[#D6D4D0] bg-[#F7F7FA] pr-[39px]'>
      <div className='flex'>
        <p className='bg-[#FFF] px-[33px] pb-[37px] pt-[43px] text-[22px] font-semibold text-[#3885E8]'>
          HEDGE Compass
        </p>
        <p className='px-[33px] pb-[37px] pt-[43px] text-[22px] font-semibold text-[#1F1E1C]'>
          HEDGE Arbitrage
        </p>
      </div>
      <div className='flex items-center'>
        <RingIcon
          className='mr-[41px] cursor-pointer'
          onClick={() => {
            setIsModalOpen(true);
          }}
        />
        <Image
          src='/avatar.png'
          alt='avatar'
          className='mr-4'
          width={32}
          height={32}
          quality={100}
        />
        <p className='mr-2'>John Doe</p>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='17'
          viewBox='0 0 16 17'
          fill='none'
        >
          <path
            d='M2 7.5L8 13.5L14 7.5'
            stroke='black'
            strokeWidth='2'
            strokeLinecap='round'
          />
        </svg>
      </div>
      <BaseModal
        showModal={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        customExternalStyles={{ width: '454px', height: '258px' }}
        btnText={'Add'}
        btnAction={() => setIsModalOpen(false)}
        customButtons={false}
      >
        <form>
          <div className='flex flex-col items-center justify-center'>
            <h4 className='mb-3 max-w-[268px] text-center text-[28px] font-medium text-[#202534]'>
              Minimum amount
            </h4>

            <div className='relative mb-[36px] flex flex-col items-center justify-center'>
              <input
                ref={addressRef}
                className='h-[44px] w-[361px] rounded bg-[#F7F5F0] py-[6px] pl-[150px] text-sm font-medium text-[#031734]'
              />
              <span className='absolute left-[97px] top-1/2 -translate-y-1/2 text-[18px] text-[#33322F]'>
                USDT
              </span>
            </div>
          </div>
        </form>
      </BaseModal>
    </header>
  );
};

export default Header;
