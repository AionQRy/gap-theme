import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/SEO/SEO"
import * as styles from "../components/index.module.css"
import Layout from "../components/Layout/Layout"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <p>สวัสดี start here</p>
  </Layout>
)

export default IndexPage
