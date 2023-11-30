import styled from 'styled-components';


export const ContainerWrapper = styled.section`
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 60px;
  box-sizing: border-box;
  margin: 0;
  background-color: white;
  overflow: hidden;
`;

export const Container = styled.section`
  width: 100%;
  background-color: white;

  @media (min-width: 1450px) {
    ${ContainerWrapper} {
      padding-left: 25%;
      padding-right: 25%;
    }
  }
  @media (min-width: 1250px) {
    ${ContainerWrapper} {
      padding-left: 15%;
      padding-right: 15%;
    }
  }
  > ${ContainerWrapper}:nth-child(odd) {
    p {
      border-left: none;
      border-right: groove;
      border-color: ${({ theme }) => theme.colors.primary};
      text-align: -webkit-right;
    }
  }
`;

export const Wrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  -webkit-box-align: center;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.background};
  > span {
    color: white;
  }
  > div {
    width: 50%;
    text-align: center;

    @media (max-width: 900px) {
      & {
        margin-bottom: 20px;
      }
    }
  }
  h4 {
    font-size: 25px;
    line-height: 115%;
    letter-spacing: 0.03em;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.background};
    white-space: pre-wrap;
    font-family: Acumin Pro,acumin-pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  }
  h2 {
    font-size: 3rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
  }
  p {
    border-left: groove;
    border-color: ${({ theme }) => theme.colors.primary};
    text-align: -webkit-left;
    padding: 17px;
    font-size: 1.5rem;
  }
  @media (max-width: 1000px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 900px) {
    div {
      width: 100%;
    }
  }
`;

export const SubTitle = styled.h6`
  text-align: left;
  color: black;
  text-transform: uppercase;
  margin-bottom: 15px;
`;