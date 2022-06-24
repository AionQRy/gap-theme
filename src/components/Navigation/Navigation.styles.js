import styled from 'styled-components';

export const Wrapper = styled.nav`
  font-family: 'Open Sans','Kanit',sans-serif;
  text-transform: capitalize;
  color: #212121;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1px;
  display: none;

  .nav-active {
    color: #fff;
    background: #ec3529;
    border-radius: 50px;
    :hover{
      color: #fff;
    }
  }

  @media (min-width: 992px) {
    font-size: 0.85rem;
    display: block;
  }

  @media (min-width: 1200px) {
    font-size: 1rem;
  }
  ul.menu-list {
    display: flex;
    align-items: center;
    gap: 7px;
  }
  ul{
    margin: 0;
  }
  ul li {
    display: block;
    margin: 0;
    float: left;
    position: relative;

    a {
      display: flex;
      transition: all 0.2s ease;
      text-decoration: none;
      color: #000;
      padding: 10px 20px;
      font-size: 16px;
      font-weight: 600;
      line-height: 1.2;
      gap: 3px;

      div.arrow-box {
          display: block;
          line-height: 1;

        svg{
          width: 19px;
          height: 19px;
        }
      }
    }
  }

  ul li:last-child {
    margin: 0;
  }

  ul li:hover > ul {
    display: block;
  }

  ul li a:hover {
    color: #ec3529;
  }

  ul ul {
    animation: fadeInMenu 0.3s both ease-in;
    display: none;
    position: absolute;
    left: 0;
    margin: 0;
    top: 42px;
    text-transform: none;
    background: #fff;
    padding: 15px;
    box-shadow: 0px 6px 23px -10px rgb(58 58 58 / 22%);
    
    :after{
      content: '';
      position: absolute;
      width: 0px;
      height: 0px;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid #fff;
      top: -9px;
      left: 10px;
    }
  }

  ul ul li {
    width: auto;
    min-width: 170px;

    :last-child a{
      padding-bottom: 0;
      border-bottom: 0;
    }
  }
  ul.sub-menu li:first-child a {
    padding-top: 0;
  }

  ul ul li a {
    padding: 10px 0px;
    text-decoration: none;
    white-space: nowrap;
    border-bottom: 1px solid rgb(224 224 224 / 44%);
    text-transform: capitalize;
    font-size: 14px;
    font-weight: 500;
  }

  @keyframes fadeInMenu {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
