import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout/Layout"
import Notfound from "../../components/NotFound/NotFound"
// import BreadCrumb from "../../components/BreadCrumb/BreadCrumb"
import PageHero from "../../components/PageHero/PageHero"
import PageNoHero from "../../components/PageHero/PageNoHero"

import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import {
    FacebookShareCount,
    PinterestShareCount,
    FacebookShareButton,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
    TwitterShareButton,
    TelegramShareButton,
    LineShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    TelegramIcon,
    LineIcon,
} from "react-share";
import {
    Wrapper,
    ContentWrapper,
    PostContent,
    SocialWrapper,
    TitleBox,
    ContentBox,
    AuthorBox,
    TermBox,
    FeatureImagePost
} from "../../components/Post/Post.styles"

const shareUrl = 'http://github.com';
const title = 'GitHub';

const PostTemplate = ({ data }) => (
  <Layout>
    <Wrapper>
      {/* <BreadCrumb
        parent={{
          uri: "/blog/all-posts",
          title: "blog",
        }}
      /> */}
      <ContentWrapper>
        {/* <PostSidebar
          date={data.post.date}
          author={data.post.author.node.name}
          categories={data.post.categories.nodes}
        /> */}
        <PostContent>
          
          <TitleBox>
 
            { data.post.title ?(
                <h1 dangerouslySetInnerHTML={{ __html: data.post.title }} />
            ) : <h1 dangerouslySetInnerHTML={{ __html: "ไม่มีชื่อหน้า" }} />
            }
          </TitleBox>
          
          <AuthorBox>

          </AuthorBox>
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

          <ContentBox>
            {data.post.content ?(
            <div dangerouslySetInnerHTML={{ __html: data.post.content }} />
             ) : <Notfound/> }
          </ContentBox>

          <TermBox>
              <div className="TermList_Box Category_Box">
                    <div className="TitleObject">
                        <h4 dangerouslySetInnerHTML={{ __html: "หมวดหมู่:" }} />
                    </div>
                    <div className="DetailBox">
                        <ul className="NavList_Term">                      
                            {data.post.categories.nodes.map( CategoryList => 
                                <li key={CategoryList.id} className="ListTerm">
                                    <Link to={CategoryList.uri}  className="ListTermItem">
                                        <span dangerouslySetInnerHTML={{ __html: CategoryList.name }} />  
                                    </Link>                                 
                                </li>
                            )}                    
                        </ul>
                    </div>
              </div>
              <div className="TermList_Box Tag_Box">
                    <div className="TitleObject">
                        <h4 dangerouslySetInnerHTML={{ __html: "แท็ก:" }} />
                    </div>
                    <div className="DetailBox">
                        <ul className="NavList_Term">                      
                            {data.post.tags.nodes.map( TagsList => 
                                <li key={TagsList.id} className="ListTerm">
                                    <Link to={TagsList.uri}  className="ListTermItem">
                                        <span dangerouslySetInnerHTML={{ __html: TagsList.name }} />  
                                    </Link>                                 
                                </li>
                            )}                    
                        </ul>
                    </div>
              </div>            
          </TermBox>
            <SocialWrapper>
                <FacebookShareButton
                url={shareUrl}
                quote={title}
                className="Demo__some-network__share-button"
            >
                <FacebookIcon size={32} round />
            </FacebookShareButton>
            </SocialWrapper>
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