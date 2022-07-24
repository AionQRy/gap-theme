import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/SEO/SEO"
// import * as styles from "../components/index.module.css"
import Layout from "../components/Layout/Layout"
import HeroSection from "../components/Home/HeroSection/HeroSection"
import ServiceSection from "../components/Home/ServiceSection/ServiceSection"
import RecentPostSection from "../components/Home/RecentPostSection/RecentPostSection"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection/>
    <ServiceSection/>
    <RecentPostSection/>
    <p>สวัสดี start here</p>
  </Layout>
)

export default IndexPage
