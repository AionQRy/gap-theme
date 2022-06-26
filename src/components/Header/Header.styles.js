import styled from 'styled-components';

export const Wrapper = styled.header`
  background: #fff;
  border-bottom: 1px solid #e7e7e7;
  position: fixed;
  width: 100%;
  z-index: 10000;
  display: block;
  
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 1em 0;
  grid-gap: 20px;

  .box-navigation {
    display: grid;
    justify-content: right;
  }

  img {
    width: 200px;
    margin: 0;
    padding: 0;
  }
`;
