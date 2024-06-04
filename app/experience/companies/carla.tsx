'use client';

import {
  Accordion,
  Box,
  Flex,
  HStack,
  Link,
  ListItem,
  Spacer,
  Stack,
  Text,
  UnorderedList,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

import MyAccordion from '@/components/myAccordion';
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
    name: 'Next',
  },
  {
    name: 'Vercel',
  },
  {
    colorScheme: 'teal',
    name: 'PostgreSQL',
  },
  {
    colorScheme: 'cyan',
    name: 'Zod',
  },
  {
    colorScheme: 'pink',
    name: 'Prettier',
  },
  {
    colorScheme: 'purple',
    name: 'Figma',
  },
];

export default function Carla() {
  return (
    <Stack spacing={2}>
      <Flex direction="row">
        <HStack>
          <Text fontSize={['lg', '2xl']} as="b">
            Company:{' '}
          </Text>
          <Text fontSize={['lg', '2xl']}>Carla</Text>
        </HStack>
        <Spacer />
        <Box alignSelf="center">
          <Text fontSize={['md', 'lg']} as="i">
            10/2021 – 06/2024
          </Text>
        </Box>
      </Flex>
      <HStack>
        <Text fontSize={['l', 'xl']} as="b">
          Position:{' '}
        </Text>
        <Text fontSize={['l', 'xl']}>Frontend Developer</Text>
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
            <MyBadge colorScheme={colorScheme}>{name}</MyBadge>
          </WrapItem>
        ))}
      </Wrap>
      <Text fontSize={['sm', 'md']}>
        I started as one of the first developers at Carla, and became a pillar
        of our Storefront team, focusing on Carla's customer facing web app{' '}
        <Link color="blue.300" href="https://www.carla.se/" target="_blank">
          https://www.carla.se/
        </Link>
        .
      </Text>
      <Text fontSize={['sm', 'md']} as="b">
        Some of my projects were:
      </Text>

      <Accordion defaultIndex={[7]} allowMultiple>
        <MyAccordion
          myAccordionTitle="Automation of our online car valuation process"
          myAccordionText="Backed up by Sweden’s car.info API, I provided users with
            automated car valuations."
          myAccordionImpactText="-83 combined monthly hours of internal processing
            time (sales and purchasing)."
        />
        <MyAccordion
          myAccordionTitle="Stock Alerts"
          myAccordionText="Added the ability for users to subscribe to a given search on our website to receive daily updates when a car becomes available. Handled work on both Frontend and Backend side."
        />
        <MyAccordion
          myAccordionTitle="Category Pages"
          myAccordionText="Statically generated pages that show cars for specific categories (for example all Tesla cars in stock)."
          myAccordionImpactText="boosted our SEO and incoming traffic
          "
        />
        <MyAccordion
          myAccordionTitle="Magasinet (internal blog):"
          myAccordionText="With this project our Content and Marketing team was able to publish articles under categories using Contentful (https://www.carla.se/magasinet)"
          myAccordionImpactText="boosted our SEO and incoming traffic."
        />
        <MyAccordion
          myAccordionTitle="Private leasing page"
          myAccordionText="Enabling Carla to lease cars to its customers"
        />
        <MyAccordion
          myAccordionTitle="Car Listing Page filtering:"
          myAccordionText="Implemented an in-depth filtering capability using Algolia for our users to search through our listings"
        />
        <MyAccordion
          myAccordionTitle="Checkout & Pre-Checkout:"
          myAccordionText="Extensive work on our checkout (and pre-checkout) pages allowing users to buy cars with Carla in a smooth and user-friendly experience. These pages are directly connected to our back office application to automate the checkout/delivery process."
          myAccordionImpactText="multiple large scale projects (financing calculator performance improvement, financing automation) leading to net increase in lead conversion."
        />
      </Accordion>

      <Text fontSize={['sm', 'md']} as="b">
        Other achievements:
      </Text>
      <UnorderedList>
        <ListItem fontSize={['sm', 'md']}>
          Implemented end-to-end (E2E) testing from the ground up using Cypress
        </ListItem>
        <ListItem fontSize={['sm', 'md']}>
          Supported my engineering manager in setting up best engineering
          practices and ways of working
        </ListItem>
        <ListItem fontSize={['sm', 'md']}>
          Worked closely with our product managers and designers to define the
          best product and design for our solutions. Contributed significantly
          in product & design decisions and improvements
        </ListItem>
        <ListItem fontSize={['sm', 'md']}>
          Mentored and supported our more junior team members (coaching, code
          review, etc.)
        </ListItem>
      </UnorderedList>
    </Stack>
  );
}
