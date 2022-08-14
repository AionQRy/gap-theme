import styled from "styled-components";

export const WhyWrapper = styled.div`
display: block;
position: relative;
padding: 5em 0;

    .BoxDetail{
        display: grid;
        grid-gap: 50px;

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
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 20px;

            .CardOption {
                display: grid;
                grid-template-columns: 1fr 4fr;
                grid-gap: 5px 20px;
                justify-content: center;
                align-items: center;
                background-color: rgba(249,250,251,1);
                border-radius: 0.5rem;
                padding: 25px;
                position: relative;

                .image-option {
                    padding: 5px;
                    background: #ec3529;
                    stroke: white;
                    background: linear-gradient(135deg,#ec3529 35%,#940404 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto;
                    position: relative;
                    box-shadow: 1px 6px 12px 0 rgb(236 53 41 / 30%);
                    grid-row: span 2;
                    border-radius: 50px;
                    height: 95px;
                    width: 95px;

                    .gatsby-image-wrapper.gatsby-image-wrapper-constrained {
                        width: 50px;
                        height: 50px;
                    }
                }

                h4 {
                    font-size: 21px;
                    font-weight: 500;
                    display: block;
                    text-align: left;

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
                    text-align: left;

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