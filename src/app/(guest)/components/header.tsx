import Logo from '@/components/ui/logo';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <h1 className="font-bold text-center max-w-sm md:max-w-5xl text-2xl md:text-6xl">
      Where Ideas Find a Home –{' '}
      <Logo className="px-2 text-3xl md:text-8xl underline" /> Note-Taking.
    </h1>
  );
};

export default Header;
