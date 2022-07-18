import styled from "styled-components"

export const TermBox = styled.div`
display: grid;
grid-gap: 10px;
justify-content: left;
position: relative;
border-top: 1px solid #dedede;
padding-top: 2em;
margin-top: 2em;
    .TermList_Box {
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;

        h4{
            font-size: 18px;
            font-weight: 400;
            color: #262626;
            display: block;
            padding-bottom: 13px;
        }

        ul {
            padding: 0;
            margin: 0;
            display: block;

            li {
                list-style: none;
                display: inline-block;
                margin: 0;
                margin-right: 5px;
                margin-bottom: 5px;
                
                :last-child{
                    margin-right: 0;
                }
            }

            a{
                color: #ec3529;
                text-transform: capitalize;
                -webkit-text-decoration: auto;
                text-decoration: auto;
                background: #ec352929;
                border-radius: 50px;
                padding: 8px 15px;
                font-size: 14px;
                font-weight: 400;
                display: block;
                line-height: 1;

                :active, :focus, :hover{
                    animation-name:elementor-animation-push;
                    animation-duration:.3s;
                    animation-timing-function:linear;
                    animation-iteration-count:1
                }
            }
        }
    }

`