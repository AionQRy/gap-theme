import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout/Layout"
import Notfound from "../../components/NotFound/NotFound"
import BreadCrumbPost from "../../components/BreadCrumb/BreadCrumbPost"
import PageHero from "../../components/PageHero/PageHero"
import PageNoHero from "../../components/PageHero/PageNoHero"
import Social from "../../components/Post/Social/Social"
import Term from "../../components/Post/Term/Term"
import RecentPost from "../../components/Post/RecentPost/RecentPost"


import {
    Wrapper,
    ContentWrapper,
    PostContent,
    TitleBox,
    ContentBox,
    AuthorBox,
    FeatureImagePost
} from "../../components/Post/Post.styles"

const PostTemplate = ({ data }) => (
  <Layout>
              <FeatureImagePost>
          {data.post.featuredImage ? (
            <PageHero
                img={
                    data.post.featuredImage.node.localFile.childImageSharp.gatsbyImageData 
                }
            />
            ) : <PageNoHero />
          }   
          </FeatureImagePost>
    <Wrapper>
      <ContentWrapper>
        <PostContent>
        <BreadCrumbPost
        parent={{
          uri: "/blog/all-posts",
          title: "บทความ",
          Category: data.post.title,
          CurrentTitle: data.post.title,
        }}
      />
            <TitleBox>
        
            { data.post.title ?(
                <h1 dangerouslySetInnerHTML={{ __html: data.post.title }} />
            ) : <h1 dangerouslySetInnerHTML={{ __html: "ไม่มีชื่อหน้า" }} />
            }
            </TitleBox>

            <AuthorBox>

            </AuthorBox>
            <ContentBox>
              <Social/>
                {data.post.content ?(
                <div dangerouslySetInnerHTML={{ __html: data.post.content }} />
                ) : <Notfound/> }
              <Term TermCategory={data.post.categories.nodes} TermTag={data.post.tags.nodes}/>
            </ContentBox>
            <RecentPost />      
        </PostContent>
      </ContentWrapper>
    </Wrapper>
  </Layout>
)

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    post: wpPost(id: { eq: $id }) {
      title
      content
      author {
        node {
          name
        }
      }
      date(formatString: "DD MM YYYY")
      categories {
        nodes {
          id
          name
          uri
          slug
        }
      }
      tags {
      nodes {
        name
        uri
        id
        slug
       }
     }
     featuredImage {
      node {
        id
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    }
  }
`