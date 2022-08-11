import React from 'react';
import { Check, PhoneCall } from 'react-feather';
import { Ball, BgBlur, BgHero, Container, HeroWrapper, HeroWrapperleft, HeroWrapperRight, HotLine, ItemBG } from './HeroSection.styles';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import scrollTo from 'gatsby-plugin-smoothscroll';
const HeroSection = () => {
  return (
    <HeroWrapper>

        <BgHero/>
        <BgBlur/>
        <Container>
            <HeroWrapperleft>
                <div className="ListBox">
                    <ul className="ListNav">
                        <li><Check/><span>งานคุณภาพ</span></li>
                        <li><Check/><span>การันตีงานเสร็จ</span></li>
                        <li><Check/><span>ทำงานรวดเร็ว</span></li>
                        <li><Check/><span>ดูแลตลอด 24 ชม.</span></li>
                    </ul>   
                </div>
                <div className="MainContentHero">
                    <div className="TitleHeroBox">
                        <h1 className="HeadTitleHero">บริการ รับทำเว็บไซต์ <span>WordPress</span></h1>
                        <h3 className="SubTitleHero">รวดเร็วทันใจ พร้อมดูแลหลังการขาย <span>การันตีคุณภาพ</span></h3>
                    </div>
                    <div className="DetailHeroBox">
                        <p>WordPress คือ การทำเว็บไซต์โดยมีระบบที่ใช้งานง่าย สะดวกในการจัดการเนื้อหาเว็บไซต์
                        เราออกแบบเว็บไซต์ WordPress ใหม่ ดีไซน์ไม่ซ้ำใครไม่ใช้ธีมสำเร็จรูปแสดงผลได้ทุกหน้าจอ
                        โดยมืออาชีพประสบการณ์กว่า 7 ปี ผู้อยู่เบื้องหลัง ความสำเร็จขององค์กรต่างๆ</p>
                    </div>
                    <div className="BtnHeroBox">
                        <button onClick={() => scrollTo('#ServiceWrapper')} className="DetailBtn">รายละเอียดบริการ</button>
                        <Link className="OfferBtn">ขอใบเสนอราคา</Link>
                    </div>
                </div>
                <div className="TotalHeroBox">
                    <ul>
                        <li>
                            <span>60 เว็บ</span>
                            ผลงานมากกว่า
                        </li>
                        <li>
                            <span>7 ปี</span>
                            ประสบการณ์
                        </li>
                        <li>
                            <span>50 +</span>
                            เว็บไซต์
                        </li>
                    </ul>
                </div>
            </HeroWrapperleft>
            <HeroWrapperRight>
             
                <ItemBG>
                    <Ball/>
                    <StaticImage 
                                 
                                 layout="constrained"
                                 alt="service-1"
                                 src={ "../../../images/image-hero.svg"}
                                 formats={["svg", "webp"]}
                                 placeholder= "tracedSVG"
                                 /> 
                    <HotLine>
                        <div className="right-bar"><PhoneCall/></div>
                        <div className="left-bar">
                            <h4>สายด่วนโทร <span>062-597-0504</span></h4>
                        </div>
                    </HotLine>
                </ItemBG>

            </HeroWrapperRight>
        </Container>
    </HeroWrapper>
  )
}

export default HeroSection