'use client';

import {
  Button,
  Container,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';

import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { TbClick } from 'react-icons/tb';

import styles from './styles/waving.module.css';

export default function MainPage() {
  return (
    <Container height="100%" paddingTop={[50, 20]} paddingBottom={[10, 20]}>
      <Stack spacing={20}>
        <Stack alignItems="center">
          <HStack alignItems="center" spacing={2}>
            <Text
              className={styles.waving}
              fontSize={['3xl', '5xl']}
              style={{ cursor: 'default' }}
            >
              &#128075;
            </Text>
            <Text fontSize={['3xl', '5xl']} as="b">
              Oh hello there!
            </Text>
          </HStack>
          <Text fontSize={['2xl', '4xl']} as="b">
            My name is Beata Detkova.
          </Text>
          <Text fontSize={['2xl', '4xl']} as="b" color="blue.300">
            I'm a Frontend Engineer
          </Text>
          <Link
            href="https://blog.pragmaticengineer.com/the-product-minded-engineer/"
            target="_blank"
            variant="ghost"
          >
            <HStack>
              <Text fontSize={['2xl', '4xl']}>with deep product-mind</Text>
              <Icon
                as={TbClick}
                alignSelf={'flex-end'}
                boxSize={6}
                color="blue.500"
              />
            </HStack>
          </Link>
        </Stack>
        <Stack direction={['column']}>
          <Button
            as="a"
            target="_blank"
            leftIcon={<FaLinkedin />}
            size={['sm', 'md']}
            colorScheme="blue"
            variant="link"
            href="https://www.linkedin.com/in/beata-detkova-a56822a0/"
          >
            Let's connect!
          </Button>

          <Button
            as="a"
            target="_blank"
            leftIcon={<FaGithub />}
            size={['sm', 'md']}
            colorScheme="blue"
            variant="link"
            href="https://github.com/beatadetkova"
          >
            Check out my work
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
