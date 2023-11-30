import { ReactNode } from 'react';
import { IconContainer } from './styles';

interface IconProps {
  title: string;
  icon: ReactNode;
}

export default function Icon({ title, icon }: IconProps) {
  return (
    <IconContainer data-aos="fade-up">
      <p>{title}</p>
      {icon}
    </IconContainer>
  );
}