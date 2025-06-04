
'use client';

import React, { useState } from 'react'; 
import { DefaultHeader } from '@/components/DefaultHeader';
import { NavbarLeagues } from '@/components/NavbarLeagues';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Image from 'next/image'; 
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog'; 
import { X } from 'lucide-react'; 

export default function OceeParkPage() {
  const router = useRouter();
  const [isOceeDialogOpen, setIsOceeDialogOpen] = useState(false); 

  const buttons = [
    { name: 'Ocee Park Rules', path: '/leagues/oceepark/rules' },
    { name: 'Ocee Field Status', path: '/leagues/oceepark/fieldstatus' }, 
    { name: 'Ocee Parking', path: '#', action: () => setIsOceeDialogOpen(true) }, 
  ];

  const handleButtonClick = (path: string, action?: () => void) => { 
    if (action) {
      action();
    } else if (path !== '#') {
      router.push(path);
    } else {
      console.log('Placeholder link clicked');
    }
  };

  return (
    <div className="flex flex-col h-screen items-center mx-auto max-w-[500px]">
      <DefaultHeader />
      <div className="flex-grow relative w-full">
          <div className="flex justify-center relative mb-4">
            <span
              className="absolute font-bold text-3xl text-white whitespace-nowrap" 
              style={{
                  top: '90px',
                  left: '50%',
                  transform: 'translateX(-50%)',
               }}
            >
              Ocee Park
            </span>
            <Image
              src="/assets/ocee.png" 
              alt="Ocee Park Logo"
              data-ai-hint="ocee park logo baseball"
              width={225}
              height={225}
              style={{
                position: 'absolute',
                top: '130px', 
                left: '50%',
                transform: 'translateX(-50%)',
              }}
              priority
              onError={(e: any) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'https://placehold.co/225x225.png'; 
              }}
            />
          </div>

           <p
              className="absolute text-white font-semibold text-center"
              style={{
                bottom: '283px', 
                left: '50%',
                transform: 'translateX(-50%)',
                width: '90%' 
              }}
           >
            Code to the umpire's room - 7839
          </p>

          <div className="absolute bottom-[90px] left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 w-full px-4">
            {buttons.map((buttonInfo) => (
              <Button
                key={buttonInfo.name}
                className="w-[225px] h-[45px] bg-white text-black border-2 border-[rgba(204,0,0,1)] hover:bg-gray-100 rounded-md shadow-[0_0_8px_4px_rgba(0,0,0,.5)] hover:scale-105 transition-transform relative mb-[5px] font-bold"
                onClick={() => handleButtonClick(buttonInfo.path, buttonInfo.action)}
              >
                {buttonInfo.name}
              </Button>
            ))}
          </div>
      </div>
      <NavbarLeagues />

      <Dialog open={isOceeDialogOpen} onOpenChange={setIsOceeDialogOpen}>
        <DialogContent className="max-w-3xl w-auto p-0 bg-transparent border-none shadow-none">
           <DialogHeader>
             <DialogTitle className="sr-only">Ocee Park Parking Map</DialogTitle>
           </DialogHeader>
           <DialogClose asChild>
             <button
               className="absolute top-2 right-2 p-1 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors z-50"
               aria-label="Close"
             >
               <X className="h-6 w-6" />
             </button>
           </DialogClose>
          <div className="relative w-full h-auto"> 
            <Image
              src="/assets/ocee_parking2x.png" 
              alt="Ocee Park Parking Map"
              data-ai-hint="parking map aerial view baseball park"
              width={390} 
              height={390} 
              className="object-contain rounded-md"
              onError={(e: any) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'https://placehold.co/390x390.png'; 
              }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
