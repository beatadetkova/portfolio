'use client';

import {
  Box,
  Flex,
  HStack,
  ListItem,
  Spacer,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

export default function PreviousLife() {
  return (
    <Stack spacing={2} w="100%">
      <Flex>
        <HStack>
          <Text fontSize={['lg', '2xl']} as="b">
            Multiple companies
          </Text>
        </HStack>
        <Spacer />
        <Box alignSelf="center">
          <Text fontSize={['md', 'lg']} as="i">
            07/2010 – 01/2020
          </Text>
        </Box>
      </Flex>
      <Text fontSize={['l', 'xl']} as="b">
        SIEMENS, Novartis, ADP etc.
      </Text>
      <HStack>
        <Text fontSize={['l', 'xl']} as="b">
          Positions:{' '}
        </Text>
        <Text fontSize={['l', 'xl']}>
          Reporting Analyst, Accounting Specialist, HR
        </Text>
      </HStack>
      <HStack>
        <Text fontSize={['md', 'lg']} as="b">
          Locations:{' '}
        </Text>
        <Text fontSize={['md', 'lg']}>Czech Republic, Luxembourg, Germany</Text>
      </HStack>

      <Text fontSize={['sm', 'md']} as="i">
        Former non-IT career.
      </Text>
      <Text fontSize={['sm', 'md']} as="b">
        Skills acquired during this period:
      </Text>
      <UnorderedList>
        <ListItem fontSize={['sm', 'md']}>
          Communication: presented reports and proposals to my managers
        </ListItem>
        <ListItem fontSize={['sm', 'md']}>
          Working smart: came up with effective solutions
        </ListItem>
        <ListItem fontSize={['sm', 'md']}>
          Independent: learned many things on my own
        </ListItem>
        <ListItem fontSize={['sm', 'md']}>
          Collaborated with small and larger teams & multiple departments
        </ListItem>
        <ListItem fontSize={['sm', 'md']}>Mentored new hires</ListItem>
      </UnorderedList>
    </Stack>
  );
}
