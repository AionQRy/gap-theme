import styled from "styled-components"

export const SocialWrapper = styled.div`
display: flex;
position: relative;
border-radius: 7px;
text-align: right;
justify-content: right;
gap: 5px;
padding-top: 2em;

    svg{
        border: 1px solid rgb(0 0 0 / 7%);
        line-height: 1;
        border-radius: 50px;
        display: block;
    }

    @media (max-width: 1024px) {
        padding-top: 2em;
    }
    @media (max-width: 575.98px) {
        padding-top: 1em;
    }
    
`