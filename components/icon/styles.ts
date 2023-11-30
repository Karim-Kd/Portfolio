import styled from 'styled-components';

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;

  p {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 300;
    font-size: 1rem;
    text-transform: uppercase;
    font-family: monospace;
  }
  svg {
    width: 5rem;
    height: 5rem;
    color: black;
    transition: 0.3s;
    border-radius: 10px;
  }
  &:hover {
    svg {
      color: ${({ theme }) => theme.colors.secondary};
      transform: scale(0.95);
    }
    p {
      font-weight: bold;
    }
  }
  
  @media (max-width: 1000px) {
    p {
      font-size: 1rem;
    }
    svg {
      width: 5rem;
      height: 5rem;
    }
  }
`;