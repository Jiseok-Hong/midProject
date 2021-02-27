import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body{
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        font-size: 26px;
        
        
    }
`;

export default globalStyles;