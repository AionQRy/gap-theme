import * as React from "react"

import Seo from "../components/SEO/SEO"
import Layout from "../components/Layout/Layout"
import HeroSection from "../components/Home/HeroSection/HeroSection"
import ServiceSection from "../components/Home/ServiceSection/ServiceSection"
import OptionSection from "../components/Home/OptionSection/OptionSection"
import RecentPostSection from "../components/Home/RecentPostSection/RecentPostSection"
import Faq from "../components/Home/Faq/Faq"
import PriceSection from "../components/Home/PriceSection/PriceSection"
import { useHomeQuery } from "../hook/useHomeQuery"
import WhatAbout from "../components/Home/WhatAbout/WhatAbout"

const IndexPage = () => {
  const {HomePage}  = useHomeQuery();
  
  console.log({HomePage});

  return(
  <Layout>
    <Seo title="Home" />
    <HeroSection/>
    <ServiceSection/>
    <WhatAbout/>
    <OptionSection topTitle={HomePage.home.labelOption} detail={HomePage.home.titleOption} options={HomePage.home.optionsGrid}/>
    <RecentPostSection topTitle={HomePage.home.labelBlog} detail={HomePage.home.titleBlog}/>
    <Faq topTitle={HomePage.home.labelFaq} detail={HomePage.home.titleFaq} accordion={HomePage.home.faq}/>
    <PriceSection/>
  </Layout>
)
  }

export default IndexPage
