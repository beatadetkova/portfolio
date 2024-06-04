'use client';

import { EmailIcon } from '@chakra-ui/icons';
import { FaLinkedin } from 'react-icons/fa6';

import { FaFileAlt, FaGithub } from 'react-icons/fa';

import {
  Button,
  Container,
  Flex,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react';

export default function Skills() {
  return (
    <Container height="100%" paddingTop={[10, 20]}>
      <VStack spacing={[6, 4]} alignItems="center">
        <Text fontSize="2xl" as="b">
          I'm always happy to connect!
        </Text>
        <Text fontSize="2xl" as="b">
          You can reach me out via:
        </Text>
        <Flex direction={['column', 'row']}>
          <Button
            as="a"
            leftIcon={<EmailIcon />}
            colorScheme="blue"
            variant="ghost"
            href="mailto:beata.detkova.jr@gmail.com"
          >
            Email
          </Button>
          <Spacer />
          <Button
            as="a"
            target="_blank"
            leftIcon={<FaGithub />}
            colorScheme="blue"
            variant="ghost"
            href="https://github.com/beatadetkova"
          >
            GitHub
          </Button>
          <Spacer />
          <Button
            as="a"
            target="_blank"
            leftIcon={<FaLinkedin />}
            colorScheme="blue"
            variant="ghost"
            href="https://www.linkedin.com/in/beata-detkova-a56822a0/"
          >
            LinkedIn
          </Button>
          <Spacer />
          <Button
            as="a"
            target="_blank"
            leftIcon={<FaFileAlt />}
            colorScheme="blue"
            variant="ghost"
            href="https://docs.google.com/document/d/1b69j2LtILDlUqLs-9dmSX55s4Nfo7iME/edit"
          >
            CV
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
}
