import React from 'react'
import { RelatedWrapper } from './RelatedPost.styles'
import { useRelatedpostQuery } from '../../hook/useRelatedpostQuery'

const RelatedPost = (currentPost) => {
    console.log(useRelatedpostQuery);
  return (
    <RelatedWrapper>
        RelatedPost
        </RelatedWrapper>
  )
}

export default RelatedPost