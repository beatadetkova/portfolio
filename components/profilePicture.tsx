import { Box, Image } from '@chakra-ui/react';

export default function ProfilePicture() {
  return (
    <Box
      transition="all 1s ease-out"
      _hover={{
        transform: 'translate(-20px, -20px) ',
        transition: 'all 1s ease-out',
      }}
      borderRadius="69% 31% 28% 72% / 63% 45% 55% 37% "
      boxSize="300px"
    >
      <Image
        border="groove 0.6em lightSkyBlue"
        borderRadius="69% 31% 28% 72% / 63% 45% 55% 37% "
        boxSize="300px"
        objectFit="cover"
        src="/bea.jpg"
        alt="Beata Detkova"
      />
    </Box>
  );
}
