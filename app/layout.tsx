import type { Metadata } from 'next';
import { poppins } from '@/styles/fonts';
import '@/styles/globals.css';
import Header from '@/layouts/Header';

export const metadata: Metadata = {
  title: 'SaaS Startup Template',
  description:
    'SaaS Startup Template built with Next.js, Tailwind CSS, TypeScript, Framer Motion, and more.',

  // TEMP: Replace with acutal authors details
  authors: [{ name: 'Creator Name', url: 'https://creator-website.com' }],
  // TEMP: Replace with actual creator name
  creator: 'Creator Name',
  // TEMP: Replace with actual keywords of your website
  keywords: [
    'saas',
    'startup',
    'template',
    'next.js',
    'tailwind css',
    'typescript',
    'motion',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Header />
        <main>
          <div className="container mx-auto">{children}</div>
        </main>
      </body>
    </html>
  );
}
