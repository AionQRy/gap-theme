import styled from "styled-components";

export const ArticleWraper = styled.div`
    display: grid;
    position: relative;
    grid-gap: 20px;
    @media (max-width: 1024px) {
        grid-gap: 10px;
    }
`;
export const ThumbnaillCardWrapper = styled.div`
    display: grid;
    position: relative;

    .gatsby-image-wrapper-constrained {
        width: 100%;

        img{
            width: 100%;
            height: 220px;
            border-radius: 10px;
    
            @media (max-width: 1024px) {
                height: 155px;
            }
            @media (max-width: 575.98px) {
                height: 100%;
            }
        }
    }
`;

export const MainArticle = styled.div`
    display: grid;
    grid-gap: 6px;
`;
export const TermArticle = styled.div`
    display: grid;
    ul {
        padding: 0;
        margin: 0;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        position: relative;
        overflow: hidden;
        line-height: 1.2;

        li {
            list-style: none;
            margin: 0;
            display: inline-block;

            span.textPost {
                color: #707070;
                text-transform: capitalize;
                display: block;
                font-size: 14px;
                line-height: 1.2;

                :after {
                    content: ',';
                    padding-left: 3px;
                    padding-right: 3px;
                }
            }
        }

        li:last-child span:after{
            content: '';
            padding: 0;  
        }
    }
`;
export const TitleCardWrapper = styled.div`
    display: grid;
    position: relative;

    h3 {
        display: block;
        position: relative;
        margin: 0;

        a {
            font-size: 23px;
            color: #262626;
            text-decoration: auto;
            font-weight: 400;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            position: relative;
            overflow: hidden;
            line-height: 1.4;

            :hover {
                color: #ec3529;
            }

            @media (max-width: 1024px) {
                font-size: 18px;
            }
        }
    }    
`;
export const ExcerptCardWrapper = styled.div`
    display: grid;
    position: relative;
    font-size: 14px;

    p{
        font-size: 14px;
        color: #707070;
        text-decoration: auto;
        font-weight: 300;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        position: relative;
        overflow: hidden;
        line-height: 1.4;
        margin: 0;
    }
`;