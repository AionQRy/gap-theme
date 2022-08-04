import React, {useState} from 'react';
import { AccordionWrapper, Faq } from './Accordion.styles';
import AccordionItem from './AccordionItem';
import { HelpCircle } from 'react-feather'

const Accordion = ({ questionsAnswers }) => {
    const [activeIndex, setActiveIndex] = useState(1);

    const renderedQuestionsAnswers = questionsAnswers.map((item, index) => {
    const showDescription = index === activeIndex ? "show-description" : "";
    const fontWeightBold = index === activeIndex ? "font-weight-bold" : "";
    const ariaExpanded = index === activeIndex ? "true" : "false";
    return (
      <AccordionItem
        showDescription={showDescription}
        fontWeightBold={fontWeightBold}
        ariaExpanded={ariaExpanded}
        item={item}
        index={index}
        onClick={() => {
          setActiveIndex(index);
        }}
      />
    );
  });

  return (
    <Faq className="faq">
      <h2 className="faq__title"><HelpCircle/>คำถามที่พบบ่อย</h2>
      <p>รวมคำถามที่ลูกค้าต้องการอยากรู้เกี่ยวกับ การทำเว็บไซต์ ด้วย WordPress จากบริษัท รับทำ WordPress</p>
      <AccordionWrapper>
        <dl className="faq__list">{renderedQuestionsAnswers}</dl>
      </AccordionWrapper>      
    </Faq>
  );
}

export default Accordion