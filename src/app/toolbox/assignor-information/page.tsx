
'use client';

import React from 'react';
import { DefaultHeader } from '@/components/DefaultHeader';
import { NavbarTools } from '@/components/NavbarTools';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function AssignorInformationPage() {
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex flex-col h-screen items-center mx-auto max-w-[500px]">
      <DefaultHeader />
      <div className="flex-grow relative w-full">
        {/* Page Title */}
        <span
          className="absolute font-bold text-3xl text-foreground"
          style={{
            top: '90px',
            left: '50%',
            transform: 'translateX(-50%)',
            textAlign: 'center', 
          }}
        >
          YLO
        </span>

        {/* Image Display */}
        <div className="flex justify-center relative">
            <Image
              src="/assets/ylo225.png" 
              alt="YLO Logo"
              data-ai-hint="ylo logo sports"
              width={225}
              height={225} 
              style={{
                position: 'absolute',
                top: '140px', 
                left: '50%',
                transform: 'translateX(-50%)',
                width: 'auto', 
                height: '225px',   
              }}
              priority
              onError={(e: any) => {
                e.currentTarget.onerror = null; 
                e.currentTarget.src = 'https://placehold.co/225x225.png'; 
              }}
            />
          </div>


        {/* Buttons Container - Styled like schedule page */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 w-full px-4"
          style={{ bottom: '90px' }}
        >
          <Button
            className="w-[225px] h-[80px] bg-white text-black border-2 border-[rgba(204,0,0,1)] hover:bg-gray-100 rounded-md shadow-[0_0_8px_4px_rgba(0,0,0,.5)] hover:scale-105 transition-transform relative font-bold flex items-center justify-center text-lg"
            onClick={() => handleNavigate('/toolbox/assignor-information/handbook')}
          >
            Assignor Handbook
          </Button>

          <Button
            className="w-[225px] h-[80px] bg-white text-black border-2 border-[rgba(204,0,0,1)] hover:bg-gray-100 rounded-md shadow-[0_0_8px_4px_rgba(0,0,0,.5)] hover:scale-105 transition-transform relative font-bold flex items-center justify-center text-lg"
            onClick={() => handleNavigate('/toolbox/assignor-information/roster-doc')}
          >
            Roster
          </Button>
        </div>
      </div>
      <NavbarTools />
    </div>
  );
}

