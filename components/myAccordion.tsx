'use client';

import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';

type MyAccordionProps = {
  myAccordionTitle: string;
  myAccordionText: string;
  myAccordionImpactText?: string;
};

export default function MyAccordion({
  myAccordionTitle,
  myAccordionText,
  myAccordionImpactText,
}: MyAccordionProps) {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton fontSize={['sm', 'md']}>
          <Box as="i" flex="1" textAlign="left">
            {myAccordionTitle}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} fontSize={['sm', 'md']}>
        {myAccordionText}
      </AccordionPanel>
      {myAccordionImpactText ? (
        <AccordionPanel pb={4} fontSize={['sm', 'md']}>
          <b>Impact:</b> {myAccordionImpactText}
        </AccordionPanel>
      ) : (
        <></>
      )}
    </AccordionItem>
  );
}
