'use client';

import { Button } from '@/components/ui/button';

interface ProviderButtonProps {
  name: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const ProviderButton: React.FC<ProviderButtonProps> = ({
  name,
  icon,
  onClick,
}) => {
  return (
    <Button variant="classic" className="flex w-80" onClick={onClick}>
      <span className="mr-2 text-xl">{icon}</span>
      <p>Continue with {name}</p>
    </Button>
  );
};

export default ProviderButton;
