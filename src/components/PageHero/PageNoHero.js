import React from "react"
import { Bgimg } from "./PageNoHero.styles"
import BgPage from '../../images/bg-page.webp';
import { StaticImage } from "gatsby-plugin-image"

const PageNoHero = () =>  <StaticImage
                        style={{
                        gridArea: "1/1",
                        maxHeight: 400,
                        // You can set a maximum height for the image, if you wish.
                        // maxHeight: 600,
                        }}
                        layout="fullWidth"
                        // You can optionally force an aspect ratio for the generated image
                        aspectRatio={2 / 1}
                        // This is a presentational image, so the alt should be an empty string
                        alt="Page No Hero"
                        // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
                        src={ "../../images/bg-page.webp"}
                        formats={["auto", "webp", "avif"]}
                        />
                                


export default PageNoHero
