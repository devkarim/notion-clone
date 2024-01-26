import { APP_NAME } from '@/config/constants';
import Container from '@/components/ui/container';
import { Separator } from '@/components/ui/separator';

import RegisterForm from './components/register-form';
import ProviderButtons from '../components/provider-buttons';

export default function Signup() {
  return (
    <Container className="flex flex-col items-center pt-36 space-y-8">
      <div className="space-y-8">
        <h1 className="text-5xl font-bold text-center">Sign up</h1>
        <RegisterForm />
        <Separator />
        <ProviderButtons />
      </div>
      <p className="max-w-lg text-sm text-center text-muted-foreground">
        By clicking &quot;Continue with GitHub/Google/Email&quot; above, you
        acknowledge that you have read and understood, and agree to {APP_NAME}
        &apos;s{' '}
        <span className="underline cursor-pointer">
          Terms & Conditions
        </span> and{' '}
        <span className="underline cursor-pointer">Privacy Policy</span>.
      </p>
    </Container>
  );
}
