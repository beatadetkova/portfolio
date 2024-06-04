'use client';

import { ChakraProvider, ColorMode } from '@chakra-ui/react';
import { createContext } from 'react';

import theme from './theme';

export const ModeContext = createContext<ColorMode>('light');

type Props = {
  children: React.ReactNode;
};

export function Providers({ children }: Props) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
