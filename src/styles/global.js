import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        text-transform: uppercase;
        color: white;
    }

    html, body, #root {
        width: 100vw;
        height: 100vh;
    }

    body {
        font: 14px 'Open Sans', sans-serif;
        z-index: 0;
        display: block;
        ${props => !props.show && css`
          display: none;
        `};
    }

`
