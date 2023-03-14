import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
    }

    *:focus {
    outline: 0;
}

::-webkit-scrollbar {
    width: 6px;
    background-color: ${props => props.theme.secondary};
}

::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.primary};
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background-color: #5c3736;
}

::-webkit-scrollbar-track {
    border-radius: 10px;

}
    
    body {
        -webkit-font-smoothing: antialiased;
        font-family: 'Encode Sans', sans-serif;
        background: #f3f3f3;
    }

    button {
        border: 0px;
        cursor: pointer;
    }

`