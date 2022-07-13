import { graphql, useStaticQuery } from "gatsby";

export const useRelatedpostQuery = () => {
    const data = useStaticQuery(graphql`
    query RelatedQuery {
        allWpPost(filter: {terms: {nodes: {elemMatch: {slug: {eq: "football"}}}}}) {
            edges {
            node {
                id
                title
                slug
                uri
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
            }
            }
        }
    }

    `)

    return data
}