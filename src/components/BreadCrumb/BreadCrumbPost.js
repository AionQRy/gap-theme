import React from 'react'
import { Link } from "gatsby"
import { Wrapper } from "./BreadCrumb.styles"

const BreadCrumbPost = ({parent}) => {
  return (
    <Wrapper>
    {/* {console.log(pageData)} */}
    <Link to="/">
      <span>หน้าหลัก</span>
    </Link>
    <span className="divider">/</span>
    <Link to={parent.uri}>
        <span dangerouslySetInnerHTML={{ __html: parent.title }} />    
    </Link>

    {parent.CurrentTitle ? (
      <>
      <span className="divider">/</span>
      <span dangerouslySetInnerHTML={{ __html: parent.CurrentTitle }} />
      </>
    ) :      
       <>
      <span className="divider">/</span>
      <span dangerouslySetInnerHTML={{ __html: "ไม่มีชื่อบทความ" }} />
      </>
      }
  </Wrapper>
  )
}

export default BreadCrumbPost