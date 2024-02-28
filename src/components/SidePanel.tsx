'use client';
import HedgeIcon from '@/icons/HedgeIcon';
import CompassIcon from '@/icons/CompassIcon';
import MintingIcon from '@/icons/MintingIcon';
import BurningIcon from '@/icons/Burningicon';
import FeesIcon from '@/icons/FeesIcon';
import PauseIcon from '@/icons/PauseIcon';
import BlacklistIcon from '@/icons/BlacklistIcon';
import DashboardIcon from '@/icons/DashboardIcon';
import OperationsIcon from '@/icons/OperationsIcon';
import DisconnectIcon from '@/icons/DisconnectIcon';
import SettingsIcon from '@/icons/SettingsIcon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const topNav = [
  { Icon: DashboardIcon, title: 'Reserves', href: '/reserves' },
  {
    Icon: CompassIcon,
    title: 'Escrow & Distribution',
    href: '/escrow-and-distribution',
  },
  {
    Icon: OperationsIcon,
    title: 'Operations wallets',
    href: '/operations-wallets',
  },
  { Icon: MintingIcon, title: 'Minting', href: '/minting' },
  { Icon: BurningIcon, title: 'Burning', href: '/burning' },
  {
    Icon: FeesIcon,
    title: 'Fees and parameters',
    href: '/fees-and-parameters',
  },
  {
    Icon: PauseIcon,
    title: 'Pause - Unpause',
    href: '/pause-unpause',
  },
  {
    Icon: BlacklistIcon,
    title: 'Blacklist',
    href: '/blacklist',
  },
];

const bottomNav = [
  { Icon: SettingsIcon, title: 'Settings', href: '/settings' },
  { Icon: DisconnectIcon, title: 'Disconnect', href: '/' },
];

const SidePanel = () => {
  const pathname = usePathname();
  return (
    <div className='min-w-[264px] border-r border-[#D6D4D0] bg-[#FFF]'>
      <div className='sticky top-0'>
        <div className=' flex items-center justify-center pb-[33px] pt-[42px]'>
          <HedgeIcon />
        </div>
        <div className='flex h-[calc(100vh_-_112px)] flex-col  justify-between'>
          <div>
            {topNav.map(({ Icon, title, href }, index) => (
              <Link
                key={index}
                href={href}
                className={`${href === pathname && 'bg-[#3885E8] text-[#FFF]'} group flex cursor-pointer items-center gap-2 py-4 pl-6 text-lg transition-colors hover:bg-[#3885E8] hover:text-[#FFF]`}
              >
                <Icon
                  className={`group-hover:fill-[#FFF] ${href === pathname && 'fill-[#FFF]'}`}
                />
                <span>{title}</span>
              </Link>
            ))}
          </div>
          <div className='pb-12'>
            {bottomNav.map(({ Icon, title, href }, index) => (
              <Link
                key={index}
                href={href}
                className='group flex cursor-pointer items-center gap-2 py-4 pl-6 text-lg transition-colors hover:bg-[#3885E8] hover:text-[#FFF]'
              >
                <Icon className='group-hover:fill-[#FFF]' />
                <span>{title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
