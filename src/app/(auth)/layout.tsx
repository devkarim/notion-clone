import LogoLink from '@/components/ui/logo-link';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center h-full">
      <main className="w-full max-w-7xl py-6 px-12">
        <LogoLink />
        {children}
      </main>
    </div>
  );
}
