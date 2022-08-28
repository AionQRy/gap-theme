import styled from "styled-components";

export const ContactWrapper = styled.div`
padding: 5em 0;
display: block;
position: relative;

@media (max-width: 1024px) {
    padding: 3em 2em;
}
@media (max-width: 575.98px) {
    padding: 2em 1.5em;
}
`;

export const ContactRow = styled.div`
display: grid;
grid-gap: 3em;
position: relative;

    @media (max-width: 1024px) {
        grid-gap: 20px;
    }
    @media (max-width: 575.98px) {
        grid-gap: 20px;
    }
`;

export const HeadContent = styled.div`

`;

export const TitleHead = styled.div`
margin: 0 auto;
display: grid;
grid-gap: 15px;
max-width: 680px;
    h2 {
        font-size: 43px;
        text-align: center;
        font-weight: 600;
        color: #262626;
        line-height: 1.1;

        @media (max-width: 1024px) {
            font-size: 38px;
        }
        @media (max-width: 575.98px) {
            font-size: 34px;
        }
    }

    @media (max-width: 1024px) {
        grid-gap: 15px;
    }   
    @media (max-width: 575.98px) {
        grid-gap: 15px;
    }
`;

export const SubTitle = styled.div`
position: relative;
display: block;
margin: 0;
font-size: 18px;
text-align: center;
font-weight: 300;
color: #707070;

    @media (max-width: 1024px) {
        font-size: 16px;
    }
    @media (max-width: 575.98px) {
        font-size: 16px;
    }
`;

export const MainContent = styled.div`
    .ButtonBox {
        display: flex;
        justify-content: center;
        align-items: flex-end;

        a {
            color: #ec3529;
            -webkit-text-decoration: auto;
            text-decoration: auto;
            font-weight: 400;
            padding: 8px 20px;
            border-radius: 50px;
            line-height: 1.2;
            background: transparent;
            border: 2px solid #ec3529;
            font-size: 16px;
            cursor: pointer;
            max-height: 40px;

            :active, :focus, :hover{
                animation-name:elementor-animation-push;
                animation-duration:.3s;
                animation-timing-function:linear;
                animation-iteration-count:1
            }

            @media (max-width: 1024px) {
                font-size: 16px;
            }
            
            @media (max-width: 575.98px) {
                font-size: 15px;
            }
        }
    }
`;