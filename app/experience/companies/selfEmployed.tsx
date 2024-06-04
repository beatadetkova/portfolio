'use client';

import {
  Box,
  Flex,
  HStack,
  Link,
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
    colorScheme: 'blue',
    name: 'React',
  },
  {
    colorScheme: 'yellow',
    name: 'JS',
  },
  {
    colorScheme: 'yellow',
    name: 'Node',
  },
  {
    colorScheme: 'yellow',
    name: 'Express',
  },
  {
    name: 'Next',
  },
  { name: 'JWT' },
  {
    name: 'Vercel',
  },
  {
    colorScheme: 'purple',
    name: 'Heroku',
  },
  { name: 'GitHub Pages' },

  {
    colorScheme: 'purple',
    name: 'Redux',
  },
  {
    colorScheme: 'teal',
    name: 'PostgreSQL',
  },
  {
    colorScheme: 'green',
    name: 'MongoDB',
  },

  {
    colorScheme: 'cyan',
    name: 'Zod',
  },

  {
    colorScheme: 'pink',
    name: 'Sass',
  },
  {
    colorScheme: 'pink',
    name: 'CSS',
  },
  {
    colorScheme: 'pink',
    name: 'Prettier',
  },

  {
    colorScheme: 'purple',
    name: 'Figma',
  },
  {
    colorScheme: 'teal',
    name: 'Chakra UI',
  },
  {
    colorScheme: 'teal',
    name: 'Clarifai API',
  },
];

export default function SelfEmployed() {
  return (
    <Stack spacing={2}>
      <Flex>
        <HStack>
          <Text fontSize={['lg', '2xl']} as="b">
            Company:{' '}
          </Text>
          <Text fontSize={['lg', '2xl']}>Self-employed</Text>
        </HStack>
        <Spacer />
        <Box alignSelf="center">
          <Text fontSize={['md', 'lg']} as="i">
            10/2019 – now
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
        <Text fontSize={['md', 'lg']}>Remote</Text>
      </HStack>
      <Wrap spacing="8px">
        {technologyList.map(({ colorScheme, name }) => (
          <WrapItem key={name}>
            <MyBadge colorScheme={colorScheme}>{name}</MyBadge>{' '}
          </WrapItem>
        ))}
      </Wrap>
      <Text fontSize={['sm', 'md']}>
        I’m developing applications for my open-source projects and to support
        my gaming community. This includes design, frontend and backend work.
        Check out my{' '}
        <Link href="https://github.com/beatadetkova" color="blue.300">
          GitHub!
        </Link>
      </Text>
    </Stack>
  );
}
