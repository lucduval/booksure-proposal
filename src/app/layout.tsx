import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';

export const metadata: Metadata = {
  title: 'Booksure: Technology Roadmap & Investment Proposal',
  description: 'A comprehensive technology roadmap and investment proposal for the Booksure platform rebuild, outlining security hardening, financial gains, and platform modernisation.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
