import LogoLink from '@/components/ui/logo-link';
import { ModeToggle } from '@/components/ui/theme-toggle';

import LoginButton from './login-button';
import GetStartedButton from './get-started-button';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <nav className="flex p-6 w-full items-center justify-between fixed top-0 z-50 bg-background">
      <LogoLink className="hidden sm:block" />
      <div className="flex w-full sm:w-fit items-center justify-between sm:justify-normal gap-3">
        <LoginButton />
        <GetStartedButton />
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
