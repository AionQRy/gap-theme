import { useStaticQuery, graphql } from "gatsby"

export const useHomeQuery = () => {
  const data = useStaticQuery(graphql`
query HomeQuery {
    HomePage: wpPage(isFrontPage: {eq: true}) {
    id
    title
    home {
      faq {
        faqDetail
        faqText
      }
      labelBlog
      labelFaq
      labelOption
      optionsGrid {
        detail
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        title
      }
      titleBlog
      titleFaq
      titleOption
    }
  }
}

  `)

  return data
}