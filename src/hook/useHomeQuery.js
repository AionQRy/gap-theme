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
      repeaterAbout {
        detailAbout
        iconAbout {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        labelAbout
        imageAbout {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        linkPost {
          ... on WpPost {
            id
            uri
          }
        }
      }
      titleService
      titleWhy
      subTitleWhy
      subTitleService
      subTitleOption
      subTitleBlog
      subTitleFaq
      repeaterService {
        detailService
        labelService
        linkPost {
          ... on WpPost {
            id
            uri
          }
        }
        iconService {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      repeaterWhy {
        labelWhy
        detailWhy
        iconWhy {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
}

  `)

  return data
}