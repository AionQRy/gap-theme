import React from 'react'
import { WhyWrapper } from './WhyWordpress.styles'
import { GatsbyImage } from 'gatsby-plugin-image'

const WhyWordpress = ({topTitle, detail, options}) => {
  return (
    <WhyWrapper>
        <div className="BoxDetail">
            <div className="TitleOption">
            {topTitle.length > 0 ? (
                <h2>{topTitle}</h2>
            ):null }
            {detail.length > 0 ? (
                <p>{detail}</p>
            ):null }
            </div>
            <div className="v-container">
            <div className="Detail">
                      {options.length !== 0
                              ? options.map((data) => (
                                <div className="CardOption">
                                  <div className="image-option">      
                                    <GatsbyImage
                                      layout="constrained"
                                      image={
                                        data.iconWhy.localFile.childImageSharp.gatsbyImageData
                                      }
                                      formats={["svg", "webp"]}
                                      placeholder="blurred"
                                      alt={data.labelWhy}
                                    />                  
                                  </div>
                                  {data.labelWhy.length > 0 ? (
                                  <div className="title-option">
                                    <h4>{data.labelWhy}</h4>
                                  </div>
                                  ):null }
                                  {data.detailWhy.length > 0 ? (
                                  <div className="detail-option">
                                      <p>{data.detailWhy}</p>
                                  </div>
                                  ):null }
                                </div>
                              ))
                              : null
                      }

                </div>
            </div>
        </div>
        </WhyWrapper>
  )
}

export default WhyWordpress