import { TitleContainer } from './styles';

interface TitleProps {
  title: string;
  color?: string;
}

export function Title({ title, color }: TitleProps) {
  return (
    <TitleContainer
      color={color}
      data-aos="fade-down"
    >
      {title}
    </TitleContainer>
  );
}