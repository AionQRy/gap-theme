import styled from "styled-components";

export const SectionWrapper = styled.div`
padding: 5em 0;
display: block;
position: relative;
`;

export const MainWrapper = styled.div`
display: grid;
grid-gap: 3em;
position: relative;

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
    }

    p {
        margin: 0;
        display: block;
        font-size: 18px;
        color: #707070;
        font-weight: 300;
        text-align: center;
    }
}

`;

export const RecantPost = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 50px;
position: relative;

    @media (max-width: 1024px) {
        grid-gap: 20px;
    }

    @media (max-width: 575.98px) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 20px;
    }
`;