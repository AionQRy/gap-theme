import React from 'react';
import { Check } from 'react-feather';
import { Container, HeroWrapper, HeroWrapperleft, HeroWrapperRight } from './HeroSection.styles';
import { Link } from 'gatsby';
const HeroSection = () => {
  return (
    <HeroWrapper>
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
                <div className="TitleHeroBox">
                    <h2 className="HeadTitleHero">บริการ รับทำเว็บไซต์ <span>WordPress</span></h2>
                    <h3 className="SubTitleHero">รวดเร็วทันใจ พร้อมดูแลหลังการขาย <span>การันตีคุณภาพ</span></h3>
                </div>
                <div className="DetailHeroBox">
                    <p>WordPress คือ การทำเว็บไซต์โดยมีระบบที่ใช้งานง่าย สะดวกในการจัดการเนื้อหาเว็บไซต์
                    เราออกแบบเว็บไซต์ WordPress ใหม่ ดีไซน์ไม่ซ้ำใครไม่ใช้ธีมสำเร็จรูปแสดงผลได้ทุกหน้าจอ
                    โดยมืออาชีพประสบการณ์กว่า 7 ปี ผู้อยู่เบื้องหลัง ความสำเร็จขององค์กรต่างๆ</p>
                </div>
                <div className="BtnHeroBox">
                    <Link className="DetailBtn">รายละเอียดบริการ</Link>
                    <Link className="OfferBtn">ขอใบเสนอราคา</Link>
                </div>
            </HeroWrapperleft>
            <HeroWrapperRight>

            </HeroWrapperRight>
        </Container>
    </HeroWrapper>
  )
}

export default HeroSection