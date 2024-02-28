'use client';
import AuthorisedIcon from '@/icons/AuthorisedIcon';
import BankValueIcon from '@/icons/BankValueIcon';
import ChartPieYellowIcon from '@/icons/ChartPieYellowIcon';
import DistributionWalletsIcon from '@/icons/DistributionWalletsIcon';
import EscrowWalletsIcon from '@/icons/EscrowWalletsIcon';
import FloorPriceIcon from '@/icons/FloorPriceIcon';
import PortfolioValueIcon from '@/icons/PortfolioValueIcon';
import TotalReserveIcon from '@/icons/TotalReserveIcon';
import {
  CategoryScale,
  ChartData,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

const labels = ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'];
const leftValues = [50, 5000, 10000, 15000, 20000, 25000, 30000];

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend
);
const options: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      display: true,
      // border: {
      //   color: 'red',
      // },
    },
    y: {
      display: true,
      // border: {
      //   color: 'red',
      // },
      ticks: {
        callback: function (value, index, ticks) {
          return '$' + value + 'M';
        },
      },
    },
  },
};

const data: ChartData<'line'> = {
  labels,
  datasets: [
    {
      data: labels.map((_, index) => leftValues[index]),
      borderColor: '#01B255',
      backgroundColor: '#01B255',
    },
  ],
};

