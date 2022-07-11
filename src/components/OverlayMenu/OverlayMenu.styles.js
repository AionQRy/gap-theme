import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  opacity: ${props => (props.menuOpen ? '1' : '0')};
  transform: ${props =>
    props.menuOpen ? 'translateX(0%)' : 'translateX(-100%)'};
  z-index: 100000;
  background: #fff;
  left: 0px;
  padding: 2em 2em;
  transition: all 0.3s ease;
  top: 0;
  display: grid;
  grid-template-rows: 50px 1fr 100px;
  
  @media (max-width: 1024px) {
    padding: 2em 2em;
  }
  @media (max-width: 575.98px) {
    padding: 1em 1.5em;
  }

  .overlayMenu {
    text-align: center;
    list-style-type: none;
    margin: 0;

    li {
      margin: 0 0 20px 0;
    }

    li.overlayActive {
      color: #ee2562;
    }

    a {
      font-size: 2rem;
      color: #fff;
      transition: all 0.3s ease;
      text-decoration: none;

      :hover {
        color: #ee2562;
      }
    }
  }

  .close-btn svg {
    position: relative;
    cursor: pointer;
    transition: all 1s ease;
    outline: none;

    :hover {
      transform: rotate(180deg);
    }
  }
  
  ul {
    padding: 0;
    margin: 0;
    li{
      list-style: none;
    }
  }
  
  img{
    display: block;
    max-width: 90px;
    margin: 0;
  }

  .top-overlay {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    align-items: center;

    svg {
      stroke: #fff;
      background: #ec3529;
      border-radius: 50px;
      height: 35px;
      width: 35px;
      padding: 5px;
    }
  }

  .top-overlay .close-btn {
    text-align: right;
  }
  .overlay-menu {
    padding: 2em 0;

    li {
      position: relative;
      display: block;
      margin: 0;
      list-style: none;
      border-bottom: 1px solid gainsboro;

      a {
        color: #262626;
        text-decoration: auto;
        font-size: 18px;
        font-weight: 600;
        padding: 15px 0;
        display: block;
        text-transform: capitalize;
        
        :hover {
          color: #ec3529;
        }
        
        ul.sub-menu{
          border-top: 1px solid #dcdcdc;
          margin-top: 15px;
          display: none;
          li{
            position: relative;
            display: block;
            a {
              padding: 10px 0;
              font-size: 16px;
              text-indent: 1em;
              text-transform: capitalize;
            }
            :last-child a{
              padding-bottom: 0;
            }
          } 

        }
      }
      span.arrow-sub_menu {
        position: absolute;
        top: 8px;
        right: 0;
        transition: all 0.3s ease;
        height: 40px;
        width: 40px;
        display: grid;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        svg {
          height: 20px;
          width: 20px;
        }
      }
      span.arrow-sub_menu.active {
        transform: rotateZ(90deg);
      }
      :last-child {
        border: 0;
      }
    }
  }
  .social-overlay {
    display: grid;
    grid-gap: 8px;

    .title-overlay {
      display: flex;
      align-items: center;

      h4 {
        font-size: 18px;
        font-weight: 600;
        line-height: 1.2;
        display: block;
      }
    }
  }
`;
