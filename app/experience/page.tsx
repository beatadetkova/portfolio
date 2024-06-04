'use client';

import { Container, VStack } from '@chakra-ui/react';

import Carla from './companies/carla';
import Octomo from './companies/octomo';
import PreviousLife from './companies/previousLife';
import SelfEmployed from './companies/selfEmployed';

export default function Skills() {
  return (
    <Container height="100%" paddingTop={[10, 20]} paddingBottom={[10, 20]}>
      <VStack spacing={[7, 10]}>
        <Carla />
        <Octomo />
        <SelfEmployed />
        <PreviousLife />
      </VStack>
    </Container>
  );
}
