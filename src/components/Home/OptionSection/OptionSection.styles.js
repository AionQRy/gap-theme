import styled from "styled-components";

export const OptionWrapper = styled.div`
display: block;
position: relative;
padding: 5em 0;

    .BoxDetail{
        display: grid;
        grid-gap: 65px;

        .TitleOption{
            margin: 0 auto;
            display: grid;
            grid-gap: 15px;
            max-width: 680px;

            h2 {
                font-size: 43px;
                text-align: center;
                font-weight: 600;
                color: #262626;

                @media (max-width: 1024px) {
                    font-size: 38px;
                }
                @media (max-width: 575.98px) {
                    font-size: 34px;
                }
            }
            
            p {
                margin: 0;
                display: block;
                font-size: 18px;
                color: #707070;
                font-weight: 300;
                text-align: center;

                @media (max-width: 1024px) {
                    font-size: 16px;
                }
                @media (max-width: 575.98px) {
                    font-size: 16px;
                }
            }
        }
        
        .Detail {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 70px 35px;

            .CardOption {
                display: grid;
                grid-gap: 1.25rem;
                justify-content: center;
                align-items: center;
                background-color: rgba(249,250,251,1);
                border-radius: 0.5rem;
                padding: 1.5rem;
                position: relative;
                padding-top: 3em;

                .image-option {
                    padding: 5px;
                    background: #ec3529;
                    width: 50px;
                    height: 50px;
                    stroke: white;
                    background: linear-gradient(135deg,#ec3529 35%,#940404 100%);
                    border-radius: 7px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto;
                    position: absolute;
                    top: -25px;
                    left: 50%;
                    transform: translateX(-50%);
                    box-shadow: 1px 6px 12px 0 rgb(236 53 41 / 30%);

                    .gatsby-image-wrapper.gatsby-image-wrapper-constrained {
                        width: 35px;
                        height: 35px;
                    }
                }

                h4 {
                    font-size: 21px;
                    font-weight: 500;
                    display: block;
                    text-align: center;

                    @media (max-width: 1024px) {
                        font-size: 21px;
                    }
                    @media (max-width: 575.98px) {
                        font-size: 18px;
                    }
                }

                p {
                    font-size: 16px;
                    font-weight: 300;
                    display: block;
                    text-align: center;

                    @media (max-width: 1024px) {
                        font-size: 16px;
                        min-height: 120px;
                    }
                    @media (max-width: 575.98px) {
                        font-size: 14px;
                        min-height: auto;
                    }
                }

                @media (max-width: 1024px) {
                    grid-gap: 10px;
                }

                @media (max-width: 575.98px) {
                    grid-gap: 10px;
                }
            }

            @media (max-width: 1024px) {
                grid-template-columns: repeat(2,1fr);
                grid-gap: 50px 35px;
            }
            @media (max-width: 575.98px) {
                grid-template-columns: repeat(1,1fr);
                grid-gap: 50px 35px;
            }

        }
        
    }

    @media (max-width: 1024px) {
        padding: 3em 2em;
    }
    @media (max-width: 575.98px) {
        padding: 2em 1.5em;
    }
`;