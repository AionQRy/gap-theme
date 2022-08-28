import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Check } from 'react-feather'
import { MostPopular, PriceCard, PriceGrid, PriceRow, PriceWrapper, SpanPrice, SubTitle, TitleHead } from './PriceSection.styles'

const PriceSection = () => {
  return (
    <PriceWrapper>
      <div className="v-container">
        <PriceRow>     
          <TitleHead>
            <h2>ราคารับทำเว็บไซต์ WordPress</h2>
            <SubTitle>มั่นใจได้เลย ว่าค่าบริการของเรานั้นสมเหตุผล บริษัทเรา รับทำ WordPress โดยตรงเรา รับทำเว็บไซต์ WordPress มามากกว่า 1000+ เว็บไซต์</SubTitle>
          </TitleHead>
          <PriceGrid>
              <PriceCard>
                 <div className="TitleCard">RESPONSIVE PLAN</div>
                 <div className="Detail">
                    <ul>
                      <li><Check/><span>สร้าง รูปแบบ เว็บไซต์ที่ได้ออกแบบ</span></li>
                      <li><Check/><span>รูปแบบโค๊ดที่คุณต้องการ Html, Css, ReactJS, GatsbyJS, NextJS</span></li>
                      <li><Check/><span>ระยะเวลาทำ 2-4 สัปดาห์<SpanPrice>(แล้วแต่งาน)</SpanPrice></span></li>
                      <li><Check/><span>ราคาย่อมเยา</span></li>
                      <li><Check/><span>ฟรี Hosting + Domain<SpanPrice>(ไม่จำกัดพื้นที่)</SpanPrice></span></li>
                      <li><Check/><span>ดูแลหลังการขาย 1 ปี</span></li>
                    </ul>
                 </div>
                 <div className="ImageBox">
                  <StaticImage
                    src="../../../images/responsive-icon.webp"
                    alt="responsive-icon"
                    formats={["svg", "webp"]}
                    placeholder="blurred"
                    
                  />                 
                  </div>
                 <div className="ButtonBox">
                    <Link>ดูรายละเอียด</Link>
                 </div>
              </PriceCard>

              <PriceCard className="MostPopular">
                <MostPopular>โปรโมชั่น</MostPopular>
                 <div className="TitleCard">WORDPRESS PLAN</div>
                 <div className="Detail">
                    <ul>
                        <li><Check/><span>สร้างเว็บไซต์ Wordpress เราออกแบบและจัดทำ</span></li>
                        <li><Check/><span>Page Speed สูง</span></li>
                        <li><Check/><span>ระยะเวลาทำ 2-4 สัปดาห์<SpanPrice>(แล้วแต่งาน)</SpanPrice></span></li>
                        <li><Check/><span>ราคาย่อมเยา</span></li>
                        <li><Check/><span>ฟรี Hosting + Domain<SpanPrice>(ไม่จำกัดพื้นที่)</SpanPrice></span></li>
                        <li><Check/><span>ดูแลหลังการขาย 1 ปี</span></li>
                      </ul>
                 </div>
                 <div className="ImageBox">
                  <StaticImage
                    src="../../../images/responsive-icon.webp"
                    alt="responsive-icon"
                    formats={["svg", "webp"]}
                    placeholder="blurred"
                    
                  />                 
                  </div>
                 <div className="ButtonBox">
                    <Link>ดูรายละเอียด</Link>
                 </div>
              </PriceCard>

              <PriceCard>
                 <div className="TitleCard">E-COMMERCE PLAN</div>
                 <div className="Detail">
                    <ul>
                        <li><Check/><span>สร้างเว็บไซต์ Wordpress, E-Commerce, Woocommerce</span></li>
                        <li><Check/><span>มีปลั้กอินรองรับตามที่ คุณต้องการ</span></li>
                        <li><Check/><span>Page Speed สูง</span></li>
                        <li><Check/><span>ระยะเวลาทำ 2-4 สัปดาห์<SpanPrice>(แล้วแต่งาน)</SpanPrice></span></li>
                        <li><Check/><span>ราคาย่อมเยา</span></li>
                        <li><Check/><span>ฟรี Hosting + Domain<SpanPrice>(ไม่จำกัดพื้นที่)</SpanPrice></span></li>
                        <li><Check/><span>ดูแลหลังการขาย 1 ปี</span></li>
                    </ul>
                 </div>
                 <div className="ImageBox">
                  <StaticImage
                    src="../../../images/responsive-icon.webp"
                    alt="responsive-icon"
                    formats={["svg", "webp"]}
                    placeholder="blurred"
                    
                  />                 
                  </div>
                 <div className="ButtonBox">
                    <Link>ดูรายละเอียด</Link>
                 </div>
              </PriceCard>

              <PriceCard>
                 <div className="TitleCard">WEB APPLICATIONS PLAN</div>
                 <div className="Detail">
                    <ul>
                      <li><Check/><span>สร้างเว็บ แอปพลิเคชั่น ระบบต่างๆ</span></li>
                      <li><Check/><span>Performance เว็บไซต์ดี และ รวดเร็ว</span></li>
                      <li><Check/><span>ระยะเวลาทำ 2-4 สัปดาห์<SpanPrice>(แล้วแต่งาน)</SpanPrice></span></li>
                      <li><Check/><span>ราคาย่อมเยา</span></li>
                      <li><Check/><span>ฟรี Hosting + Domain<SpanPrice>(ไม่จำกัดพื้นที่)</SpanPrice></span></li>
                      <li><Check/><span>ดูแลหลังการขาย 1 ปี</span></li>
                    </ul>
                 </div>
                 <div className="ImageBox">
                  <StaticImage
                    src="../../../images/responsive-icon.webp"
                    alt="responsive-icon"
                    formats={["svg", "webp"]}
                    placeholder="blurred"
                    
                  />                 
                  </div>
                 <div className="ButtonBox">
                    <Link>ดูรายละเอียด</Link>
                 </div>
              </PriceCard>
          </PriceGrid>
      </PriceRow>
      </div>
    </PriceWrapper>
  )
}

export default PriceSection