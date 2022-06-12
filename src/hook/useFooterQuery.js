import { useStaticQuery, graphql } from "gatsby"

export const useFooterQuery = () => {
  const data = useStaticQuery(graphql`
  query FooterQuery {
    socialFooter : allWp {
    nodes {
     mso : social {
        social {
          email
          line
          linkedin
          telegram
          telephone
          facebook
          twitter
        }
      }
    }
  }
  }

  `)

  return data
}