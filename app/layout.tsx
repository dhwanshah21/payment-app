import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { PaysProvider } from './PaysContext';

// experimental_ppr only supported for Next 15
// export const experimental_ppr = true;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <PaysProvider>
          {children}
        </PaysProvider>

      </body>
    </html>
  );
}
