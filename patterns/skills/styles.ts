import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  background-color: white;
  > section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8rem;
    &:last-child {
      padding-bottom: 5%;
      padding-top: 20px;
    }
    @media (max-width: 1000px) {
      gap: 5rem;
    }
    @media (max-width: 700px) {
      gap: 3rem;
      flex-wrap: wrap;
    }
  }
  > section:last-child {
    padding-bottom: 115px;
  }
`;