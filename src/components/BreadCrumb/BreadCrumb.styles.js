import styled from 'styled-components';

export const Wrapper = styled.div`
font-weight: 600;
font-size: 16px;
margin: 0;
padding: 15px 0;
border-bottom: 1px solid rgb(0 0 0 / 9%);

@media (max-width: 1024px) {
  padding-top: 0;
}

  a {
    text-decoration: auto;
    color: #ec3529;
    font-weight: 600;
    
    :hover{
      opacity: 0.8;
    }
  }
  span{
    font-weight: 400;
  }
  .divider {
    margin: 0 10px;
  }

  .mainBreadCrumb{
    font-weight: 400;
    color: #262626;
  }
`;
