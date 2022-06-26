import styled from 'styled-components';

export const Wrapper = styled.header`
  padding: 20px 2em;
  background: #fff;
  border-bottom: 1px solid #e7e7e7;
  position: fixed;
  width: 100%;
  z-index: 10000;
  display: none;
  
  @media (max-width: 1024px) {
    display: block;
  }
  @media (max-width: 575.98px) {
    padding: 15px 1.5em;
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
  grid-gap: 20px;

  img {
    width: 90px;
    margin: 0;
    padding: 0;
  }
`;