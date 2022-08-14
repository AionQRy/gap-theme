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
import WhyWordpress from "../components/Home/WhyWordpress/WhyWordpress"

const IndexPage = () => {
  const {HomePage}  = useHomeQuery();
  
  console.log({HomePage});

  return(
  <Layout>
    <Seo subTitle="Home" />
    <HeroSection/>
    <ServiceSection/>
    <WhatAbout whatAbout={HomePage.home.repeaterAbout}/>
    <WhyWordpress
      topTitle={HomePage.home.titleWhy} 
      detail={HomePage.home.subTitleWhy} 
      options={HomePage.home.repeaterWhy}
      />
    <OptionSection 
      topTitle={HomePage.home.titleOption} 
      detail={HomePage.home.subTitleOption} 
      options={HomePage.home.optionsGrid}
    />
    <RecentPostSection 
      topTitle={HomePage.home.titleBlog} 
      detail={HomePage.home.subTitleBlog}
      />
    <Faq 
      topTitle={HomePage.home.titleFaq} 
      detail={HomePage.home.subTitleFaq} 
      accordion={HomePage.home.faq}
      />
    <PriceSection/>
  </Layout>
)
  }

export default IndexPage
