import React from 'react'
import { AboutSection, AboutWrapper, Row, RowAbout } from './WhatAbout.styles';
import { Link } from 'gatsby';
import { ArrowRight } from 'react-feather';
import { GatsbyImage } from 'gatsby-plugin-image'

const WhatAbout = ({whatAbout}) => {

    console.log(whatAbout);
  return (
    <AboutWrapper>
        <div className="v-container">
            <RowAbout>
                { whatAbout.length > 0 
                ? whatAbout.map(( data ) => (
                <AboutSection className="AboutSection">
                    <section className="SectionAbout">
                        <div className="BoxDetail">
                            <div className="TitleAbout">    
                                <div className="IconAbout">
                                    <GatsbyImage
                                        layout="constrained"
                                        image={
                                        data.iconAbout.localFile.childImageSharp.gatsbyImageData
                                        }
                                        formats={["svg", "webp"]}
                                        placeholder="blurred"
                                        alt={data.labelAbout}
                                    />  
                                </div>                    
                                {data.labelAbout.length > 0 ? (
                                <div className="head">
                                    <h2>{data.labelAbout}</h2>
                                </div>                                 
                                ):null } 
                                
                                {data.detailAbout.length > 0 ? ( 
                                <div className="detail">
                                    <p>{data.detailAbout}</p>
                                </div>          
                                ):null }

                                {data.linkPost.uri.length > 0 ? ( 
                                <div className="box-readmore">
                                    <Link to={`/blog${data.linkPost.uri}`} className="BtnReadmore">ดูรายละเอียด<ArrowRight/></Link>
                                </div>
                                ):null }
                            </div>
                            <div className="ImageAbout">
                                <GatsbyImage
                                    layout="constrained"
                                    image={
                                      data.imageAbout.localFile.childImageSharp.gatsbyImageData
                                    }
                                    formats={["svg", "webp"]}
                                    placeholder="blurred"
                                    alt={data.labelAbout}
                                />  
                            </div>
                        </div>                    
                    </section>
                </AboutSection>
                )): null
            }
            </RowAbout>
        </div>
    </AboutWrapper>
  )
}

export default WhatAbout