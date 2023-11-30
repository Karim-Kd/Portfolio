import styled from 'styled-components';

export const Wrapper = styled.div<{ reverse?: boolean }>`
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;

  > svg {
    position: relative;
    display: block;
    width: calc(117% + 1.3px);
    height: ${(props) =>
      props.reverse && '155px'
    };
    transform: ${(props) =>
      props.reverse && 'rotate(180deg)'
    };
  }

  .shape-fill {
    fill: #FFFFFF;
  }
`;
