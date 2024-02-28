'use client';
import { useState } from 'react';
import BaseModal from '@/components/BaseModal';

const PauseUnpause = () => {
  const [isEthereumModalOpen, setIsEthereumModalOpen] = useState(false);
  const [isBinanceModalOpen, setIsBinanceModalOpen] = useState(false);
  const [ethereumState, setEthereumState] = useState('Pause');
  const [binanceState, setBinanceState] = useState('Unpause');

  return (
    <div className='flex gap-6 pl-6 pt-[48.5px]'>
      {/*Card*/}
      <div className='h-[132.55px] w-[405px] rounded-xl bg-white px-[28px] py-4'>
        <h4 className='mb-6 text-[22px] font-semibold leading-8 text-[#031734]'>
          Ethereum
        </h4>
        <div className='flex items-center justify-between border-b border-[#DCDAD7] pb-[12.55px]'>
          <span className='text-lg leading-8'>
            {ethereumState === 'Pause' ? 'Running' : 'Paused'}
          </span>
          <button
            className='h-[32px] w-[73px] rounded bg-[#3885E8] text-sm text-white'
            onClick={() => setIsEthereumModalOpen(true)}
          >
            {ethereumState}
          </button>
        </div>
      </div>

      {/*Card*/}
      <div className='h-[132.55px] w-[405px] rounded-xl bg-white px-[28px] py-4'>
        <h4 className='mb-6 text-[22px] font-semibold leading-8 text-[#031734]'>
          Binance
        </h4>
        <div className='flex items-center justify-between border-b border-[#DCDAD7] pb-[12.55px]'>
          <span className='text-lg leading-8'>
            {binanceState === 'Pause' ? 'Running' : 'Paused'}
          </span>
          <button
            onClick={() => setIsBinanceModalOpen(true)}
            className='h-[32px] w-[92px] rounded bg-[#3885E8] text-sm text-white'
          >
            {binanceState}
          </button>
        </div>
      </div>
      <BaseModal
        showModal={isEthereumModalOpen}
        onClose={() => setIsEthereumModalOpen(false)}
        customExternalStyles={{ width: '454px', height: '194px' }}
        btnText={ethereumState === 'Pause' ? 'Pause' : 'Un-Pause'}
        btnAction={() => {
          if (ethereumState === 'Pause') {
            setEthereumState('Unpause');
          } else {
            setEthereumState('Pause');
          }
        }}
      >
        <h4 className='mb-[36px] text-center text-[22px] text-[#202534]'>
          Are you sure you want to{' '}
          {ethereumState === 'Pause' ? 'Pause' : 'Un-Pause'}
        </h4>
      </BaseModal>

      <BaseModal
        showModal={isBinanceModalOpen}
        onClose={() => setIsBinanceModalOpen(false)}
        customExternalStyles={{ width: '454px', height: '194px' }}
        btnText={binanceState === 'Pause' ? 'Pause' : 'Un-Pause'}
        btnAction={() => {
          if (binanceState === 'Pause') {
            setBinanceState('Unpause');
          } else {
            setBinanceState('Pause');
          }
        }}
      >
        <h4 className='mb-[36px] text-center text-[22px] text-[#202534]'>
          Are you sure you want to{' '}
          {binanceState === 'Pause' ? 'Pause' : 'Un-Pause'}
        </h4>
      </BaseModal>
    </div>
  );
};

export default PauseUnpause;
