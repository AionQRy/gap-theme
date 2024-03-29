import React from "react";
import { ArrowRight } from "react-feather";
import { FaqQuestion } from "./Accordion.styles";

const AccordionItem = ({
  showDescription,
  ariaExpanded,
  fontWeightBold,
  item,
  index,
  onClick,
}) => (
  <FaqQuestion className="faq__question" key={item.faqText}>
    <dt>
      <button
        aria-expanded={ariaExpanded}
        aria-controls={`faq${index + 1}_desc`}
        data-qa="faq__question-button"
        className={`faq__question-button faq${index + 1}_desc ${fontWeightBold}`}
        onClick={onClick}
      >
        {item.faqText}
        <ArrowRight/>
      </button>
    </dt>
    <dd>
      <p
        id={`faq${index + 1}_desc`}
        data-qa="faq__desc"
        className={`faq__desc ${showDescription}`}
      >
        {item.faqDetail}
      </p>
    </dd>
  </FaqQuestion>
);

export default AccordionItem;