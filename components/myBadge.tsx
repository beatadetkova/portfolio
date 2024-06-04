import { Badge } from '@chakra-ui/react';

type MyBadgeProps = {
  children: React.ReactNode;
  colorScheme?: string;
};

export default function MyBadge({ children, colorScheme }: MyBadgeProps) {
  return (
    <Badge variant="solid" colorScheme={colorScheme}>
      {children}
    </Badge>
  );
}
