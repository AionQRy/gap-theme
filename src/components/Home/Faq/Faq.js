import React from 'react';
import { FaqWrapper } from './Faq.styles';
import Accordion from '../../Accordion/Accordion';
import { StaticImage } from 'gatsby-plugin-image';

const Faq = ({topTitle, detail, accordion}) => {

  const data = {topTitle, detail};
  const questionsAnswers = [
    {
      question: "ทำเว็บไซต์ด้วย WordPress ดีไหม?",
      answer:
        "การทำเว็บไซต์ด้วย WordPress จะค่อนข้างยืดหยุ่นมาก สามารถทำว็บไซต์ได้ทุกรูปแบบ และสามารถเชื่อมกับ Application หรือ Line OA ได้ SEO แรงมาก และราคาไม่แพง",
    },
    {
      question: "ทำเว็บไซต์ WordPress ราคาเท่าไหร่?",
      answer:
        "ราคาการทำเว็บไซต์จะขึ้นอยู่ความต้องการขอลูกค้า ว่าต้องการทำเว็บไซต์ประมาณไหน ราคาการทำเริ่มต้นที่ 3,000 - 100,000 บาทขึ้นไป",
    },
    {
      question: "WordPress ใช้งานยากไหม?",
      answer: `การใช้งาน WordPress ไม่ยากเลยเพราะ WordPress เป็นระบบ CMS ที่มีผู้ใช้งานมากที่สุดในโลก UX/UI จึงออกแบบมาเพื่อให้ใช้งานได้ง่ายที่สุด`,
    },
    {
      question: "SEO ใน WordPress ดีไหม?",
      answer: `WordPress ถูกออกแบบโครงสร้างมาให้ถูกต้องตามหลัก SEO และง่ายต่อการทำ SEO ทาง Google เองยังแนะนำให้ทำเว็บด้วย WordPress และยังทำ Plugin เฉพาะเพื่อใช้งานกับ WordPress ได้อย่างง่ายดาย`,
    },
    {
      question: "WordPress ปลอดภัยไหม?",
      answer: `เนื่องด้วย WordPress เป็นระบบ CMS สำเร็จรูปยอดนิยม ทำให้มีผู้ใช้งานจำนวนมาก ทำให้มีกลุ่มคนจ้องจะทำการ Hack ระบบ อยู่จำนวนมาก แต่เราสามารถเสริมความปลอดภัยได้โดย การอัพเดตเวอร์ชั่น WordPress และ Plugin อย่างสม่ำเสมอ ติดตั้ง Plugin กันสแปม หรือ Firewall ป้องกัน WordPress`,
    },
    {
      question: "จ้างทำเว็บไซต์ ที่ไหนดี",
      answer: `เพื่อลดความเสี่ยงต่างๆ ที่อาจจะเกิดขึ้นกับงานของเรา แนะนำว่าให้ จ้างทำเว็บไซต์ กับบริษัท รับทำเว็บไซต์ ดีกว่าทำกับฟรีแลนซ์ และควรใช้ WordPress ทำเพราะเป็นระบบที่ต่อยอดได้เยอะ SEO แรง การใช้งานง่าย รับทำเว็บไซต์ WordPress`,
    },
  ];

  return (
    <FaqWrapper>
      <div className="v-container">
        <div className="grid-box">
          <div className="grid-column grid-column-1">
          <StaticImage 
            width="500"                     
            layout="constrained"
            alt="service-1"
            src={ "../../../images/image-faq-2.png"}
            formats={["svg", "webp"]}
            placeholder= "tracedSVG"
          /> 
          </div>
          <div className="grid-column grid-column-2">
            <Accordion questionsAnswers={accordion} data={data} />
          </div>
        </div>                      
          
      </div>

    </FaqWrapper>
  )
}

export default Faq