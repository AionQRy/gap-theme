import styled from "styled-components";

export const ServiceWrapper = styled.div`
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

export const BarTopping = styled.div`

`;

export const MainService = styled.div`
display: grid;
grid-gap: 3em;

    .TitleService {
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
                font-size: 43px;
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
`;

export const DetailService = styled.div`
display: grid;
position: relative;

    .Grid-Column {
        display: grid;
        grid-template-columns: repeat(4 ,1fr);
        grid-gap: 20px;

        .List-Column {
            display: grid;
            grid-gap: 20px;
        }

        @media (max-width: 1024px) {
            grid-template-columns: repeat(2 ,1fr);
        }
    
        @media (max-width: 575.98px) {
            grid-template-columns: repeat(1 ,1fr);
        }
    }
    .image_top {
        text-align: center;

        .gatsby-image-wrapper {
            margin: 0 auto;
        }

        img {
            padding: 12px;
            background: #ec352908;
            border-radius: 14px;
            height: 80px;
        }
    }
    
    .detail {
        display: grid;
        grid-gap: 10px;

        h3 {
            color: #262626;
            font-weight: 400;
            display: block;
            text-align: center;
            margin: 0;
            font-size: 23px;

            @media (max-width: 1024px) {
                font-size: 21px;
            }
        
            @media (max-width: 575.98px) {
                font-size: 18px;
            }
        }

        p {
            margin: 0;
            display: block;
            font-size: 16px;
            color: #707070;
            font-weight: 300;
            text-align: center;
            height: 85px;

            @media (max-width: 575.98px) {
                height: 100%;
            }
        }
    }


    .btn-service {
        display: block;
        text-align: center;
        margin-top: -10px;

        a {
            display: inline-flex;
            color: #ec3529;
            text-transform: uppercase;
            font-weight: 400;
            padding: 9px 17px;
            border-radius: 50px;
            font-size: 16px;
            border: 2px solid #ec3529;
            text-decoration: auto;
            align-items: center;
            justify-content: center;
            gap: 5px;
            line-height: 1.2;

            svg {
                width: 20px;
                height: 20px;
                background: #ec3529;
                stroke: #fff;
                border-radius: 50px;
                padding: 2px;
                transition: all ease-in-out 350ms;

                @media (max-width: 1024px) {
                    width: 16px;
                    height: 16px;
                }
            
                @media (max-width: 575.98px) {
                    width: 16px;
                    height: 16px;
                }
            }

            :hover{
                background: #ec3529;
                color: #fff;

                svg{
                    background: #fff;
                    stroke: #ec3529;
                } 
            }

            @media (max-width: 1024px) {
                font-size: 16px;
            }
        
            @media (max-width: 575.98px) {
                padding: 7px 17px;
                font-size: 15px;
            }
        }
    }
`;