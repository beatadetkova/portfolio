'use client';

import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  useDisclosure,
  useTheme,
} from '@chakra-ui/react';

import Toggle from '../components/toggle';

type Props = {
  id?: string | null;
  href: string;
  children: React.ReactNode;
};

const links = [
  { title: 'About me', href: '/about-me' },
  { title: 'Skills', href: '/skills' },
  { title: 'Experience', href: '/experience' },
  { title: 'Contact me', href: '/contact-me' },
];

const NavLink = ({ id = null, href, children }: Props) => {
  return (
    <Link
      {...(id !== null && { id })}
      className="nav-link"
      px={2}
      py={1}
      rounded={'md'}
      // _hover={{
      //   textDecoration: 'none',
      //   bg: useColorModeValue('gray.200', 'gray.700'),
      // }}
      href={href}
    >
      {children}
    </Link>
  );
};

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const theme = useTheme();

  return (
    <>
      <Box
        px={4}
        position="sticky"
        top="0px"
        backgroundColor={theme.__cssMap['colors.chakra-body-bg'].value}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size="md"
            variant="ghost"
            colorScheme="blue"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'} justify="space-between">
            <NavLink id="nav-link-home" href="/">
              Home
            </NavLink>
            <HStack
              justify="space-between"
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {links.map(({ title, href }, key) => (
                <NavLink key={href} href={href}>
                  {title}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Toggle />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {links.map(({ title, href }, key) => (
                <NavLink key={href} href={href}>
                  {title}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
