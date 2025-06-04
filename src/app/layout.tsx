import type { Metadata } from 'next';
import { Geist, Geist_Mono, Cinzel_Decorative } from 'next/font/google'; // Added Cinzel_Decorative
import './globals.css';
import { AuthProvider } from '@/contexts/auth-context';
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const cinzelDecorative = Cinzel_Decorative({ // New font initialization
  subsets: ['latin'],
  weight: ['400', '700', '900'], // Import available weights
  variable: '--font-cinzel-decorative',
});

export const metadata: Metadata = {
  title: 'OfficiaX',
  description: 'Empowering Officials with Advanced Tools & AI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} ${cinzelDecorative.variable} antialiased bg-background text-foreground`}> {/* Added cinzelDecorative.variable */}
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
