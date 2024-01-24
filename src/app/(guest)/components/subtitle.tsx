import { APP_NAME } from '@/config/constants';

interface SubtitleProps {}

const Subtitle: React.FC<SubtitleProps> = ({}) => {
  return (
    <p className="max-w-xs md:max-w-lg text-sm md:text-2xl font-semibold text-center">
      {APP_NAME} is your all-in-one platform for notes, tasks and ideas.
    </p>
  );
};

export default Subtitle;
