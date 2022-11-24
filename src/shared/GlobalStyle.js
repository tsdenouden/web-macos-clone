import { createGlobalStyle } from 'styled-components'
import useImage from '../hooks/useImage'

const GlobalStyle = createGlobalStyle`
    html {
        font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        font-size: 13px;
        background-image: url(${() => {
            const bg = useImage('monterey.jpeg')
            return bg
        }});
        color: white;
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
`;

export default GlobalStyle