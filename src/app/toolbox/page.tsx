// src/app/toolbox/page.tsx
"use client";

import React from 'react';
import { DefaultHeader } from '@/components/DefaultHeader';
import { NavbarTools } from '@/components/NavbarTools';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import toolboxImage from '../../../public/assets/tool225.png';
import coinTossImage from '../../../public/assets/coin-toss3.png'; // Local image for coin toss
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';


interface ToolButtonInfo {
  name: string;
  path: string;
  icon: React.ReactNode; // Changed to React.ReactNode to accommodate MUI icons and Image components
}

export default function ToolboxPage() {
  const router = useRouter();

  const toolButtons: ToolButtonInfo[] = [
    { name: 'Weather', path: '/toolbox/weather', icon: <ThunderstormOutlinedIcon sx={{ fontSize: '36px', color: 'black' }} /> },
    { name: 'Coin Toss', path: '/toolbox/cointoss', icon: <Image src={coinTossImage} alt="Coin Toss" width={36} height={36} data-ai-hint="coin game" /> },
    { name: 'Umpire Classroom', path: '/toolbox/umpireclassroom', icon: <SchoolOutlinedIcon sx={{ fontSize: '36px', color: 'black' }} /> },
    { name: 'Assignor Info', path: '/toolbox/assignor-information', icon: <BusinessCenterOutlinedIcon sx={{ fontSize: '36px', color: 'black' }} /> },
  ];

  const handleToolClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex flex-col h-screen items-center mx-auto max-w-[500px] bg-background">
      <DefaultHeader />
      <div className="flex-grow relative w-full">
        {/* Page Title */}
        <span
          className="absolute font-bold text-3xl text-white"
          style={{
            top: '90px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          Toolbox
        </span>

        {/* Image Display */}
        <Image
          src={toolboxImage}
          alt="Toolbox Icon"
          data-ai-hint="tools wrench hammer"
          width={225}
          height={129}
          style={{
            position: 'absolute',
            top: '130px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'auto',
            height: '129px',
          }}
          priority
          onError={(e: any) => {
            e.currentTarget.onerror = null; 
            e.currentTarget.src = 'https://placehold.co/225x129.png';
          }}
        />

        {/* Buttons Container - Styled like home page */}
        <div className="absolute bottom-[90px] left-0 right-0 flex justify-center">
          <div className="grid grid-cols-2 gap-y-[25px] gap-x-[25px] p-4">
            {toolButtons.map((buttonInfo) => {
              return (
                <button
                  key={buttonInfo.name}
                  onClick={() => handleToolClick(buttonInfo.path)}
                  className="
                    w-[100px] h-[100px]
                    bg-white text-black
                    border-2 border-primary
                    shadow-[0_0_8px_4px_rgba(0,0,0,.5)] rounded-md
                    hover:scale-105 hover:bg-gray-50 transition-transform relative
                    flex flex-col items-center justify-center p-1
                  "
                >
                  <div className="flex items-center justify-center h-9 w-9 mb-1">
                    {buttonInfo.icon}
                  </div>
                  <span
                    className={`text-black font-semibold text-center w-full px-1 truncate absolute bottom-1 ${buttonInfo.name === 'Weather' || buttonInfo.name === 'Coin Toss' ? 'text-base' : 'text-sm'}`}
                  >
                    {buttonInfo.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <NavbarTools />
    </div>
  );
}
