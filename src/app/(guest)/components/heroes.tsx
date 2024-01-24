import Image from 'next/image';

interface HeroesProps {}

const Heroes: React.FC<HeroesProps> = ({}) => {
  return (
    <div className="flex justify-center w-full h-full gap-32">
      <div className="relative w-96 h-96 hidden md:block">
        <Image
          src="/svg/articles-dark.svg"
          alt="articles-dark"
          className="hidden dark:block"
          fill
        />
        <Image
          src="/svg/articles-light.svg"
          alt="articles-light"
          className="dark:hidden"
          fill
        />
      </div>
      <div className="relative w-72 h-72 md:w-96 md:h-96">
        <Image
          src="/svg/happy-dark.svg"
          alt="happy-dark"
          className="hidden dark:block"
          fill
        />
        <Image
          src="/svg/happy-light.svg"
          alt="happy-light"
          className="dark:hidden"
          fill
        />
      </div>
    </div>
  );
};

export default Heroes;
