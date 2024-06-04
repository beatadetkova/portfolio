'use client';

import { ColorModeScript } from '@chakra-ui/react';
import NavBar from '../components/navBar';
import { fonts } from './fonts';
import { Providers } from './providers';
import theme from './theme';

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={fonts.exo_2.variable}>
      <body
        id="body"
        style={{
          minHeight: '100vh',
          backgroundImage: 'url("/wave.svg")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom',
        }}
      >
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />

        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
