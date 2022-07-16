import React from 'react'
import { RelatedWrapper } from './RelatedPost.styles'
import { useRelatedpostQuery } from '../../hook/useRelatedpostQuery'

const RelatedPost = ({currentPost}) => {

  const allWpPost = useRelatedpostQuery();
  const all = allWpPost.allWpPost.edges;
  const listTerm = currentPost.categories.nodes;
  const allTerm = all;
  console.log(listTerm);
  console.log(allTerm);

  // const includesArr = allTerm.includes(listTerm);
  // console.log(includesArr);
  return (
    <RelatedWrapper>
        RelatedPost
  <h2>{currentPost.slug}</h2>
  <p>current term</p>
  <ul>
  {
    listTerm.map( currentTerm => (
      <li key={currentTerm.slug}>
        {currentTerm.name}
      </li>
    ))
  } 
  </ul>

<p>all post</p>
  {
  all.filter(
    allList => listTerm && allList.node.categories.nodes.includes(listTerm)
    ).map( FilteredallList => (
      <li key={FilteredallList.node.id}>
        {FilteredallList.node.title}
      </li>
  ) )
  }


        </RelatedWrapper>
  )
}

export default RelatedPost