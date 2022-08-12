import styled from "styled-components";

export const AboutWrapper = styled.div`
display: block;
position: relative;
padding: 5em 0;

    .BoxDetail {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 50px;

        .TitleAbout {
            display: grid;
            grid-gap: 15px;

            h2 {
                font-size: 34px;
                text-align: left;
                font-weight: 600;
                color: #262626;
                display: block;
            }
            
            p {
                margin: 0;
                display: block;
                font-size: 18px;
                color: #707070;
                font-weight: 300;
                text-align: left;
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
            }
        } 
    }
`;