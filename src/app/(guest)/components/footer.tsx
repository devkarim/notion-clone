import { Button } from '@/components/ui/button';
import LogoLink from '@/components/ui/logo-link';

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className="p-6 flex justify-between w-full">
      <LogoLink />
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
