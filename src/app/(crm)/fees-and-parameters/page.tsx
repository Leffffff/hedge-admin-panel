'use client';
import BaseModal from '@/components/BaseModal';
import ThreeDots from '@/icons/ThreeDots';
import { useRef, useState } from 'react';

const getValue = (data: any) => {
  if (data.title === 'Buy fee') {
    return data.fee;
  } else if (data.title === 'Minimum buy amount') {
    return 'USDT ' + data.buyAmount;
  } else if (data.title === 'Redeem fee') {
    return data.redeemFee;
  } else if (data.title === 'Minimum redeem amount') {
    return 'USDT ' + data.redeemAmount;
  }
};

function formatNumberWithCommasAndFixedDecimals(number: string) {
  let parts = number.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  parts[1] = parts[1] ? parts[1].padEnd(3, '0') : '000';
  return parts.join('.');
}

const FeesAndParameters = () => {
  const ethereumInputRef = useRef<HTMLInputElement>(null);
  const binanceInputRef = useRef<HTMLInputElement>(null);
  const [isEthereumModalOpen, setIsEthereumModalOpen] = useState(false);
  const [ethereumData, setEthereumData] = useState({
    title: '',
    fee: '0.00%',
    buyAmount: '157,628.920',
    redeemFee: '1,15%',
    redeemAmount: '157,628.920',
  });

  const [isBinanceModalOpen, setIsBinanceModalOpen] = useState(false);
  const [binanceData, setBinanceData] = useState({
    title: '',
    fee: '0.00%',
    buyAmount: '32,438.988',
    redeemFee: '1,15%',
    redeemAmount: '157,628.920',
  });

  const onSelectEthereumData = (title: string) => {
    setEthereumData({
      ...ethereumData,
      title: title,
    });
  };

  const onSelectBinanceData = (title: string) => {
    setBinanceData({
      ...binanceData,
      title: title,
    });
  };

  const handleUpdateEthereum = (title: string) => {
    if (ethereumInputRef.current) {
      if (title === 'Buy fee') {
        setEthereumData({
          ...ethereumData,
          fee: ethereumInputRef.current.value,
        });
        return;
      } else if (title === 'Minimum buy amount') {
        setEthereumData({
          ...ethereumData,
          buyAmount: formatNumberWithCommasAndFixedDecimals(
            ethereumInputRef.current.value
          ),
        });
        return;
      } else if (title === 'Redeem fee') {
        setEthereumData({
          ...ethereumData,
          redeemFee: ethereumInputRef.current.value,
        });
        return;
      } else if (title === 'Minimum redeem amount') {
        setEthereumData({
          ...ethereumData,
          redeemAmount: formatNumberWithCommasAndFixedDecimals(
            ethereumInputRef.current.value
          ),
        });
        return;
      }
    }
  };

  const handleUpdateBinance = (title: string) => {
    if (binanceInputRef.current) {
      if (title === 'Buy fee') {
        setBinanceData({
          ...binanceData,
          fee: binanceInputRef.current.value,
        });
        return;
      } else if (title === 'Minimum buy amount') {
        setBinanceData({
          ...binanceData,
          buyAmount: formatNumberWithCommasAndFixedDecimals(
            binanceInputRef.current.value
          ),
        });
        return;
      } else if (title === 'Redeem fee') {
        setBinanceData({
          ...binanceData,
          redeemFee: binanceInputRef.current.value,
        });
        return;
      } else if (title === 'Minimum redeem amount') {
        setBinanceData({
          ...binanceData,
          redeemAmount: formatNumberWithCommasAndFixedDecimals(
            binanceInputRef.current.value
          ),
        });
        return;
      }
    }
  };

  return (
    <div className='pl-6 pt-[48.5px]'>
      <h2 className='mb-[28px] text-[28px] leading-10 text-[#1F1E1C]'>
        Fees and parameters
      </h2>
      <div className='flex gap-6'>
        {/*Card*/}
        <div className='w-[519px] rounded-xl bg-white p-4'>
          <div className='mb-6 flex items-center justify-between'>
            <h3 className='text-[22px] leading-[32px] text-[#031734]'>
              Ethereum
            </h3>
            <ThreeDots />
          </div>
          <div className='px-3'>
            {/*Inner card*/}
            <h4 className='mb-3 text-[18px] leading-[32px] text-[#021229]'>
              Buy fee
            </h4>
            <div className='mb-6 flex items-center justify-between border-b border-[#DCDAD7] pb-6'>
              <span className='text-[18px] font-medium leading-[32px] text-[#031734]'>
                {ethereumData.fee}
              </span>
              <button
                onClick={() => {
                  onSelectEthereumData('Buy fee');
                  setIsEthereumModalOpen(true);
                }}
                className='px-4 py-1 text-[18px] font-medium leading-[32px] text-[#3885E8]'
              >
                Update
              </button>
            </div>
            {/*Inner card*/}
            <h4 className='mb-3 text-[18px] leading-[32px] text-[#021229]'>
              Minimum buy amount
            </h4>
            <div className='mb-6 flex items-center justify-between border-b border-[#DCDAD7] pb-6'>
              <div className='flex gap-3'>
                <span className='text-[18px] leading-[32px] text-[#33322F]'>
                  USDT
                </span>
                <span className='text-[18px] font-medium leading-[32px] text-[#031734]'>
                  {ethereumData.buyAmount}
                </span>
              </div>
              <button
                onClick={() => {
                  onSelectEthereumData('Minimum buy amount');
                  setIsEthereumModalOpen(true);
                }}
                className='px-4 py-1 text-[18px] font-medium leading-[32px] text-[#3885E8]'
              >
                Update
              </button>
            </div>
            {/*Inner card*/}
            <h4 className='mb-3 text-[18px] leading-[32px] text-[#021229]'>
              Redeem fee
            </h4>
            <div className='mb-6 flex items-center justify-between border-b border-[#DCDAD7] pb-6'>
              <span className='text-[18px] font-medium leading-[32px] text-[#031734]'>
                {ethereumData.redeemFee}
              </span>
              <button
                onClick={() => {
                  onSelectEthereumData('Redeem fee');
                  setIsEthereumModalOpen(true);
                }}
                className='px-4 py-1 text-[18px] font-medium leading-[32px] text-[#3885E8]'
              >
                Update
              </button>
            </div>
            {/*Inner card*/}
            <div>
              <h4 className='mb-3 text-[18px] leading-[32px] text-[#021229]'>
                Minimum redeem amount
              </h4>
              <div className='flex items-center justify-between '>
                <div className='flex gap-3'>
                  <span className='text-[18px] leading-[32px] text-[#33322F]'>
                    USDT
                  </span>
                  <span className='text-[18px] font-medium leading-[32px] text-[#031734]'>
                    {ethereumData.redeemAmount}
                  </span>
                </div>
                <button
                  onClick={() => {
                    onSelectEthereumData('Minimum redeem amount');
                    setIsEthereumModalOpen(true);
                  }}
                  className='px-4 py-1 text-[18px] font-medium leading-[32px] text-[#3885E8]'
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>

        {/*Card*/}
        <div className='w-[519px] rounded-xl bg-white p-4'>
          <div className='mb-6 flex items-center justify-between'>
            <h3 className='text-[22px] leading-[32px] text-[#031734]'>
              Binance
            </h3>
            <ThreeDots />
          </div>
          <div className='px-3'>
            {/*Inner card*/}
            <h4 className='mb-3 text-[18px] leading-[32px] text-[#021229]'>
              Buy fee
            </h4>
            <div className='mb-6 flex items-center justify-between border-b border-[#DCDAD7] pb-6'>
              <span className='text-[18px] font-medium leading-[32px] text-[#031734]'>
                {binanceData.fee}
              </span>
              <button
                onClick={() => {
                  onSelectBinanceData('Buy fee');
                  setIsBinanceModalOpen(true);
                }}
                className='px-4 py-1 text-[18px] font-medium leading-[32px] text-[#3885E8]'
              >
                Update
              </button>
            </div>
            {/*Inner card*/}
            <h4 className='mb-3 text-[18px] leading-[32px] text-[#021229]'>
              Minimum buy amount
            </h4>
            <div className='mb-6 flex items-center justify-between border-b border-[#DCDAD7] pb-6'>
              <div className='flex gap-3'>
                <span className='text-[18px] leading-[32px] text-[#33322F]'>
                  USDT
                </span>
                <span className='text-[18px] font-medium leading-[32px] text-[#031734]'>
                  {binanceData.buyAmount}
                </span>
              </div>
              <button
                onClick={() => {
                  onSelectBinanceData('Minimum buy amount');
                  setIsBinanceModalOpen(true);
                }}
                className='px-4 py-1 text-[18px] font-medium leading-[32px] text-[#3885E8]'
              >
                Update
              </button>
            </div>
            {/*Inner card*/}
            <h4 className='mb-3 text-[18px] leading-[32px] text-[#021229]'>
              Redeem fee
            </h4>
            <div className='mb-6 flex items-center justify-between border-b border-[#DCDAD7] pb-6'>
              <span className='text-[18px] font-medium leading-[32px] text-[#031734]'>
                {binanceData.redeemFee}
              </span>
              <button
                onClick={() => {
                  onSelectBinanceData('Redeem fee');
                  setIsBinanceModalOpen(true);
                }}
                className='px-4 py-1 text-[18px] font-medium leading-[32px] text-[#3885E8]'
              >
                Update
              </button>
            </div>
            {/*Inner card*/}
            <div>
              <h4 className='mb-3 text-[18px] leading-[32px] text-[#021229]'>
                Minimum redeem amount
              </h4>
              <div className='flex items-center justify-between '>
                <div className='flex gap-3'>
                  <span className='text-[18px] leading-[32px] text-[#33322F]'>
                    USDT
                  </span>
                  <span className='text-[18px] font-medium leading-[32px] text-[#031734]'>
                    {binanceData.redeemAmount}
                  </span>
                </div>
                <button
                  onClick={() => {
                    onSelectBinanceData('Minimum redeem amount');
                    setIsBinanceModalOpen(true);
                  }}
                  className='px-4 py-1 text-[18px] font-medium leading-[32px] text-[#3885E8]'
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BaseModal
        showModal={isBinanceModalOpen}
        onClose={() => setIsBinanceModalOpen(false)}
        customExternalStyles={{ width: '454px', height: '398px' }}
        btnText={'Update'}
        btnAction={() => handleUpdateBinance(binanceData.title)}
      >
        <div className='flex flex-col items-center justify-center'>
          <h4 className='mb-[36px] max-w-[268px] text-center text-[28px] font-medium text-[#202534]'>
            Update {binanceData.title}
          </h4>
          <div className='mb-6 flex flex-col items-center justify-center'>
            <span className='mb-[6px] text-[14px] text-[#8A8884]'>Current</span>
            <span className='text-[18px] font-medium text-[#031734]'>
              {getValue(binanceData)}
            </span>
          </div>

          <div className='mb-6 flex flex-col items-center justify-center'>
            <span className='mb-[6px] text-[14px] text-[#8A8884]'>
              New {binanceData.title}
            </span>
            <input
              ref={binanceInputRef}
              className='h-[44px] w-[361px] rounded bg-[#F7F5F0] py-[6px] text-center text-sm font-medium text-[#031734]'
            />
          </div>
        </div>
      </BaseModal>
      <BaseModal
        showModal={isEthereumModalOpen}
        onClose={() => setIsEthereumModalOpen(false)}
        customExternalStyles={{ width: '454px', height: '398px' }}
        btnText={'Update'}
        btnAction={() => handleUpdateEthereum(ethereumData.title)}
      >
        <div className='flex flex-col items-center justify-center'>
          <h4 className='mb-[36px] max-w-[268px] text-center text-[28px] font-medium text-[#202534]'>
            Update {ethereumData.title}
          </h4>
          <div className='mb-6 flex flex-col items-center justify-center'>
            <span className='mb-[6px] text-[14px] text-[#8A8884]'>Current</span>
            <span className='text-[18px] font-medium text-[#031734]'>
              {getValue(ethereumData)}
            </span>
          </div>

          <div className='mb-6 flex flex-col items-center justify-center'>
            <span className='mb-[6px] text-[14px] text-[#8A8884]'>
              New {ethereumData.title}
            </span>
            <input
              ref={ethereumInputRef}
              className='h-[44px] w-[361px] rounded bg-[#F7F5F0] py-[6px] text-center text-sm font-medium text-[#031734]'
            />
          </div>
        </div>
      </BaseModal>
    </div>
  );
};

export default FeesAndParameters;
