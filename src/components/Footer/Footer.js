import React from 'react'
import Social from './Social/Social'
import BotFooter from './BotFooter/BotFooter'
import {Wrapper} from './Footer.styles'
import { useFooterQuery } from '../../hook/useFooterQuery'
import { Link } from 'gatsby'
import { ArrowRight  } from 'react-feather';


const Footer = () => {
    const { socialFooter } = useFooterQuery()
  return (
    <Wrapper>
        <section className="section-footer">
            <div className="v-container">
                <div className="main-footer">
                    <div className="grid-column c-1">
                        <div className="title">
                            <h3>เกี่ยวกับเรา</h3>
                        </div>
                        <div className="detail">
                            <h4>Grid-gap</h4>
                            <p>รับทำเว็บไซต์ WordPress และ ออกแบบระบบโครงสร้างเว็บไซต์ แบบอาชีพเช่น เขียน Theme WordPress เขียน Plugin WordPress ปรับแต่ง Optimize WordPress และแก้ไขปัญหาต่างๆ ด้วยประสบการณ์กว่า 8 ปี</p>
                        </div>
                        
                    </div>
                    <div className="grid-column c-2">
                        <div className="title">
                            <h3>ติดต่อเรา</h3>
                        </div>
                        <div className="detail">
                            <ul className="ul-contact">
                                <li>Email:<a href="mailto:aionqq500@gmail.com"  target="_blank" rel="noopener noreferrer">ส่งเมลหาเรา</a></li>
                                <li>โทร:<a href="tel:+66625970504"  target="_blank" rel="noopener noreferrer">062-597-0504 ฝ่ายขาย</a></li>
                                <li>Line ID:<a href="https://line.me/ti/p/PAp76vLlok"  target="_blank" rel="noopener noreferrer">_gapgap26</a></li>
                            </ul>
                            <h4>รับทำ WordPress</h4>
    
                        </div>
                    </div>
                    <div className="grid-column c-3">
                        <div className="title">
                            <h3>บริการของเรา</h3>
                        </div>
                        <div className="detail">
                            <ul className="ul-service">
                                <li><Link to="#"><ArrowRight/>รับทำเว็บไซต์ WordPress</Link></li>
                                <li><Link to="#"><ArrowRight/>รับทำเว็บไซต์ E-Commerce</Link></li>
                                <li><Link to="#"><ArrowRight/>รับทำเว็บไซต์ WooCommerce</Link></li>
                                <li><Link to="#"><ArrowRight/>รับทำเว็บไซต์ บริษัท/องค์กร</Link></li>
                                <li><Link to="#"><ArrowRight/>รับทำระบบเว็บไซต์</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid-column c-4">
                        <div className="title">
                            <h3>ตัวอย่างผลงาน</h3>
                        </div>
                        <div className="detail">
                            <Link to="#" className="btn-next">
                                <ArrowRight/>                            
                                ไปที่หน้าผลงาน
                            </Link>
                        </div>
                        <div className="title">
                            <h3>ช่องทางติดต่ออนไลน์</h3>
                        </div>
                        <Social socialFooter={socialFooter.nodes} />
                    </div>
                </div>
            </div>
        </section>
        <BotFooter/>
    </Wrapper>
    
  )
}

export default Footer