import React from "react"
import { Link } from "gatsby"
import { Wrapper } from "./BreadCrumb.styles"

const BreadCrumb = ({ parent, pageData }) => (
  <Wrapper>
    {console.log(pageData)}
    <Link to="/">
      <span>Home</span>
    </Link>

    {parent ? (
      <>
      <span className="divider">/</span>
      <Link to={pageData.uri}>
        <span dangerouslySetInnerHTML={{ __html: pageData.title }} />
      </Link>
      <span className="divider">/</span>
      <span dangerouslySetInnerHTML={{ __html: parent.title }} />
      </>
    ) :      
       <>
      <span className="divider">/</span>
      <span dangerouslySetInnerHTML={{ __html: pageData.title }} />
      </>
      }
  </Wrapper>
)

export default BreadCrumb