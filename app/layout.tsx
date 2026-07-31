import './globals.css';
import { DM_Sans, Noto_Serif } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/sonner';
import QueryProvider from '@/providers/QueryProvider';

const notoSerifHeading = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-heading',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        'h-full antialiased',
        'font-sans',
        dmSans.variable,
        notoSerifHeading.variable
      )}
    >
      <body className="min-h-full flex flex-col">
        <QueryProvider>
          <Toaster position="top-right" richColors />
          {/* <Navbar /> */}

          {children}

          {/* Footer */}
        </QueryProvider>
      </body>
    </html>
  );
}
