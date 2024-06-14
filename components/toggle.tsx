'use client';

import { IconButton, useColorMode, useTheme } from '@chakra-ui/react';
import { FaCircleHalfStroke } from 'react-icons/fa6';

export default function Toggle() {
  const { toggleColorMode } = useColorMode();
  const theme = useTheme();

  const {
    bsDark,
    bsDarkHover,
    bsDarkActive,
    bsLight,
    bsLightHover,
    bsLightActive,
  } = theme.shadows.neumorphism;

  return (
    <header>
      <IconButton
        isRound={true}
        // boxShadow="sm"
        p="3"
        onClick={toggleColorMode}
        size="s"
        fontSize={['20px', '25px']}
        variant="ghost"
        color="blue.500"
        aria-label="DarkLightMode"
        icon={<FaCircleHalfStroke />}
        _dark={{
          boxShadow: bsDark,
          '&:hover': {
            boxShadow: bsDarkHover,
          },
          '&:active': {
            boxShadow: bsDarkActive,
          },
        }}
        _light={{
          boxShadow: bsLight,
          '&:hover': {
            boxShadow: bsLightHover,
          },
          '&:active': {
            boxShadow: bsLightActive,
          },
        }}
      />
    </header>
  );
}
