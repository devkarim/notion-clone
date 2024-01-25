'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Button, ButtonProps } from '@/components/ui/button';

interface GetStartedButtonProps extends ButtonProps {
  showArrow?: boolean;
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({
  showArrow,
  ...props
}) => {
  return (
    <Button asChild variant="secondary" size="sm" {...props}>
      <Link href="/signup">
        Get Motion free {showArrow && <ArrowRight className="ml-2 w-4 h-4" />}
      </Link>
    </Button>
  );
};

export default GetStartedButton;
