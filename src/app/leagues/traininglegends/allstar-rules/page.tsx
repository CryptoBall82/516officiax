
'use client';

import React from 'react';
import { DefaultHeader } from '@/components/DefaultHeader';
import { NavbarLeagues } from '@/components/NavbarLeagues';

export default function TlAllstarRulesPage() {
  // Use the /preview URL for Google Drive for better embed compatibility
  const documentUrl = "https://docs.google.com/document/d/13w_THauioh5focFLw3-XLg2axiMX-Ex4/view";

  return (
    <div className="flex flex-col h-screen items-center mx-auto max-w-[500px]">
      <DefaultHeader />
      {/* Add padding top and bottom to account for fixed header/navbar */}
      <div className="flex-grow relative w-full pt-[90px] pb-[90px] flex items-center justify-center px-4"> {/* Adjust padding as needed */}
        <iframe
          src={documentUrl}
          style={{ width: '100%', height: '100%' }}
          frameBorder="0" // Use frameBorder instead of frameborder
          allowFullScreen // Add allowFullScreen attribute
          title="TL All-star Rules Document" // Add title for accessibility
        >
          Loading TL All-star Rules...
        </iframe>
      </div>
      <NavbarLeagues />
    </div>
  );
}
