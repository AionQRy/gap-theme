import React from 'react';
import { MainWrapper, RecantPost, SectionWrapper } from './RecentPostSection.styles';
import CardRelated from '../../RelatedPost/CardRelated/CardRelated';
import { useRelatedpostQuery } from '../../../hook/useRelatedpostQuery';

const RecentPostSection = () => {
    const allWpPost = useRelatedpostQuery();
    const all = allWpPost.allWpPost.edges;
    console.log(all);
  return (
    <SectionWrapper>
        <div className="v-container">
            <MainWrapper>
                <div className="TitleService">
                    <h2>อัพเดทข่าวสารล่าสุด</h2>
                    <p>บทความต่างๆ เกี่ยวกับการทำเว็บไซต์ WordPress โดยทีมงาน รับทำ WordPress</p>
                </div>
                <RecantPost>
                {
                    all.slice(0,3).map( FilteredallList => (   
                        <CardRelated data={FilteredallList.node} />
                    ) )
                    }
                </RecantPost>
            </MainWrapper>
        </div>
    </SectionWrapper>
  )
}

export default RecentPostSection