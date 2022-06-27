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
      menu: wpMenu(slug: { eq: "primary-menu" }) {
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