import styled from 'styled-components';

export const TitleContainer = styled.h1`
    color: ${props => props.color || "palevioletred"};
    text-align: center;
    font-size: 3.5rem;
    font-family: monospace;
    margin-bottom: 95px;
    
    @media (max-width: 1000px) {
        & {
            margin-bottom: 65px;
        }
    }
        @media (max-width: 700px) {
        & {
            margin-bottom: 25px;
            font-size: 2rem;
        }
    }
`;