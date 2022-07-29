import React from "react";
import {
  ArticleWraper,
  ThumbnaillCardWrapper,
  ExcerptCardWrapper,
  TitleCardWrapper,
  MainArticle,
  TermArticle,
} from "./Article.styles";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Article = (data) => {
  return (
    <ArticleWraper
      key={data.data.id}
      className={`Article_Post CardReleatedPost_Wrapper ${data.data.slug}`}
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
      <MainArticle className="MainArticle">
        <TermArticle>
            <ul>
                    <li className="Date_CardPost">
                    <span className="textPost">{data.data.date}</span>
                    </li>
            </ul>
        </TermArticle>
        <TitleCardWrapper>
          <h3>
            <Link to={`/blog${data.data.uri}`}>{data.data.title}</Link>
          </h3>
        </TitleCardWrapper>
        <ExcerptCardWrapper
          dangerouslySetInnerHTML={{ __html: data.data.excerpt }}
        />
      </MainArticle>
    </ArticleWraper>
  );
};

export default Article;
