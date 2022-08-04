import styled from "styled-components";

export const AccordionWrapper = styled.div`
    max-width: 400px;
    margin: 0;
`;
export const FaqQuestion = styled.div`
border-bottom: 1px solid rgb(0 0 0 / 9%);
max-width: 400px;
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
        height: 2rem;
        margin-bottom: 15px;
    }
  
    .faq__question-button::after {
        transition: transform 300ms ease-out;
    }
    
    .font-weight-bold::after {
        transform: rotate(720deg);
    }

    button.faq__question-button {
        font-weight: 400;
    }
    
    button.faq__question-button.font-weight-bold {
        font-weight: 500;
        color: #ec3529;
    }

    p {
        position: relative;
        display: block;
        margin: 0;
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
      
          &::after {
            content: url(../images/icon-arrow-down.svg);
            margin-right: 17px;
            transform: rotate(90deg);
          }
      
          &:hover {
            color: $soft-red;
          }
        }
      
        &__desc {
          padding-right: 17px;
          margin-top: 0;
          margin-bottom: 0;
          height: 0;
          overflow: hidden;
          transition: all 200ms ease-out;
        }
    }
`;