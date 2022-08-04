import styled from "styled-components";

export const FaqWrapper = styled.div`
padding: 5em 0;
position: relative;
display: block;

    .grid-box {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 50px;
        justify-content: center;
        align-items: center;

        .grid-column{
            display: block;
            position: relative;
            text-align: center;
        }
        .grid-column-1 {
            
            @media (max-width: 1024px) {
                display: none; 
            }
        }

        @media (max-width: 1024px) {
            grid-template-columns: 1fr;
        }
        @media (max-width: 575.98px) {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 1024px) {
        padding: 3em 2em;
    }
    @media (max-width: 575.98px) {
        padding: 2em 1.5em;
    }
`; 