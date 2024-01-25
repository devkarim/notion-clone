'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';

interface LoginButtonProps {}

const LoginButton: React.FC<LoginButtonProps> = ({}) => {
  return (
    <Button asChild variant="ghost" size="sm">
      <Link href="/login">Log in</Link>
    </Button>
  );
};

export default LoginButton;
