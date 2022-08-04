import styled from "styled-components";

export const Faq = styled.div`
display: grid;
grid-gap: 20px;
justify-content: left;
    h2.faq__title {
        font-size: 43px;
        text-align: left;
        font-weight: 600;
        color: #262626;
        line-height: 1.3;
        display: flex;
        align-items: center;
        gap: 10px;

        svg {
            padding: 2px;
            background: #ec3529;
            width: 50px;
            height: 50px;
            stroke: white;
            background: linear-gradient(135deg,#ec3529 35%,#940404 100%);
            border-radius: 7px;

            circle {
              display: none;
            }

            @media (max-width: 1024px) {
                padding: 0px;
                width: 40px;
                height: 40px;
            }
            
            @media (max-width: 575.98px) {
                padding: 0px;
                width: 30px;
                height: 30px;
            }          
          }

      @media (max-width: 1024px) {
          font-size: 43px;
      }

      @media (max-width: 575.98px) {
          font-size: 34px;
      }
    }

    p {
        position: relative;
        display: block;
        margin: 0;
        font-size: 18px;
        text-align: left;
        font-weight: 300;
        color: #707070;

        @media (max-width: 1024px) {
          font-size: 16px;
        }
        @media (max-width: 575.98px) {
            font-size: 16px;
        }
    }

    @media (max-width: 1024px) {
      grid-gap: 20px;
    }

    @media (max-width: 575.98px) {
        grid-gap: 15px;
    }
`;
export const AccordionWrapper = styled.div`
    max-width: 100%;
    margin: 0;

    .faq__question:first-child{
      border-top: 1px solid rgb(0 0 0 / 9%);
    }
`;
export const FaqQuestion = styled.div`
border-bottom: 1px solid rgb(0 0 0 / 9%);
max-width: 100%;
margin: 0 auto;
position: relative;
display: block;

    p{
        margin: 0;
    }

    dd{
        margin: 0;
    }

    .faq__desc.show-description {
        margin-bottom: 15px;
        height: 5rem;
    }
  
    .faq__question-button::after {
        transition: transform 300ms ease-out;
    }
    
    .font-weight-bold::after {
        transform: rotate(720deg);
    }

    button.faq__question-button {
        font-weight: 300;
        outline: none;
        font-size: 18px;
        color: #262626;

        @media (max-width: 1024px) {
          font-size: 18px;
        }
        @media (max-width: 575.98px) {
            font-size: 16px;
        }
    }
    
    button.faq__question-button.font-weight-bold {
        color: #ec3529;

        svg {
          transform: rotate(90deg);
        }
    }

    .faq {
        width: 100%;
        padding-top: 65px;
        padding-bottom: 80px;
      
        &__title {
          margin: 0;
          padding-bottom: 25px;
        }
      
        &__question {
          max-width: 350px;
          width: 100%;
          border-bottom: 1px solid $light-grayish-blue;
        }
      
        &__question-button {
          width: 100%;
          display: flex;
          justify-content: space-between;
          border: none;
          background-color: transparent;
          padding: 0px;
          cursor: pointer;
      
          padding-top: 18px;
          padding-bottom: 18px;

          display: grid;
          grid-template-columns: 1fr 30px;
          text-align: left;
          align-items: center;
          transition: all 350ms ease-out;
      
          &:hover {
            color: #ec3529;
            svg{
              transition: all 350ms ease-out;
            }
          }

          svg {
            width: 20px;
            height: 20px;
            transition: all 350ms ease-out;

            @media (max-width: 1024px) {
              width: 16px;
              height: 16px;
            }
            
            @media (max-width: 575.98px) {
              width: 16px;
              height: 16px;
            }
          }
        }
      
        &__desc {
          margin-top: 0;
          margin-bottom: 0;
          height: 0;
          overflow: hidden;
          transition: all 350ms ease-out;
          font-size: 16px;
          text-align: left;
          font-weight: 300;

          @media (max-width: 1024px) {
            font-size: 16px;
          }
          
          @media (max-width: 575.98px) {
              font-size: 14px;
          }
        }
    }
`;