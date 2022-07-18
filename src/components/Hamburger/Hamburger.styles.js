import styled from 'styled-components';

export const HamburgerButton = styled.div`
  display: block;
  position: relative;

    .hamburger-box {
      display: grid;
      justify-content: right;
    }

    .hamburger {
      position: relative;
      display: block;
      cursor: pointer;
    }
    
    .line{
      width: 30px;
      height: 3px;
      background-color: #262626;
      display: block;
      margin: 6px auto;
      -webkit-transition: all 0.2s ease-in-out;
      -o-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      border-radius: 50px;

      @media (max-width: 575.98px) {
        height: 3px;
      }    
      
    }
    .hamburger.active{
      transition: all 0.2s ease-in-out;
      transition-delay: 0.4s;
      transform: rotate(45deg);
    }
    
    .hamburger.active .line:nth-child(2){
      width: 0px;
    }
    
    .hamburger.active .line:nth-child(1),
    .hamburger.active .line:nth-child(3){
      transition-delay: 0.2s;
    }
    
    .hamburger.active .line:nth-child(1){
      transform: translateY(13px);
    }
    
    .hamburger.active .line:nth-child(3){
      transform: translateY(-5px) rotate(90deg);
    }
`;
