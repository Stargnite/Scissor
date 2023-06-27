import React from "react";
// import "./faq.scss";
import "./faq.css";

interface AccordionItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  showDescription: string;
  ariaExpanded: string;
  fontWeightBold: string;
  item: any;
  index: number;
  onClick: () => void;
  "data-qa"?: string;
}

const AccordionItem: React.FC<AccordionItemProps> = (
  props: AccordionItemProps, { children, ...rest }
) => (
  <div className="faq__question" key={props.item.question}>
    <dt>
      <button
        aria-expanded={props.ariaExpanded}
        aria-controls={`faq${props.index + 1}_desc`}
        data-qa="faq__question-button"
        className={`faq__question-button ${props.fontWeightBold}`}
        onClick={props.onClick}
        {...rest}
      >
        {props.item.question}
      </button>
    </dt>
    <dd>
      <p
        id={`faq${props.index + 1}_desc`}
        data-qa="faq__desc"
        className={`faq__desc ${props.showDescription}`}
      >
        {props.item.answer}
      </p>
    </dd>
  </div>
);

export default AccordionItem;
