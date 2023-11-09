import Logo from '@/components/ui/logo';
import { Button } from '@/components/ui/button';

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className="p-6 flex justify-between w-full">
      <Logo />
      <div className="space-x-1 text-foreground/60">
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms & Conditions
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
