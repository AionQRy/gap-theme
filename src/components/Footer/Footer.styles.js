import styled from 'styled-components';
import bgFooter from '../../images/bg-footer-2.png';

export const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  section.section-footer{
    padding: 6em 0;
    position: relative;
    background: #fff;
    background-image: url(${bgFooter});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;

    @media (max-width: 1024px) and (min-width: 992px){
      padding: 2em 2em;
      background-position: right;
    }
    @media (max-width: 991.98px) {
      padding: 2em 2em;
      background-position: right;
    }
    @media (max-width: 575.98px) {
      padding: 2em 1.5em;
      background-position: center;
    }
  }
  section.section-footer .main-footer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 15px;

    @media (max-width: 1024px) and (min-width: 992px){
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 991.98px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 575.98px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  h3 {
    color: #262626;
    font-weight: 500;
    font-size: 23px;
    padding-bottom: 16px;
    position: relative;
    margin-bottom: 15px;
    :after {
      content: '';
      background: #ec3529;
      width: 30px;
      height: 4px;
      display: block;
      position: absolute;
      bottom: 0;
      border-radius: 50px;
    }
    @media (max-width: 1024px) and (min-width: 992px){
      font-size: 21px;
    }
    @media (max-width: 991.98px) {
      font-size: 21px;
    }
    @media (max-width: 575.98px) {
      font-size: 21px;
    }
  }

  p {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-weight: 400;
    color: #262626;
    @media (max-width: 575.98px) {
      font-size: 14px;
    }
  }

  h4 {
    font-size: 20px;
    font-weight: 600;
    color: #ec3529;
  }

  ul.ul-contact li > a {
      display: inline-block;
      color: #fff;
      background: #ec3529;
      padding: 5px 15px;
      text-decoration: auto;
      border-radius: 50px;
      font-size: 16px;
      font-weight: 300;
      background: linear-gradient(135deg, #ec3529 35%,#940404 100%);
      line-height: 1.2;
      margin-left: 5px
  }

  ul.ul-contact {
    display: grid;
    grid-gap: 13px;
  }

  ul.ul-contact li {
      font-size: 16px;
      font-weight: 600;
  }
  ul li {
      list-style: none;
      margin: 0;
  }

  ul {
      padding: 0;
      margin: 0;
  }

  .grid-column .detail {
    display: grid;
    grid-gap: 15px;
  }

  ul.ul-service {
      display: grid;
      grid-gap: 5px;
  }

  ul.ul-service li a {
    font-size: 16px;
    color: #262626;
    text-decoration: auto;
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 4px;
    :hover{
        color: #ec3529;
    }
  }

  ul.ul-service li {
      display: flex;
      gap: 5px;
      align-items: center;
  }

  ul.ul-service li svg {
      width: 18px;
      height: 18px;
      stroke: #ec3529;
  }

  .btn-next {
    display: flex;
    color: #fff;
    background: #ec3529;
    padding: 10px 15px;
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
    margin-bottom: 15px;
  }

  .btn-next svg {
      width: 18px;
      height: 18px;
  }
`;