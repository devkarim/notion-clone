import { cn } from '@/lib/utils';
import { APP_NAME } from '@/config/constants';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <span className={cn('font-bold text-3xl font-serif', className)}>
      {APP_NAME}
    </span>
  );
};

export default Logo;
