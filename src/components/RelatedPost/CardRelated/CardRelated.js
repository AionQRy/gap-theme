import React from "react";
import {
  CardRelatedWraper,
  ThumbnaillCardWrapper,
  ExcerptCardWrapper,
  TitleCardWrapper,
  MainCardRelated,
  TermCardRelated,
} from "./CardRelated.styles";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const CardRelated = (data) => {
  return (
    <CardRelatedWraper
      key={data.data.id}
      className={`cardRelated_Post CardReleatedPost_Wrapper ${data.data.slug}`}
    >
      <ThumbnaillCardWrapper>
        <Link to={`/blog${data.data.uri}`}>
          <GatsbyImage
            image={
              data.data.featuredImage.node.localFile.childImageSharp
                .gatsbyImageData
            }
            placeholder="blurred"
            alt={data.data.title}
          />
        </Link>
      </ThumbnaillCardWrapper>
      <MainCardRelated>
        <TermCardRelated>
            <ul>
            {data.data.categories.nodes.length !== 0
                ? data.data.categories.nodes.map((TermName) => (
                    <li key={TermName.id} className={TermName.slug}>
                    <span className="textPost">{TermName.name}</span>
                    </li>
                ))
                : null}
            </ul>
        </TermCardRelated>
        <TitleCardWrapper>
          <h3>
            <Link to={`/blog${data.data.uri}`}>{data.data.title}</Link>
          </h3>
        </TitleCardWrapper>
        <ExcerptCardWrapper
          dangerouslySetInnerHTML={{ __html: data.data.excerpt }}
        />
      </MainCardRelated>
    </CardRelatedWraper>
  );
};

export default CardRelated;
