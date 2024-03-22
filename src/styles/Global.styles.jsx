import { createGlobalStyle } from "styled-components";

export const GlobalStles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-transform: uppercase;
    font-family: 'Edu SA Beginner', cursive;

}
body {
    font-size: 1.5rem;
background-color: ${({ theme }) => theme.colors.mainColor};

}
`;
