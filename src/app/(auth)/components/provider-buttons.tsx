'use client';

import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import ProviderButton from './provider-button';

interface ProviderButtonsProps {}

const ProviderButtons: React.FC<ProviderButtonsProps> = ({}) => {
  return (
    <div className="space-y-3">
      <ProviderButton name="Google" icon={<FcGoogle />} />
      <ProviderButton name="GitHub" icon={<FaGithub />} />
    </div>
  );
};

export default ProviderButtons;
