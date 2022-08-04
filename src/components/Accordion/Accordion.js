import React, {useState} from 'react';
import { AccordionWrapper } from './Accordion.styles';
import AccordionItem from './AccordionItem';

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
    <div className="faq">
      <h1 className="faq__title">FAQ</h1>
      <AccordionWrapper>
        <dl className="faq__list">{renderedQuestionsAnswers}</dl>
      </AccordionWrapper>      
    </div>
  );
}

export default Accordion