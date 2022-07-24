import React from 'react'
import { RelatedContainer, RelatedMainWrapper, RelatedWrapper } from './RelatedPost.styles'
import { useRelatedpostQuery } from '../../hook/useRelatedpostQuery'
import CardRelated from './CardRelated/CardRelated'

const RelatedPost = ({currentPost}) => {

  const allWpPost = useRelatedpostQuery();
  const all = allWpPost.allWpPost.edges;

  const currentTwo = [currentPost];
  // console.log("currentTwo",JSON.stringify(currentTwo));
  console.log("currentTwo",currentTwo);
  // console.log(console.log('allpost = ' + JSON.stringify(all)));


  let Users = all.filter((itemA)=> {
    return !currentTwo.find((itemB)=> {
      return itemA.node.id.includes(itemB.id);
    })
  })
  
   console.log("Different: ",Users);

// console.log("AllPost",JSON.stringify(all));
// console.log("CurrentPost",JSON.stringify(currentPost));

//เช็ค post ทั้งหมดว่ามี post นี้ไหม
// const ob1 = all.filter((f) => 
//   !f.node.slug.includes(currentPost.slug) 
// );
// console.log(ob1);

  return (
    <RelatedWrapper>        
          { all.length > 1 ? (     
             <RelatedMainWrapper>
              <h2>บทความที่คล้ายกัน</h2>
              <RelatedContainer>
                  {
                   all.slice(0,3).filter(
                     allList => !allList.node.slug.includes(currentPost.slug)
                     ).map( FilteredallList => (
                        // <h4>{FilteredallList.id }</h4>
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