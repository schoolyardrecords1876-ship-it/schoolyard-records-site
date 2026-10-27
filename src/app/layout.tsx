import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Schoolyard Records — Independent by Nature',
  description: 'A student-driven home for artists, creators, and collegiate culture. Rooted in Prairie View, Texas.',
  metadataBase: new URL('https://example.com'), // Replace after selecting the official domain.
  openGraph: {
    title: 'Schoolyard Records',
    description: 'Built on campus. Made for what’s next.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
