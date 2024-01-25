import { Button } from '@/components/ui/button';

interface ProviderButtonProps {
  name: string;
  icon: React.ReactNode;
}

const ProviderButton: React.FC<ProviderButtonProps> = ({ name, icon }) => {
  return (
    <Button variant="classic" className="flex w-80">
      <span className="mr-2 text-xl">{icon}</span>
      <p>Continue with {name}</p>
    </Button>
  );
};

export default ProviderButton;
