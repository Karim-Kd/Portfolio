import { TextContainer } from './styles';

interface TextProps {
  text: string;
  color?: string;
}

export function Text({ text, color }: TextProps) {
  return (
      <TextContainer
        color={color}
        data-aos="fade-down"
      >
        {text}
      </TextContainer>
  );
}