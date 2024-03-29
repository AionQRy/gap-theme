import styled from "styled-components";

import bgGradient from '../../../images/section-hero-4.webp'; 

export const HeroWrapper = styled.div`
display: block;
position: relative;
padding: 7em 0;

    @media (max-width: 1024px) {
        padding: 3.5em 0;
    }
    @media (max-width: 575.98px) {
        padding: 2em 0;
    }
`;

export const BgHero = styled.div`
background: #fafafa;
background-image: url(${bgGradient});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
right: 0;
bottom: 0;
opacity: 1;
z-index: -1;
`;

export const BgBlur = styled.div`
backdrop-filter: saturate(180%) blur(14px);
background: rgba(255, 255, 255, 0.05);
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
right: 0;
bottom: 0;
opacity: 0;
z-index: -1;
`;

export const Container = styled.div`
display: grid;
width: 100%;
max-width: 1280px;
margin: 0 auto;
grid-template-columns: 55% 45%;
grid-gap: 50px;
position: relative;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        gap: 20px;
        padding: 0 2em;
    }

    @media (max-width: 575.98px) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 20px;
        padding: 0 1.5em;
    }
`;

export const HeroWrapperleft = styled.div`
display: grid;
position: relative;
grid-gap: 50px;

    h1.HeadTitleHero {
        font-size: 50px;
        font-weight: 600;
        line-height: 1.2;
        color: #262626;
        margin: 0;
        text-transform: capitalize;

        span{
            color: transparent;
            background-image: linear-gradient(to bottom right,rgb(236 53 41 / 64%),rgb(236 53 41));
            background: linear-gradient(to bottom right,rgb(236 53 41) 25%,rgb(164 13 11) 100%);
            -webkit-background-clip: text;
            text-transform: capitalize;
        }

        @media (max-width: 1024px) {
            font-size: 40px;
        }
        @media (max-width: 575.98px) {
            font-size: 34px;
        }
    }

    h3.SubTitleHero {
        font-size: 50px;
        font-weight: 600;
        line-height: 1.2;
        color: #262626;
        text-transform: capitalize;

        span{
            color: transparent;
            background-image: linear-gradient(to bottom right,rgb(236 53 41 / 64%),rgb(236 53 41));
            background: linear-gradient(to bottom right,rgb(236 53 41) 25%,rgb(164 13 11) 100%);
            -webkit-background-clip: text;
            text-transform: capitalize;
        }

        @media (max-width: 1024px) {
            font-size: 40px;
        }
        @media (max-width: 575.98px) {
            font-size: 34px;
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

        @media (max-width: 1024px) {
            font-size: 16px;
        }
        @media (max-width: 575.98px) {
            font-size: 14px;
        }
    }

    .DetailHeroBox{
        max-width: 650px;
    }
    .BtnHeroBox {
        display: flex;
        gap: 20px;
        align-items: center;

        button{
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
            cursor: pointer;

            @media (max-width: 1024px) {
                font-size: 16px;
            }

            @media (max-width: 575.98px) {
                font-size: 15px;
            }
        }

        button:active, button:focus, button:hover{
            animation-name:elementor-animation-push;
            animation-duration:.3s;
            animation-timing-function:linear;
            animation-iteration-count:1
        }

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

            @media (max-width: 1024px) {
                font-size: 16px;
            }
            @media (max-width: 575.98px) {
                font-size: 14px;
            }
        }

        a.OfferBtn {
            background: #ffffff;
            color: #ec3529;
            font-weight: 400;
            box-shadow: none;
        }

        @media (max-width: 575.98px) {
            
        }
    }
    .TotalHeroBox{
        display: block;
        padding-top: 30px;

        ul {
            padding: 0;
            margin: 0;
            display: flex;
            gap: 35px;

            li {
                margin: 0;
                display: flex;
                list-style: none;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-size: 18px;
                color: #707070;

                @media (max-width: 1024px) {
                    font-size: 16px;
                }
                @media (max-width: 575.98px) {
                    font-size: 14px;
                }

                span {
                    display: block;
                    font-size: 34px;
                    font-weight: 500;
                    color: #ec3529;
                    line-height: 1.4;

                    @media (max-width: 1024px) {
                        font-size: 28px;
                    }
                    @media (max-width: 575.98px) {
                        font-size: 24px;
                    }
                }
            }
        }
        
    }

    .MainContentHero {
        display: grid;
        grid-gap: 20px;
    }

    @media (max-width: 1024px) {
        grid-gap: 20px;
    }
    @media (max-width: 575.98px) {
        grid-gap: 20px;

        ul.ListNav {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }        
        ul.ListNav li {
            font-size: 14px;
            gap: 7px;
        }      
        ul.ListNav li svg {
            width: 16px;
            height: 16px;
        }       
        .ListBox {
            grid-row: 3;
            display: none;
        }
        .TotalHeroBox {
            padding: 0;
        }
        .TotalHeroBox {
            display: none;
        }
    }
`;

export const HeroWrapperRight = styled.div`
display: grid;
position: relative;

    img{
        
        @media (max-width: 575.98px) {
            margin: 0 auto;
        }
    }

    @media (max-width: 1024px) {
        display: none;
    }

    @media (max-width: 575.98px) {
        display: none;
    }
`;

export const ItemBG = styled.div`
@media (max-width: 575.98px) {
    display: grid;
    grid-gap: 20px;
    justify-content: center;
}
`;
// display: grid;
// position: relative;
// background: #4fcbbf;
// height: 100%;
// width: 400px;
// border-radius: 100px;
// border-top-right-radius: 0;
// border-bottom-left-radius: 0;
// margin: 0 auto;
export const Ball = styled.div`
display: block;
height: 75px;
width: 75px;
background: #ec3529;
border-radius: 50px;
border: 10px solid #fff;
position: absolute;
top: 0px;
left: 0;

@media (max-width: 1024px) {
    display: none;
}
@media (max-width: 575.98px) {
    display: none;
}
`;

export const HotLine = styled.div`
display: grid;
grid-template-columns: 1fr 3fr;
grid-gap: 10px;
justify-content: center;
align-items: center;
background: rgb(255 255 255);
box-sizing: border-box;
height: auto;
width: auto;
border: 1px solid rgb(0 0 0 / 6%);
border-radius: 15px;
position: absolute;
bottom: 100px;
left: -90px;
box-shadow: 0px 0px 39px rgb(118 118 118 / 24%);
padding: 12px;

    .right-bar {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #ec3529;
        height: 100%;
        border-radius: 50px;

        svg {
            stroke: #fff;
            width: 25px;
            height: 25px;
        }
    }

    .left-bar {
        display: block;
    
        h4 {
            display: block;
            font-size: 14px;
            color: #707070;       
            font-weight: 400;   
        }
        span {
            color: #262626;
            font-size: 21px;
            display: block;
            font-weight: 600; 
        }
    }

    @media (max-width: 575.98px) {
        display: none;
    }  
`;