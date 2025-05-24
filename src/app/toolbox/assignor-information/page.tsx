
'use client';

import React from 'react';
import { DefaultHeader } from '@/components/DefaultHeader';
import { NavbarTools } from '@/components/NavbarTools';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

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
            textAlign: 'center', // Ensure text is centered if it wraps
          }}
        >
          Assignor Information
        </span>

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
