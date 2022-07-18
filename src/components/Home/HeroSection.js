import React from 'react';
import { Check } from 'react-feather';
import { HeroWrapper, HeroWrapperleft, HeroWrapperRight } from './HeroSection.styles';
import { Link } from 'gatsby';
const HeroSection = () => {
  return (
    <HeroWrapper>
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
                <p>
                WordPress คือ การทำเว็บไซต์โดยมีระบบที่ใช้งานง่ายไม่ยุ่งยาก ในการจัดการเนื้อหาเว็บไซต์ เราออกแบบเว็บไซต์ WordPress ใหม่ ดีไซน์ไม่ซ้ำใคร ไม่ใช้ธีมสำเร็จรูป แสดงผลได้ทุกหน้าจอ โดยบริษัทมืออาชีพ ประสบการณ์กว่า 10 ปี ผู้อยู่เบื้องหลัง ความสำเร็จขององค์กร และหน่วยงานราชการมากมาย รับทำ WordPress รับสร้าง Theme WordPress ตามต้องการ รับเขียน Plugin WordPress ตามจุดประสงค์การใช้งานของคุณ
                </p>
            </div>
            <div className="BtnHeroBox">
                <Link>รายละเอียดบริการ</Link>
                <Link>ขอใบเสนอราคา</Link>
            </div>
        </HeroWrapperleft>
        <HeroWrapperRight>

        </HeroWrapperRight>
    </HeroWrapper>
  )
}

export default HeroSection