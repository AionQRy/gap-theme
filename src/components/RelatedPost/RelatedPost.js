import React from 'react'
import { RelatedContainer, RelatedMainWrapper, RelatedWrapper } from './RelatedPost.styles'
import { useRelatedpostQuery } from '../../hook/useRelatedpostQuery'
import CardRelated from './CardRelated/CardRelated'

const RelatedPost = ({currentPost}) => {

  const allWpPost = useRelatedpostQuery();
  const all = allWpPost.allWpPost.edges;
  console.log(currentPost);
  // console.log(console.log('allpost = ' + JSON.stringify(all)));

  const arr = [1, 2, 3, 4]
const brr = [2]
const res = arr.filter((f) => brr.includes(f))
console.log(res)

console.log(currentPost);

//เช็ค post ทั้งหมดว่ามี post นี้ไหม
const ob1 = all.filter((f) => 
  !f.node.slug.includes(currentPost.slug) 
);
console.log(ob1);

  return (
    <RelatedWrapper>        
          { all.length > 1 ? (     
             <RelatedMainWrapper>
              <h2>บทความที่คล้ายกัน</h2>
              <RelatedContainer>
                  {
                   all.filter(
                     allList => !allList.node.slug.includes(currentPost.slug)
                     ).map( FilteredallList => (
       
                       <CardRelated data={FilteredallList.node} />
                   ) )
                 }
              </RelatedContainer>
 
             </RelatedMainWrapper>
          ): null }
     

      </RelatedWrapper>
  )
}

export default RelatedPost