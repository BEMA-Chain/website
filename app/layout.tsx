import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ReactNode } from 'react';
import '../styles/globals.scss';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
