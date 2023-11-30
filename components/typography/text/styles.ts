import styled from 'styled-components';

export const TextContainer = styled.p`
    color: ${props => props.color || "palevioletred"};
    text-align: center;
    font-size: 2rem;
    font-family: monospace;
`;