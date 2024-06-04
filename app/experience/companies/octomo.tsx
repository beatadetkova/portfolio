'use client';

import {
  Box,
  Flex,
  HStack,
  Spacer,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

import MyBadge from '@/components/myBadge';

const technologyList = [
  {
    colorScheme: 'blue',
    name: 'TS',
  },
  {
    colorScheme: 'yellow',
    name: 'JS',
  },
  {
    colorScheme: 'teal',
    name: 'PostgreSQL',
  },
  {
    colorScheme: 'pink',
    name: 'Prettier',
  },
];

export default function Octomo() {
  return (
    <Stack spacing={2}>
      <Flex>
        <HStack>
          <Text fontSize={['lg', '2xl']} as="b">
            Company:{' '}
          </Text>
          <Text fontSize={['lg', '2xl']}>Octomo</Text>
        </HStack>
        <Spacer />
        <Box alignSelf="center">
          <Text fontSize={['md', 'lg']} as="i">
            12/2020 – 06/2021
          </Text>
        </Box>
      </Flex>
      <HStack>
        <Text fontSize={['l', 'xl']} as="b">
          Position:{' '}
        </Text>
        <Text fontSize={['l', 'xl']}>Fullstack Web Developer</Text>
      </HStack>
      <HStack>
        <Text fontSize={['md', 'lg']} as="b">
          Location:{' '}
        </Text>
        <Text fontSize={['md', 'lg']}>Berlin (remote)</Text>
      </HStack>
      <Wrap spacing="8px">
        {technologyList.map(({ colorScheme, name }) => (
          <WrapItem key={name}>
            <MyBadge colorScheme={colorScheme}>{name}</MyBadge>
          </WrapItem>
        ))}
      </Wrap>
      <Text fontSize={['sm', 'md']}>
        I worked on a learning platform but sadly the company ceased to exist
        (both Frontend and Backend).
      </Text>
    </Stack>
  );
}
