'use client';

import toast from 'react-hot-toast';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { createBrowserClient } from '@supabase/ssr';

import { APP_URL } from '@/config/constants';

import ProviderButton from './provider-button';

interface ProviderButtonsProps {}

const ProviderButtons: React.FC<ProviderButtonsProps> = ({}) => {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const onContinueWith = async (provider: 'google' | 'github') => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo: `${APP_URL}/api/auth/callback` },
    });
    if (error) return toast.error(error.message);
  };

  return (
    <div className="space-y-3">
      <ProviderButton
        name="Google"
        icon={<FcGoogle />}
        onClick={() => onContinueWith('google')}
      />
      <ProviderButton
        name="GitHub"
        icon={<FaGithub />}
        onClick={() => onContinueWith('github')}
      />
    </div>
  );
};

export default ProviderButtons;
