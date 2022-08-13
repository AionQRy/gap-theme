import React from 'react'
import { OptionWrapper } from './OptionSection.styles'
import { GatsbyImage } from 'gatsby-plugin-image'

const OptionSection = ({topTitle, detail, options}) => {

  return (
    <OptionWrapper>
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
                                        data.image.localFile.childImageSharp.gatsbyImageData
                                      }
                                      formats={["svg", "webp"]}
                                      placeholder="blurred"
                                      alt={data.title}
                                    />                  
                                  </div>
                                  {data.title.length > 0 ? (
                                  <div className="title-option">
                                    <h4>{data.title}</h4>
                                  </div>
                                  ):null }
                                  {data.detail.length > 0 ? (
                                  <div className="detail-option">
                                      <p>{data.detail}</p>
                                  </div>
                                  ):null }
                                </div>
                              ))
                              : null
                      }

                </div>
            </div>
        </div>
        </OptionWrapper>
  )
}

export default OptionSection