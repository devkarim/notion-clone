import Logo from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ui/theme-toggle';
import GetStartedButton from './get-started-button';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <nav className="flex p-6 w-full items-center justify-between fixed top-0 z-50 bg-background">
      <Logo className="hidden sm:block" />
      <div className="flex w-full sm:w-fit items-center justify-between sm:justify-normal gap-3">
        <Button variant="ghost" size="sm">
          Log in
        </Button>
        <GetStartedButton />
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
