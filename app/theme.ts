'use client';

import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const dark = 'red';
const light = '#f0f0f0';

const bsDark = '-5px -5px 10px #292828, 5px 5px 10px #171717';

const bsDarkInset = 'inset -5px -5px 10px #292828, inset 5px 5px 10px #171717';
const bsDarkHover = '-2.5px -2.5px 5px #292828, 2.5px 2.5px 5px #171717';
const bsDarkActive = 'inset -5px -5px 10px #292828, inset 5px 5px 10px #171717';

const bsLight = '-4px -4px 16px #ffffff, 4px 4px 16px #bcbcbc';
const bsLightInset = 'inset -2.5px -2.5px 10px #ffffff';
const bsLightHover = '-2px -2px 8px #ffffff, 2px 2px 8px #bcbcbc';
const bsLightActive = 'inset -4px -4px 8px #ffffff, inset 4px 4px 8px #bcbcbc';

let initialColorMode = 'light';

if (
  typeof window !== 'undefined' &&
  typeof window.localStorage !== 'undefined'
) {
  initialColorMode =
    window.localStorage.getItem('chakra-ui-color-mode') ?? initialColorMode;
}

const config = {
  initialColorMode,
  useSystemColorMode: false,
};

const styles = {
  global: (props: any) => ({
    '#nav-link-home': {
      color: mode('blue.700', 'blue.200')(props),
    },
    '.nav-link': {
      textDecoration: 'none !important',
    },
    '.nav-link:hover': {
      bgColor: mode('gray.200', 'gray.700')(props),
    },
  }),
};

const theme = extendTheme({
  config,
  styles,
  fonts: {
    heading: 'var(--font-exo_2)',
    body: 'var(--font-exo_2)',
  },

  colors: {
    brand: {
      dark,
      light,
    },
  },
  shadows: {
    neumorphism: {
      bsDark,
      bsDarkInset,
      bsDarkHover,
      bsDarkActive,
      bsLight,
      bsLightInset,
      bsLightHover,
      bsLightActive,
    },
  },
});

export default theme;
