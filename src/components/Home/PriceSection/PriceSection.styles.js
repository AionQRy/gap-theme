import styled from "styled-components";

export const PriceWrapper = styled.div`
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

export const PriceRow = styled.div`
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

export const PriceGrid = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 1em;

    .MostPopular {
        box-shadow: 0px 0px 0px 5px rgb(236 53 41), 0px 0px 38px 10px #3e3e3e21;

        .ButtonBox a{
            color: #fff;
            font-weight: 300;
            background: #ec3529;
            box-shadow: 1px 6px 12px 0 rgb(236 53 41 / 30%);
        }

        @media (max-width: 575.98px) {
            grid-row: 1;
        }      
    }

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2em;
    }
    @media (max-width: 575.98px) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 2em;
    }
`;

export const PriceCard = styled.div`
background-color: rgba(249,250,251,1);
display: grid;
grid-gap: 15px;
padding: 1.5em 0.85em;
position: relative;
    .TitleCard {
        font-size: 21px;
        font-weight: 600;
        color: #262626;
        line-height: 1.3;
        display: block;
        text-align: center;
    }

    .Detail ul{
        margin: 0;
        padding: 0;
        display: grid;
        grid-gap: 0;

        li{
            color: #262626;
            font-weight: 300;
            font-size: 16px;
            list-style: none;
            border-bottom: 1px solid #dddddd;
            padding: 10px 0;
            display: grid;
            align-items: baseline;
            grid-template-columns: 20px 1fr;
            grid-gap: 5px;    

            svg {
                padding: 2px;
                background: #ec35292b;
                width: 18px;
                height: 18px;
                stroke: #ec3529;
                border-radius: 50px;
                display: inline-block;
                stroke-width: 3px;
            }
        }    
    } 

    .ImageBox {
        display: flex;
        align-items: self-end;
    }

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

export const SpanPrice = styled.div`
grid-column: span 2;
text-align: left;
display: inline-block;
color: #ec3529;
font-weight: 400;
`;

export const MostPopular = styled.div`
display: block;
position: absolute;
top: -5px;
left: -1px;
background: #ec3529;
max-width: 120px;
width: 100%;
text-align: center;
color: #fff;
font-weight: 400;
font-size: 16px;
padding: 2px;
`;