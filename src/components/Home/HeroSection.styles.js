import styled from "styled-components";

export const HeroWrapper = styled.div`
display: block;
padding: 5em 0;
position: relative;
`;

export const Container = styled.div`
display: grid;
width: 100%;
max-width: 1140px;
margin: 0 auto;
grid-template-columns: 60% 40%;
position: relative;
`;

export const HeroWrapperleft = styled.div`
display: grid;
position: relative;
grid-gap: 25px;

    h2.HeadTitleHero {
        font-size: 50px;
        font-weight: 600;
        line-height: 1.2;
        color: #262626;

        span{
            color: transparent;
            background-image: linear-gradient(to bottom right,rgb(236 53 41 / 64%),rgb(236 53 41));
            background: linear-gradient(to bottom right,rgb(236 53 41) 25%,rgb(164 13 11) 100%);
            -webkit-background-clip: text;
        }
    }

    h3.SubTitleHero {
        font-size: 50px;
        font-weight: 600;
        line-height: 1.2;
        color: #262626;

        span{
            color: transparent;
            background-image: linear-gradient(to bottom right,rgb(236 53 41 / 64%),rgb(236 53 41));
            background: linear-gradient(to bottom right,rgb(236 53 41) 25%,rgb(164 13 11) 100%);
            -webkit-background-clip: text;
        }
    }

    ul.ListNav {
        padding: 0;
        margin: 0;
        display: flex;
        gap: 13px;
        align-items: center;

        li {
            list-style: none;
            display: flex;
            align-items: center;
            gap: 13px;
            font-size: 16px;
            color: #262626;
            margin: 0;

            svg {
                background: #4fcbbf;
                stroke: #fff;
                border-radius: 50px;
                width: 20px;
                height: 20px;
                padding: 2px;
                stroke-width: 3px;
            }
        }
    }
    
    p{
        margin: 0;
        display: block;
        font-size: 18px;
        color: #707070;
        font-weight: 300;
    }

    .BtnHeroBox {
        display: flex;
        gap: 20px;
        align-items: center;

        a {
            background: #ec3529;
            color: #fff;
            text-decoration: auto;
            font-weight: 300;
            padding: 8px 20px;
            border-radius: 50px;
            line-height: 1.2;
            background: linear-gradient(135deg,#ec3529 35%,#940404 100%);
            box-shadow: 1px 6px 12px 0 rgb(236 53 41 / 30%);
            background: #ec3529;
            border: 2px solid #ec3529;
            font-size: 18px;

            :active, :focus, :hover{
                animation-name:elementor-animation-push;
                animation-duration:.3s;
                animation-timing-function:linear;
                animation-iteration-count:1
            }
        }

        a.OfferBtn {
            background: #ffffff;
            color: #ec3529;
            font-weight: 400;
            box-shadow: none;
        }
    }
`;

export const HeroWrapperRight = styled.div`
display: grid;
position: relative;

`;