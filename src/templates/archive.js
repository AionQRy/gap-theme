
import React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout/Layout"
// import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
// import ArchiveSidebar from "../components/ArchiveSidebar/ArchiveSidebar"
// import Pagination from "../components/Pagination/Pagination"

import {
  Wrapper,
  ContentWrapper,
  PageContent,
  StyledH2,
  StyledDate,
  StyledReadMore,
  ArchiveWrapper,
  ArticleBox,
  PaginationBox,
} from "./ArchiveStyle/archive.styles"
import Article from "../components/Article/Article"

const archiveTemplate = ({
  data: { allWpPost },
  pageContext: { catId, catName, catUri, categories, numPages, currentPage },
}) => (
  <Layout>
    <StaticImage
      src="../images/archive_headerimage.png"
      placeholder="TRACED_SVG"
      width={1920}
      height={300}
      alt="Archive Hero"
    />
    <Wrapper>
      {/* <BreadCrumb
        parent={{
          uri: "/blog/all-posts/",
          title: "blog",
        }}
      /> */}
      <ContentWrapper>
        {/* <ArchiveSidebar catId={catId} categories={categories.edges} /> */}
        <PageContent>
          <div className="TitleCat">
            <h1 dangerouslySetInnerHTML={{ __html: catName }} />
          </div>       
          <ArchiveWrapper>
            <ArticleBox>
              {allWpPost.edges.map(post => (
                <Article data={post.node} />
              ))}
            </ArticleBox>
            <PaginationBox>
              {/* <Pagination
                catUri={catUri}
                page={currentPage}
                totalPages={numPages}
              /> */}
            </PaginationBox>

          </ArchiveWrapper>      
        </PageContent>
      </ContentWrapper>
    </Wrapper>
  </Layout>
)

export default archiveTemplate

export const pageQuery = graphql`
  query($catId: String!, $skip: Int!, $limit: Int!) {
    allWpPost(
      filter: { categories: { nodes: { elemMatch: { id: { eq: $catId } } } } }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
            id
            title
            slug
            uri
            excerpt
            date(formatString: "DD/MM/YYYY")
            featuredImage {
              node {
                  id
                  localFile {
                    childImageSharp {
                      gatsbyImageData(sizes: "large")
                    }
                  }
              }
            }          
            categories {
                nodes {
                    id
                    slug
                    uri
                    name
                }
            }
            }
      }
    }
  }
`