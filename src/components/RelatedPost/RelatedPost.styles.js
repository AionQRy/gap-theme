import styled from "styled-components";

export const RelatedWrapper = styled.div`
display: block;
position: relative;
    h2 {
        font-size: 30px;
        text-align: center;
        display: block;
        padding-bottom: 40px;
        font-weight: 400;
        color: #262626;

        :after {
            content: '';
            display: block;
            width: 35px;
            height: 4px;
            background: #ec3529;
            margin: 15px auto 0;
            border-radius: 50px;
        }

        @media (max-width: 1024px) {
            font-size: 26px;
            padding-bottom: 25px;
        }
    
        @media (max-width: 575.98px) {
            font-size: 23px;
        }
    }
`
export const RelatedMainWrapper = styled.div`

`
export const RelatedContainer = styled.div`
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
`