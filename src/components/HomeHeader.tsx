
'use client';

import React from 'react';
import Image from 'next/image'; 
import { Menu } from 'lucide-react'; 
// Removed: import oxImage from '../../public/assets/OX lett white175F.png';

const HomeHeader: React.FC = () => {
  return (
    <header
      className="fixed top-0 w-full h-[75px] bg-background border-b-[3px] border-[rgba(204,0,0,1)] shadow-[0_4px_10px_4px_rgba(187,187,187,0)] z-10 flex items-center justify-between"
    >
      <div className="flex items-center w-[60px]">
      </div>

      <div className="flex items-center justify-center flex-grow">
        <Image
          src="/assets/OX lett white175F.png" // Corrected path
          alt="OX Logo"
          data-ai-hint="logo company"
          height={50}
          width={175}
          style={{
            height: '50px',
            width: 'auto',
          }}
          priority
        />
      </div>

      <div className="flex items-center justify-end w-[60px] pr-[15px]">
        <Menu className="text-white cursor-pointer" size={36} />
      </div>
    </header>
  );
};

export { HomeHeader };
