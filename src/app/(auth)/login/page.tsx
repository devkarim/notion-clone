import Container from '@/components/ui/container';
import { Separator } from '@/components/ui/separator';

import LoginForm from './components/login-form';
import ProviderButtons from '../components/provider-buttons';
import { APP_NAME } from '@/config/constants';

export default function Login() {
  return (
    <Container className="flex flex-col items-center pt-36 space-y-8">
      <div className="space-y-8">
        <h1 className="text-5xl font-bold text-center">Log in</h1>
        <ProviderButtons />
        <Separator />
        <LoginForm />
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
