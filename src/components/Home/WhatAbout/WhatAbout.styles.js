import styled from "styled-components";

export const AboutWrapper = styled.div`
display: block;
position: relative;
padding: 5em 0;

    @media (max-width: 1024px) {
        padding: 3em 2em;
    }
    @media (max-width: 575.98px) {
        padding: 3em 1.5em;
    }
`;

export const RowAbout = styled.div`
display: grid;
position: relative;
grid-gap: 7em;

    @media (max-width: 1024px) {
        grid-gap: 3em;
    }
    @media (max-width: 575.98px) {
        grid-gap: 35px;
    }
`;


export const AboutSection = styled.div`
display: block;
position: relative;

    .BoxDetail {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 50px;
        align-items: center;

        .TitleAbout {
            display: flex;
            gap: 15px;
            flex-direction: column;
            justify-content: center;
            align-items: baseline;

            .IconAbout {
                padding: 12px;
                background: #ec3529;
                width: 50px;
                height: 50px;
                stroke: white;
                background: linear-gradient(135deg,#ec3529 35%,#940404 100%);
                border-radius: 7px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0;
                position: relative;
                top: 0;
                left: 0;
                box-shadow: 1px 6px 12px 0 rgb(236 53 41 / 30%);
            }

            h2 {
                font-size: 34px;
                text-align: left;
                font-weight: 600;
                color: #262626;
                display: block;

                @media (max-width: 1024px) {
                    font-size: 30px;
                }
                @media (max-width: 575.98px) {
                    font-size: 26px;
                }
            }
            
            p {
                margin: 0;
                display: block;
                font-size: 18px;
                color: #707070;
                font-weight: 300;
                text-align: left;

                @media (max-width: 1024px) {
                    font-size: 16px;
                }
                @media (max-width: 575.98px) {
                    font-size: 14px;
                }
            }

            a.BtnReadmore {
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
                font-size: 16px;
                cursor: pointer;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                svg {
                    width: 21px;
                    height: 21px;
                    background: #ec3529;
                    stroke: #fff;
                    border-radius: 50px;
                    padding: 2px;
                    transition: all ease-in-out 350ms;
                }

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

        .ImageAbout .gatsby-image-wrapper {
            border-radius: 15px;
            -webkit-box-shadow: 5px 8px 29px -5px rgb(166 166 166 / 35%);
            height: 355px;

            @media (max-width: 1024px) {
                height: 185px;
            }
            @media (max-width: 575.98px) {
                height: 100%;
            }
        }

        @media (max-width: 1024px) {
            gap: 20px;
            align-items: center;
        }

        @media (max-width: 575.98px) {
            grid-template-columns: 1fr;
            gap: 35px;
        }

    }

    :nth-child(2n) .ImageAbout {
        grid-column: 1 / 2;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0;
        grid-row: 1;

        @media (max-width: 575.98px) {
            grid-column: span 1;
            grid-row: 2;
        }
    }
    
    :nth-child(2n) .TitleAbout {
        grid-column: 2 / 2;
        grid-row: 1;

        @media (max-width: 575.98px) {
            grid-column: span 1;
        }
    }
`;