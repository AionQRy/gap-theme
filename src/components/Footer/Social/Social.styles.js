import styled from 'styled-components';

export const SocialStyle = styled.div`
  display: block;
  position: relative;
  ul {
    padding: 0;
    margin: 0;
  }

  ul li {
    list-style: noe;
    display: inline-block;
    padding-right: 6px;
    margin: 0;
    :last-child{
      padding-right: 0;
    }
  }

  ul li a {
    background: transparent;
    padding: 7px;
    display: block;
    border-radius: 50px;
    line-height: 0;
    border: 2px solid #262626;
    transition: all ease-in-out 400ms;
    :hover{
      transform: scale(1.25);
    }
    :hover svg{
      fill: #ffffff;
    }
  }

  ul li a svg {
    fill: #262626;
    width: 24px;
    height: 24px;
  }

  ul li.list-social.linkedin a:hover {
    background: #0a66c2;
    border-color: #0a66c2;
  }
  ul li.list-social.facebook a:hover {
    background: #0673e7;
    border-color: #0673e7;
  }
  ul li.list-social.line a:hover {
    background: #06c755;
    border-color: #06c755;
  }

  ul li.list-social.telegram a:hover {
      background: #25a3e1;
      border-color: #25a3e1;
  }

  ul li.list-social.twitter a:hover {
      background: rgb(29 155 240);
      border-color: rgb(29 155 240);
  }

  ul li.list-social.email a:hover {
      background: #ffc107;
      border-color: #ffc107;
  }

  ul li.list-social.telephone a:hover {
      background: #ec3529;
      border-color: #ec3529;
  }
`;