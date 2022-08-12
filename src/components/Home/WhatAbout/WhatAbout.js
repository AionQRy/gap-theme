import React from 'react'
import { AboutWrapper } from './WhatAbout.styles';
import { Link } from 'gatsby';
import { ArrowRight } from 'react-feather';
const WhatAbout = () => {
  return (
    <AboutWrapper>
        <div className="v-container">
            <div className="BoxDetail">
                <div className="TitleAbout">
                
                {/* {topTitle.length > 0 ? ( */}
                    <h2>WordPress คืออะไร</h2>
                {/* ):null } */}
                {/* {detail.length > 0 ? ( */}
                    <p>ระบบ WordPress คือระบบที่ช่วยในการสร้างเว็บไซต์จากเรื่องยากให้เป็นเรื่องง่าย เพราะว่าผู้ใช้งาน สามารถจัดการและสร้างเนื้อหาเว็บไซต์ได้ด้วยตนเองโดยไม่ต้องเขียนโค้ดซึ่ง ระบบแบบนี้ เรียกว่า (Content Management System : CMS ) และในปัจจุบัน กว่า 43% ของเว็บไซต์ทั่วโลก ทำเว็บไซต์ด้วย WordPress</p>
                {/* ):null } */}
                    <div className="box-readmore">
                        <Link className="BtnReadmore">ดูรายละเอียด<ArrowRight/></Link>
                    </div>
                </div>
                <div className="ImageAbout">
                    
                </div>
            </div>
        </div>
    </AboutWrapper>
  )
}

export default WhatAbout