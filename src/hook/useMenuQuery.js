import { useStaticQuery, graphql } from "gatsby"

export const useMenuQuery = () => {
  const data = useStaticQuery(graphql`
  query HeaderQuery {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
      menu: wpMenu(name: { eq: "Primary Menu" }) {
        menuItems {
          nodes {
            label
            url
            parentId
            id
            childItems {
              nodes {
                label
                url
                id
              }
            }
          }
        }
      }
    }
  `)

  return data
}