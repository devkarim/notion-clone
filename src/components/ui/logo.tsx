import { cn } from '@/lib/utils';
import { APP_NAME } from '@/config/constants';

interface LogoProps extends React.HTMLProps<HTMLSpanElement> {}

const Logo: React.FC<LogoProps> = ({ className, ...props }) => {
  return (
    <span className={cn('font-bold text-3xl font-serif', className)} {...props}>
      {APP_NAME}
    </span>
  );
};

export default Logo;
