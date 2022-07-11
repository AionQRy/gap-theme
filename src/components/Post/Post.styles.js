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

  h1{
    margin: 0;
    font-size: 56px;
    font-weight: 500;
    display: grid;
    line-height: 1.1;
    text-transform: capitalize;
    
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
    }
    @media (max-width: 575.98px) {
      font-size: 34px;
    }
  }

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
`
export const TitleBox = styled.div`

`
export const ContentBox = styled.div`
  display: block;
  max-width: 800px;
  margin: 0 auto;
`
export const AuthorBox = styled.div`
  

`
export const FeatureImagePost = styled.div`
  margin: 0 auto;
`