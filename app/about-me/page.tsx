'use client';

import {
  Container,
  Link,
  Spacer,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react';

import ProfilePicture from '../../components/profilePicture';

type HighlightProps = {
  children: React.ReactNode;
};

const Highlight = ({ children }: HighlightProps) => {
  const { colorMode } = useColorMode();

  return (
    <Text as="i" color={colorMode === 'dark' ? 'blue.100' : 'blue.500'}>
      {children}
    </Text>
  );
};

type HeaderProps = {
  children: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => (
  <Text fontSize={['2xl', '3xl']} as="b" style={{ fontStyle: 'bold' }}>
    {children}
  </Text>
);

export default function AboutMe() {
  return (
    <Container height="100%" paddingTop={[10, 20]} paddingBottom={[10, 20]}>
      <Stack alignItems="center" spacing={4}>
        <ProfilePicture />
        <Spacer />
        <Header>How it all started</Header>
        <Spacer />
        <Text>
          Everything started back in my childhood when my father introduced me
          to our first computer and games. I loved playing The Lion King, Prince
          of Persia and Aladdin on old MS-DOS and throughout my years I inclined
          to hardware a lot (I was building my own PCs, repairing components
          etc.). It stayed with me and until today, I am still an avid gamer
          interested in all kinds of technology.
        </Text>
        <Text>
          Fast forward to 2019 where I decided to follow this passion and
          started a course led by Andrei Neagoie to become a developer:{' '}
          <Highlight>Zero to Mastery - The Complete Web Developer</Highlight>.
        </Text>
        <Text>
          This course was designed for learning to be a fullstack developer, but
          I always had an inclination for everything visual (UI, art, etc.), so
          I decided to become a Frontend Developer.
        </Text>
        <Spacer />
        <Header>Becoming a Frontend Developer</Header>
        <Spacer />
        <Text>
          I started building my own{' '}
          <Link
            href="https://github.com/beatadetkova?tab=repositories"
            color="blue.300"
          >
            open-source projects
          </Link>{' '}
          - some of them to help my gaming community - and got my first job at
          Octomo and then at Carla, where I became{' '}
          <Highlight>Senior Frontend Developer</Highlight>.
        </Text>
        <Text>
          Aside from the tasks described in my{' '}
          <Link color="blue.300" href="/experience">
            Experience
          </Link>{' '}
          page, I was also mentoring our junior developers, helped shape our
          ways of working with my Engineering Manager Robin, and ensured the
          quality of our codebase by providing reviews and guidance to other
          developers. I also led the migration of our main application from
          Javascript to Typescript as well as multiple bigger refactoring
          projects.
        </Text>
        <Text>
          I also spearheaded the migration of our main application from
          Javascript to Typescript, handled multiple bigger scaling projects and
          help maintain and expand our design system.
        </Text>
        <Spacer />
        <Header>Product, honesty and creativity</Header>
        <Spacer />
        <Text>
          I love to be involved in product decisions and discussions, as I
          believe I have a good sense for it. I also believe in simple UX and
          making everything as easily accessible for users as possible.
        </Text>
        <Text>
          I am an honest person and I will always proactively speak about
          possible solutions and problems if needed. I am not afraid of
          criticisms and I love openly discussing about a wide variety of
          topics.
        </Text>
        <Text>
          There is much more to me than I could write there. If you are
          interested to know more, contact me and we can grab a (virtual) coffee
          together! &#9749;
        </Text>
      </Stack>
    </Container>
  );
}
