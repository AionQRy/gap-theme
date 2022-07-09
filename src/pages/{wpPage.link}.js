
import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
// Components
import Layout from "../components/Layout/Layout"
import PageHero from "../components/PageHero/PageHero"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
import PageNoHero from "../components/PageHero/PageNoHero"
import NotFound from "../components/NotFound/NotFound"
// import PageSidebar from "../components/PageSidebar/PageSidebar"

const Wrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`

const ContentWrapper = styled.div`
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

const PageContent = styled.article`
  display: grid;
  grid-gap: 35px;
  width: 100%;
  position: relative;

  @media (max-width: 1024px) {
    grid-gap: 25px;
  }
  @media (max-width: 575.98px) {
    grid-gap: 20px;
  }

  h1{
    margin: 0;
    font-size: 56px;
    font-weight: 600;
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
`

const PageTemplate = ({ data }) => (

  <Layout>
    {/* {data.wpPage.featuredImage ? (
      <PageHero
        img={
          data.wpPage.featuredImage.node.localFile.childImageSharp
            .gatsbyImageData
        }
      />
    ) : <PageNoHero />
    }    */}
    <Wrapper>    
      <ContentWrapper>
      <BreadCrumb parent={data.wpPage.wpParent && data.wpPage.wpParent.node} pageData={data.wpPage} />
        <PageContent>
          <h1 dangerouslySetInnerHTML={{ __html: data.wpPage.title }} />
          {data.wpPage.content ? (
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} />
          ) : <NotFound />
          }
          
          
        </PageContent>
      </ContentWrapper>
    </Wrapper>
  </Layout>
)

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      id
      title
      content
      status
      uri
      featuredImage {
        node {
          id
          localFile {
            childImageSharp {
              gatsbyImageData(width: 1920, placeholder: TRACED_SVG)
            }
          }
        }
      }
      wpChildren {
        nodes {
          ... on WpPage {
            id
            uri
            title
          }
        }
      }
      wpParent {
        node {
          ... on WpPage {
            id
            uri
            title
            wpChildren {
              nodes {
                ... on WpPage {
                  id
                  title
                  uri
                }
              }
            }
          }
        }
      }
    }
  }
`