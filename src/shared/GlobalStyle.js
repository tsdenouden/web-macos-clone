import { createGlobalStyle } from 'styled-components'
import useImage from '../hooks/useImage'

const GlobalStyle = createGlobalStyle`
    html {
        font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        font-size: 13px;
        background-image: url(${() => {
            const bg = useImage('monterey.jpg')
            return bg
        }});
        background-size: 100vw 100vh;
        background-repeat: no-repeat;
        color: white;
        overflow: hidden;
        padding: 0;
        margin: 0;
    }
    ul, li {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    p {
        padding: 0;
        margin: 0;
    }
    a {
        text-decoration: none;
        color: rgb(10,132,255);
        font-weight: bold;
    }
    img {
        user-select: none;
    }
`;

export default GlobalStyle