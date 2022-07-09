import styled from "styled-components"

export const MainBoxError = styled.div`
display: block;
position: relative;
padding: 5em 0;
  @media (max-width: 1024px) {
    padding: 2em 2em;
  }
  @media (max-width: 575.98px) {
    padding: 2em 1.5em;
  }

  .gatsby-image-wrapper{
    @media (max-width: 1024px) {
        margin: 50px;
    }
    @media (max-width: 575.98px) {
        margin: 0 70px;
    }  
  }
`;

export const BoxError = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
align-items: center;
justify-content: center;
grid-gap: 10px;
position: relative;
max-width: 1140px;
margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 575.98px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Wrapper = styled.div`
display: grid;
max-width: 700px;
margin: 0 auto;
justify-content: center;
grid-gap: 10px;
align-items: center;

    .gatsby-image-wrapper{
        @media (max-width: 1024px) {
            margin: 20px;
        }
        @media (max-width: 575.98px) {
            margin: 0 40px;
        }  
    }
`;

export const BoxNotFound = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

    h1.BigHeadNotFound {
        display: block;
        font-size: 140px;
        font-weight: 600;
        color: #ec3529;
        margin: 0 auto;
        position: relative;
        padding-bottom: 10px;
        line-height: 1;

        @media (max-width: 1024px) {
            font-size: 75px;
        }
          @media (max-width: 575.98px) {
            font-size: 45px;
        }
        
    }
    h2{
        display: block;
        font-size: 45px;
        font-weight: 400;
        color: #000;
        margin: 0 auto;
        position: relative;

        @media (max-width: 1024px) {
            font-size: 28px;
        }
          @media (max-width: 575.98px) {
            font-size: 21px;
        }
    }
    h4{
        font-size: 24px;
        font-weight: 500;
        color: #000;
        text-align: center;

        @media (max-width: 1024px) {
            font-size: 24px;
        }
          @media (max-width: 575.98px) {
            font-size: 21px;
        }
    }

    p{
        font-size: 17px;
        font-weight: 300;
        color: #7b7b7b;
        margin-bottom: 20px;
        text-align: center;
    }

    .ButtonToHome{
        display: inline-flex;
        color: #fff;
        background: #ec3529;
        padding: 10px 25px;
        -webkit-text-decoration: auto;
        text-decoration: auto;
        border-radius: 50px;
        font-size: 16px;
        font-weight: 300;
        background: linear-gradient(135deg,#ec3529 35%,#940404 100%);
        line-height: 1.2;
        align-items: center;
        justify-content: center;
        gap: 4px;

        :active, :focus, :hover{
            animation-name:elementor-animation-push;
            animation-duration:.3s;
            animation-timing-function:linear;
            animation-iteration-count:1
        }
    }
    @keyframes elementor-animation-push{
        50%{
            transform:scale(0.8)
        }
        100%{
            transform:scale(1)
        }
    }
`;