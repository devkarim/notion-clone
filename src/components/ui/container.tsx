import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLProps<HTMLDivElement> {}

const Container: React.FC<ContainerProps> = ({ className, ...props }) => {
  return <div className={cn('p-6', className)} {...props}></div>;
};

export default Container;
