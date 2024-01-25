'use client';

import Link from 'next/link';

import { cn } from '@/lib/utils';

import Logo from './logo';

interface LogoLinkProps {
  className?: string;
}

const LogoLink: React.FC<LogoLinkProps> = ({ className }) => {
  return (
    <Link href="/">
      <Logo className={cn('cursor-pointer select-none', className)} />
    </Link>
  );
};
export default LogoLink;
