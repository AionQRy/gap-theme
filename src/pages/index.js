import * as React from "react"

import Seo from "../components/SEO/SEO"
import Layout from "../components/Layout/Layout"
import HeroSection from "../components/Home/HeroSection/HeroSection"
import ServiceSection from "../components/Home/ServiceSection/ServiceSection"
import OptionSection from "../components/Home/OptionSection/OptionSection"
import RecentPostSection from "../components/Home/RecentPostSection/RecentPostSection"
import Faq from "../components/Home/Faq/Faq"
import PriceSection from "../components/Home/PriceSection/PriceSection"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection/>
    <ServiceSection/>
    <OptionSection/>
    <RecentPostSection/>
    <Faq/>
    <PriceSection/>
  </Layout>
)

export default IndexPage