export default function Home() {
  return (
    <main className='pl-[25px] pr-[24px] pt-[19px]'>
      <div className='mb-[32px] flex h-[136px] w-full items-center gap-6 rounded-lg bg-white px-[24px]'>
        <div className='flex w-1/3 items-center gap-6'>
          <div className='flex h-[88px] w-[88px] items-center justify-center rounded-lg bg-[#3885E8]/10'>
            <TotalReserveIcon />
          </div>
          <div>
            <p className='text-[18px] font-medium leading-8 text-[#1F1E1C]'>
              Total Reserve value
            </p>
            <div className='flex items-end gap-2'>
              <p className='text-[28px] font-semibold leading-[40px]'>
                $381,318.81
              </p>
              <span className='text-[16px] font-medium leading-[24px] text-[#01B255]'>
                +12%
              </span>
            </div>
            <p className='text-[13px] leading-[16px] text-[#1F1E1C]/50'>
              Compared to 7,52% previous month
            </p>
          </div>
        </div>

        <div className='flex w-1/3 items-center gap-6'>
          <div className='flex h-[88px] w-[88px] items-center justify-center rounded-lg bg-[#3885E8]/10'>
            <AuthorisedIcon />
          </div>
          <div>
            <p className='text-[18px] font-medium leading-8 text-[#1F1E1C]'>
              Authorised tokens in circulation
            </p>
            <div className='flex items-end gap-2'>
              <p className='text-[28px] font-semibold leading-[40px]'>
                317,765.675
              </p>
              <span className='text-[16px] font-medium leading-[24px] text-[#01B255]'>
                +12%
              </span>
            </div>
            <p className='text-[13px] leading-[16px] text-[#1F1E1C]/50'>
              Compared to 369 previous month
            </p>
          </div>
        </div>

        <div className='flex w-1/3 items-center gap-6'>
          <div className='flex h-[88px] w-[88px] items-center justify-center rounded-lg bg-[#3885E8]/10'>
            <FloorPriceIcon />
          </div>
          <div>
            <p className='text-[18px] font-medium leading-8 text-[#1F1E1C]'>
              Floor price
            </p>
            <div className='flex items-end gap-2'>
              <p className='text-[28px] font-semibold leading-[40px]'>$1.20</p>
              <span className='text-[16px] font-medium leading-[24px] text-[#E85343]'>
                +8%
              </span>
            </div>
            <p className='text-[13px] leading-[16px] text-[#1F1E1C]/50'>
              Compared to 81% previous month
            </p>
          </div>
        </div>
      </div>
      <div className='flex justify-between gap-8'>
        <div className='h-[414px] w-6/12 rounded-lg bg-white px-6 py-4'>
          <h2 className='mb-2 text-[18px] leading-[32px] text-[#1F1E1C]'>
            Compass Monthly total Reserve value
          </h2>
          <div className='flex items-center justify-between py-2'>
            <h2 className='text-4xl font-semibold text-[#1F1E1C]'>67.4%</h2>
            <div className='flex flex-col items-end'>
              <h2 className='text-md text-[#01B255]'>+20,000M (107%)</h2>
              <text className='text-sm text-gray-400'>Since Inception</text>
            </div>
          </div>
          <div className='flex h-72 justify-center'>
            <Line options={options} data={data} />
          </div>
        </div>

        <div className='h-[414px] w-6/12 rounded-lg bg-white px-6 py-4'>
          <h2 className='mb-2 text-[#1F1E1C]'>Graphic</h2>
          <div className='flex items-center gap-[80px] pt-6'>
            <ChartPieYellowIcon className='shrink-0' />
            <div className='flex flex-col gap-[6px]'>
              <div className='flex items-center gap-[6.5px]'>
                <div className='h-[11px] w-[11px] rounded-[2px] bg-[#FFA812]' />
                <p className='text-[16px] leading-6 text-[#1F1E1C]'>
                  Portfolio Value
                </p>
              </div>
              <div className='flex items-center gap-[6.5px]'>
                <div className='h-[11px] w-[11px] rounded-[2px] bg-[#3C84F0]' />
                <p className='text-[16px] leading-6 text-[#1F1E1C]'>
                  Distribution wallets Value
                </p>
              </div>
              <div className='flex items-center gap-[6.5px]'>
                <div className='h-[11px] w-[11px] rounded-[2px] bg-[#E8C1A0]' />
                <p className='text-[16px] leading-6 text-[#1F1E1C]'>
                  Bank Value
                </p>
              </div>
              <div className='flex items-center gap-[6.5px]'>
                <div className='h-[11px] w-[11px] rounded-[2px] bg-[#FF7500]' />
                <p className='text-[16px] leading-6 text-[#1F1E1C]'>
                  Escrow wallets Value
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className='my-[26px] font-[18px] font-medium leading-8'>
        HEDGE Compass assets status
      </h3>

      <div className='flex justify-between gap-8'>
        <div className='flex h-[136px] w-6/12 gap-6 rounded-lg bg-white px-6 py-4'>
          <div className='flex w-6/12 items-center gap-6'>
            <div className='flex h-[88px] w-[88px] items-center justify-center rounded-lg bg-[#3885E8]/10'>
              <DistributionWalletsIcon />
            </div>
            <div>
              <p className='text-[18px] font-medium leading-8 text-[#1F1E1C]'>
                Distribution wallets value
              </p>
              <p className='text-[28px] font-semibold leading-[40px]'>
                $30,056.23
              </p>
            </div>
          </div>
          <div className='flex w-6/12 items-center gap-6'>
            <div className='flex h-[88px] w-[88px] items-center justify-center rounded-lg bg-[#3885E8]/10'>
              <EscrowWalletsIcon />
            </div>
            <div>
              <p className='text-[18px] font-medium leading-8 text-[#1F1E1C]'>
                Escrow wallets value
              </p>
              <p className='text-[28px] font-semibold leading-[40px]'>
                $20,473.27
              </p>
            </div>
          </div>
        </div>

        <div className='flex h-[136px] w-6/12 gap-6 rounded-lg bg-white px-6 py-4'>
          <div className='flex w-6/12 items-center gap-6'>
            <div className='flex h-[88px] w-[88px] items-center justify-center rounded-lg bg-[#3885E8]/10'>
              <PortfolioValueIcon />
            </div>
            <div>
              <p className='text-[18px] font-medium leading-8 text-[#1F1E1C]'>
                Portfolio value
              </p>
              <p className='text-[28px] font-semibold leading-[40px]'>
                $300,000
              </p>
            </div>
          </div>
          <div className='flex w-6/12 items-center gap-6'>
            <div className='flex h-[88px] w-[88px] items-center justify-center rounded-lg bg-[#3885E8]/10'>
              <BankValueIcon />
            </div>
            <div>
              <p className='text-[18px] font-medium leading-8 text-[#1F1E1C]'>
                Bank Value
              </p>
              <p className='text-[28px] font-semibold leading-[40px]'>
                $30,789.31
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
