'use client';

import { Container, Divider, HStack, Stack, Text } from '@chakra-ui/react';

const skillList = [
  { title: 'Languages', skills: ['JavaScript', 'TypeScript'] },
  {
    title: 'Frontend',
    skills: ['Next', 'React', 'Redux', 'SCSS', 'Prettier/ESLint', 'HTML5'],
  },
  {
    title: 'Backend',
    skills: ['Node', 'Express.js'],
  },
  {
    title: 'API',
    skills: ['GraphQL', 'RestAPI design'],
  },
  {
    title: 'Software',
    skills: ['Git', 'npm, yarn, pnpm', 'Postman', 'VS Code', 'pgAdmin'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL'],
  },
  {
    title: 'DevOps',
    skills: ['Vercel', 'Heroku', 'GitHub Actions'],
  },
  {
    title: 'Platforms',
    skills: ['Linux', 'Windows'],
  },
];

const languages = [
  { name: 'English', level: 'Fluent' },
  { name: 'German', level: 'B2 Certificate' },
  { name: 'Slovak', level: 'Native' },
  { name: 'Czech', level: 'Native' },
  { name: 'French', level: 'A1' },
];

type SkillSectionProps = {
  title: string;
  skills: Array<string>;
};

const SkillSection = ({ title, skills }: SkillSectionProps) => {
  return (
    <HStack>
      <Text fontSize="l" as="b">
        {title}:{' '}
      </Text>
      <Text>{skills.join(', ')}</Text>
    </HStack>
  );
};

type LanguageSectionProps = {
  name: string;
  level: string;
};

const LanguageSection = ({ name, level }: LanguageSectionProps) => {
  return (
    <HStack>
      <Text fontSize="l" as="b">
        {name}:{' '}
      </Text>
      <Text>{level}</Text>
    </HStack>
  );
};

export default function Skills() {
  return (
    <Container height="100%" paddingTop={[10, 20]}>
      <Stack spacing={10}>
        <Stack spacing={2}>
          <Text fontSize="2xl" as="b">
            TECHNICAL SKILLS
          </Text>
          <Divider />
          {skillList.map(({ title, skills }) => (
            <SkillSection title={title} skills={skills} key={title} />
          ))}
        </Stack>
        <Stack spacing={2}>
          <Text fontSize="2xl" as="b">
            LANGUAGES
          </Text>
          <Divider />
          {languages.map(({ name, level }) => (
            <LanguageSection name={name} level={level} key={name} />
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}
