import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: FontAwesome;
        font-style: normal;
        font-weight: 400;
        src: url("/fonts/FontAwesome.ttf") format("truetype");
    }

    :root {
        /*main colors*/
        --yellow: #f4cf0a;
        --purple: #5c0d78;


        --white: #E5E5E5;

        --black: #110e0e;
        --dark-purple: #490861;
        --gray: #2c2929;
        --pale-gray: #333333;
        --dark-gray: #242020;
        --green: #adff2f;

        --primary: #202225;
        --secondary: #343A40;
        --tertiary: #1A1C1F;

        --quaternary: rgba(84, 84, 84, 0.75);
        --quinary: #393d42;
        --senary: #828386;

        --dark-hover: #23272C;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html {
        font-family: "Roboto", Arial, Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html, body, #root {
        height: 100%;
        max-width: 1440px;

        margin: 0 auto 0 auto;
    }

    body {
        padding: 40px 80px 0 80px;

        background-color: var(--primary);

        ::-webkit-scrollbar-track {
            background-color: var(--secondary);
        }
        ::-webkit-scrollbar {
            width: 6px;
            background: none;
        }
        ::-webkit-scrollbar-thumb {
            background: var(--tertiary);
            border-radius: 3px;
        }
    }

    button,
    input {
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;

        border: none;
    }
`;
