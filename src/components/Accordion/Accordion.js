import React, {useState} from 'react';
import { AccordionWrapper, Faq } from './Accordion.styles';
import AccordionItem from './AccordionItem';
import { HelpCircle } from 'react-feather'

const Accordion = ({ questionsAnswers, data }) => {
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
      {data.topTitle.length > 0 ? (
        <h2 className="faq__title"><HelpCircle/>{data.topTitle}</h2>
      ):null }

      {data.detail.length > 0 ? (
        <p>{data.detail}</p>
      ):null }
         
      <AccordionWrapper>
        <dl className="faq__list">{renderedQuestionsAnswers}</dl>
      </AccordionWrapper>      
    </Faq>
  );
}

export default Accordion