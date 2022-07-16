import React from 'react'
import { RelatedWrapper } from './RelatedPost.styles'
import { useRelatedpostQuery } from '../../hook/useRelatedpostQuery'

const RelatedPost = (currentPost) => {

  const allWpPost = useRelatedpostQuery();
    console.log(allWpPost);
  return (
    <RelatedWrapper>
        RelatedPost
        </RelatedWrapper>
  )
}

export default RelatedPost