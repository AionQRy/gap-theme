import React from 'react';
import { MainWrapper, RecantPost, SectionWrapper } from './RecentPostSection.styles';
import CardRelated from '../../RelatedPost/CardRelated/CardRelated';
import { useRelatedpostQuery } from '../../../hook/useRelatedpostQuery';

const RecentPostSection = ({topTitle , detail}) => {
    const allWpPost = useRelatedpostQuery();
    const all = allWpPost.allWpPost.edges;
  return (
    <SectionWrapper>
        <div className="v-container">
            <MainWrapper>
                <div className="TitleService">
                    <h2>{topTitle}</h2>
                    <p>{detail}</p>
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