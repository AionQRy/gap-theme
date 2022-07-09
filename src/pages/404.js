import * as React from "react"

import Seo from "../components/SEO/SEO"
import Layout from "../components/Layout/Layout"
import { MainBoxError, BoxError, BoxNotFound } from "../components/NotFound/NotFound.styles"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { Home } from "react-feather"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <MainBoxError>
      <BoxError>
        <StaticImage 
          style={{
              maxWidth: 550,
              // You can set a maximum height for the image, if you wish.
              // maxHeight: 600,
              }}       
          layout="fullWidth"
          alt="Page No Hero"
          src={ "../images/bg-404.svg"}
          formats={["auto", "webp", "avif"]}
          placeholder= "tracedSVG"
          />
          <BoxNotFound>
            <h1 className="BigHeadNotFound">404</h1>
            <h2 className="HeadNotFound">ไม่พบหน้าที่คุณค้นหา</h2>
            <p>ขออภัย ไม่พบหน้าที่คุณร้องขอ โปรดคลิกกลับไปที่หน้าหลัก</p>
            <Link to="/" className="ButtonToHome"><Home/>กลับไปหน้าหลัก</Link>
          </BoxNotFound>
      </BoxError>
    </MainBoxError>
  </Layout>
)

export default NotFoundPage

