import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`

export const ContentWrapper = styled.div`
  display: grid;
  padding: 5em 0;
  grid-gap: 60px;
  width: 100%;
  position: relative;

  @media (max-width: 1024px) {
    padding: 2em 2em;
    grid-gap: 25px;
  }
  @media (max-width: 575.98px) {
    padding: 2em 1.5em;
  }
`

export const PostContent = styled.article`
  display: grid;
  grid-gap: 35px;
  width: 100%;
  position: relative;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-gap: 25px;
  }
  @media (max-width: 575.98px) {
    grid-gap: 20px;
  }
`
export const TitleBox = styled.div`
  h1{
    margin: 0;
    font-size: 56px;
    font-weight: 500;
    display: grid;
    line-height: 1.1;
    text-transform: capitalize;
    color: #262626;
    
    :before{
        content: 'รับทำเว็บไซต์';
        display: block;
        height: 100%;
        background: #ec3529;
        width: 100%;
        font-size: 14px;
        text-transform: capitalize;
        color: #fff;
        padding: 5px 10px;
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
`
export const ContentBox = styled.div`
display: block;
max-width: 800px;
margin: 0 auto;

  div{
    p{
      font-size: 16px;
    }
      
    img {
      object-fit: cover;
      display: block;
      height: auto;
      width: auto;
      padding-top: 15px;     
    }
  }
`
export const AuthorBox = styled.div`
ul {
  margin: 0;
  padding: 0;
  display: flex;
  gap: 8px;
  align-items: center;

  @media (max-width: 575.98px) {
    display: grid;
    grid-template-columns: 1fr 1fr;

    li.PhoneCall {
      grid-column: span 2;
    }
  }

  li {
    list-style: none;
    display: flex;
    background: #ec352929;
    line-height: 1.2;
    padding: 6px 15px;
    gap: 5px;
    align-items: center;
    margin: 0;
    border-radius: 50px;
    justify-content: center;
    font-size: 14px;
    font-weight: 400;

    svg {
      stroke: #ec3529;
      width: 16px;
      height: 16px;
    }

    @media (max-width: 575.98px) {
      padding: 8px 15px;
    }
  }

  li.AuthorBar_Post span {
    color: #ec3529;
    font-weight: 600;
  }

  li.PhoneCall span,
  li.PhoneCall span a {
    color: #ec3529;
    text-decoration: auto;
    font-weight: 400;
  }
}
`
export const FeatureImagePost = styled.div`
  margin: 0 auto;
`