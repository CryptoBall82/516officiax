
'use client';

import React from 'react';
import { DefaultHeader } from '@/components/DefaultHeader';
import { NavbarLeagues } from '@/components/NavbarLeagues';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
// Removed: import tlImage from '../../../../public/assets/training_legends175.png';

export default function TrainingLegendsPage() {
  const router = useRouter();

  const handleButtonClick = (ruleType: string) => {
    console.log(`${ruleType} button clicked`);
     if (ruleType === 'All-star') {
       router.push('/leagues/traininglegends/allstar-rules'); 
     } else if (ruleType === 'Travel') {
       router.push('/leagues/traininglegends/travel-rules'); 
     }
  };

  return (
    <div className="flex flex-col h-screen items-center mx-auto max-w-[500px]">
      <DefaultHeader />
      <div className="flex-grow relative w-full">
          <div className="flex justify-center relative mb-4">
            <span
              className="absolute font-bold text-2xl text-white whitespace-nowrap"
              style={{
                  top: '90px',
                  left: '50%',
                  transform: 'translateX(-50%)',
               }}
            >
              Training Legends
            </span>
            <Image
              src="/assets/training_legends175.png" // Corrected path
              alt="Training Legends Logo"
              data-ai-hint="training legends logo baseball"
              width={295} 
              height={175} 
              style={{
                position: 'absolute',
                top: '130px', 
                left: '50%',
                transform: 'translateX(-50%)',
              }}
              priority
              onError={(e: any) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'https://placehold.co/295x175.png'; 
              }}
            />
          </div>

          <div className="absolute bottom-[90px] left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-6 w-full px-4">
            <Button
                className="w-[225px] h-[80px] bg-white text-black border-2 border-[rgba(204,0,0,1)] hover:bg-gray-100 rounded-md shadow-[0_0_8px_4px_rgba(0,0,0,.5)] hover:scale-105 transition-transform relative font-bold flex items-center justify-center text-lg"
                onClick={() => handleButtonClick('All-star')}
            >
                TL All-star Rules
            </Button>

            <Button
                className="w-[225px] h-[80px] bg-white text-black border-2 border-[rgba(204,0,0,1)] hover:bg-gray-100 rounded-md shadow-[0_0_8px_4px_rgba(0,0,0,.5)] hover:scale-105 transition-transform relative font-bold flex items-center justify-center text-lg"
                onClick={() => handleButtonClick('Travel')}
            >
                TL Travel Rules
            </Button>
          </div>
      </div>
      <NavbarLeagues />
    </div>
  );
}
