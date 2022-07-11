import React from 'react'
import { RecentTitle, RecentWrapper } from './RecentPost.styles'
const RecentPost = () => {
  return (
    <RecentWrapper>
        <RecentTitle>
            <h3 dangerouslySetInnerHTML={{ __html: "บทความล่าสุด" }}  />   
        </RecentTitle>     
    </RecentWrapper>
  )
}

export default RecentPost