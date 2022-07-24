import { Link } from 'gatsby'
import React from 'react'
import { ArrowRight } from 'react-feather'
import { StaticImage } from 'gatsby-plugin-image'
import { BarTopping, DetailService, MainService, ServiceWrapper } from './ServiceSection.styles'

const ServiceSection = () => {
  return (
    <ServiceWrapper>
        <div className="v-container">
            <BarTopping className="BarTopping_Box">

            </BarTopping>
            <MainService className="MainService_Box">
                <div className="TitleService">
                    <h2>บริการ รับทำ เว็บไซต์ด้วย WordPress</h2>
                    <p>รับทำเว็บไซต์ WordPress รองรับ ร้านค้าออนไลน์ มีระบบจัดการ CMS ที่ใช้งานง่าย ไม่ต้องมีพื้นฐานในการทำเว็บ โดยทีมงานมืออาชีพ</p>
                </div>
                <DetailService className="DetailService_Box">
                    <div className="Grid-Column">
                        <div className="List-Column">
                            <div className="image_top">                     
                            <StaticImage 
                                 
                            layout="constrained"
                            alt="service-1"
                            src={ "../../../images/service-1.png"}
                            formats={["svg", "webp"]}
                            placeholder= "tracedSVG"
                            />
                            </div>
                            <div className="detail">
                                <h3>รับทำเว็บ WordPress</h3>
                                <p>บริการ รับทำเว็บ wordpress ราคาถูก โหลดเร็ว รองรับ SEO พร้อมออกแบบ Templete ได้ตามต้องการ</p>
                            </div>
                            <div className="btn-service">
                                <Link className="BtnService">ดูรายละเอียด<ArrowRight/></Link>
                            </div>
                        </div>
                        <div className="List-Column">
                            <div className="image_top">
                            <StaticImage 
                                 
                            layout="constrained"
                            alt="service-2"
                            src={ "../../../images/shopping-cart.png"}
                            formats={["svg", "webp"]}
                            placeholder= "tracedSVG"
                            />
                            </div>
                            <div className="detail">
                                <h3>รับทำเว็บไซต์ E-Commerce</h3>
                                <p>รับทำเว็บขายของ E-Commerce โดย WooCommerce ระบบการใช้งานครบครัน และรองรับทุกอุปกรณ์ ในราคาย่อมเยา</p>
                            </div>
                            <div className="btn-service">
                                <Link className="BtnService">ดูรายละเอียด<ArrowRight/></Link>
                            </div>
                        </div>
                        <div className="List-Column">
                            <div className="image_top">
                            <StaticImage 
                                 
                            layout="constrained"
                            alt="service-3"
                            src={ "../../../images/responsive-design.png"}
                            formats={["svg", "webp"]}
                            placeholder= "tracedSVG"
                            />
                            </div>
                            <div className="detail">
                                <h3>รับทำเว็บไซต์ Responsive</h3>
                                <p>สามารถเปิดดูได้ทุกอุปกรณ์ทำให้เพิ่มยอดขายได้มากขึ้นและช่วยเสริมภาพลักษณ์ของธุรกิจของท่าน</p>
                            </div>
                            <div className="btn-service">
                                <Link className="BtnService">ดูรายละเอียด<ArrowRight/></Link>
                            </div>
                        </div>
                        <div className="List-Column">
                            <div className="image_top">
                            <StaticImage 
                                 
                            layout="constrained"
                            alt="service-4"
                            src={ "../../../images/web-design-2.png"}
                            formats={["svg", "webp"]}
                            placeholder= "tracedSVG"
                            />
                            </div>
                            <div className="detail">
                                <h3>รับทำเว็บ Applications</h3>
                                <p>รับทำเว็บไซต์ Web Applications รองรับ Responsive Web Design ราคาถูก เขียนโดย React NodeJS และ TypeScript</p>
                            </div>
                            <div className="btn-service">
                                <Link className="BtnService">ดูรายละเอียด<ArrowRight/></Link>
                            </div>
                        </div>
                    </div>
                </DetailService>
            </MainService>
        </div>
    </ServiceWrapper>
  )
}

export default ServiceSection