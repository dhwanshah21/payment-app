import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

// experimental_ppr only supported for Next 15
// export const experimental_ppr = true;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
