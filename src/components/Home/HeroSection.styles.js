import styled from "styled-components";

export const HeroWrapper = styled.div`
display: grid;
grid-template-columns: 60% 40%;
max-width: 1140px;
margin: 0 auto;
`;

export const HeroWrapperleft = styled.div`

    h2.HeadTitleHero {
        font-size: 50px;
        font-weight: 600;
        line-height: 1.2;
        color: #262626;

        span{
            color: transparent;
            background-image: linear-gradient(to bottom right,rgb(236 53 41 / 64%),rgb(236 53 41));
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
    
    .BtnHeroBox {
        display: flex;
        gap: 20px;
        align-items: center;

        a {
            background: #ec3529;
            color: #fff;
            text-decoration: auto;
            font-weight: 300;
            padding: 10px 20px;
            border-radius: 50px;
            line-height: 1.2;
            background: linear-gradient(135deg,#ec3529 35%,#940404 100%);
            box-shadow: 1px 6px 12px 0 rgb(236 53 41 / 30%);
        }
    }
`;

export const HeroWrapperRight = styled.div`

`;