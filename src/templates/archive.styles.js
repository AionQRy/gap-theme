import styled from "styled-components"
import { Link } from "gatsby"

export const Wrapper = styled.div`
max-width: 1140px;
margin: 0 auto;
padding: 5em 0;

@media (max-width: 1024px) {
  padding: 2em;
}

@media (max-width: 575.98px) {
  padding: 2em 1.5em;
}
`

export const ContentWrapper = styled.div`
  display: block;
`

export const PageContent = styled.article`
display: grid;
grid-gap: 50px;

  h1{
    margin: 0;
    font-size: 56px;
    font-weight: 500;
    display: grid;
    line-height: 1.1;
    text-transform: capitalize;
    color: #262626;
    gap: 5px;
    
    :before{
        content: 'รับทำเว็บไซต์';
        display: block;
        height: 100%;
        background: #ec3529;
        width: 100%;
        font-size: 14px;
        text-transform: capitalize;
        color: #fff;
        padding: 8px 10px 5px;
        border-radius: 50px;
        font-weight: 300;
        line-height: 1.2;
        max-width: 115px;
        text-align: center;
    }
    @media (max-width: 1024px) {
      font-size: 38px;
      grid-gap: 10px;
    }
    @media (max-width: 575.98px) {
      font-size: 34px;
    }
  }

  @media (max-width: 1024px) {
    grid-gap: 20px;
  }

  @media (max-width: 575.98px) {
    grid-gap: 20px;
  }
`
export const ArchiveWrapper = styled.div`


`
export const ArticleBox = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
grid-gap: 50px;

.Article_Post:first-child {
  grid-column: span 3;
  display: grid;
  grid-template-columns: 4fr 3fr;
  grid-gap: 40px;

  h3 a {
    font-size: 52px;
    -webkit-line-clamp: 4;
    line-height: 1.15;
    font-weight: 500;
  }

  p {
    font-size: 18px;
    font-weight: 300;
  }

  img {
    height: 365px;
  }
}

@media (max-width: 1024px) {
  grid-gap: 20px;
  
  .Article_Post:first-child{
    grid-template-columns: 1fr 1fr;
    grid-gap: 25px;

    h3 a {
      font-size: 33px;
      -webkit-line-clamp: 4;
      line-height: 1.15;
      font-weight: 500;
    }

    p {
      font-size: 14px;
    }

    img {
      height: 220px;
    }
  }
}

@media (max-width: 575.98px) {
grid-template-columns: repeat(1,1fr);
grid-gap: 20px;

  .Article_Post:first-child {
    grid-column: span 1;
    grid-template-columns: 1fr;
    grid-gap: 10px;

    h3 a {
      font-size: 18px;
      -webkit-line-clamp: 2;
      font-weight: 400;
      line-height: 1.4;
    }

  }
}
`
export const PaginationBox = styled.div`


`
export const StyledH2 = styled.h2`
  font-weight: 500;
  font-size: 1.8rem;
  :hover {
    color: #ee2562;
  }
`

export const StyledDate = styled.div`
  font-family: "Teko";
  font-size: 1.1rem;
  font-weight: 600;
`

export const StyledReadMore = styled(Link)`
  font-family: "Teko", Arial, Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: 800;
  color: #fff;
  position: relative;
  width: 90px;
  height: 30px;
  display: block;
  background: #000;
  padding: 3px 0 0 10px;
  margin-bottom: 30px;

  :after {
    left: 100%;
    top: 50%;
    border: solid transparent;
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-left-color: #000;
    border-width: 15px;
    margin-top: -15px;
  }

  :hover {
    background: #ee2562;
  }

  :hover:after {
    border-left-color: #ee2562;
  }
`
