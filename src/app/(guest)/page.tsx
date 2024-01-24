import Container from '@/components/ui/container';

import Header from './components/header';
import Heroes from './components/heroes';
import Subtitle from './components/subtitle';
import GetStartedButton from './components/get-started-button';

export default function Home() {
  return (
    <Container className="flex min-h-full flex-col gap-8 items-center w-full">
      <Header />
      <Subtitle />
      <GetStartedButton size="default" showArrow />
      <Heroes />
    </Container>
  );
}
