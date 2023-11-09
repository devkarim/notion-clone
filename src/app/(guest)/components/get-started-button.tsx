import { Button, ButtonProps } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface GetStartedButtonProps extends ButtonProps {
  showArrow?: boolean;
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({
  showArrow,
  ...props
}) => {
  return (
    <Button size="sm" {...props}>
      Get Motion free{' '}
      {showArrow && (
        <span className="ml-2">
          <ArrowRight className="w-4 h-4" />
        </span>
      )}
    </Button>
  );
};

export default GetStartedButton;
