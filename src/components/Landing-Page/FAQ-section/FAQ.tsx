// import "./faq.scss";
import "./faq.css"
import AccordionItem from "./AccordionItem";
import { useState } from "react";

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const questionsAnswers = [
    {
      question: "How does URL shortening work?",
      answer:
        "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
    },
    {
      question: "Is it necessary to create an account to use the URL shortening service?",
      answer:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      question: "Are the shortened links permanent? Will they expire?",
      answer: `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
    },
    {
      question: "Are there any limitations on the number of URLs I can shorten?",
      answer: `Yes! Send us a message and we’ll process your request no questions asked.`,
    },
    {
      question: "Can I customize the shortened URLs to reflect my brand or content?",
      answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
    },
    {
      question: "Can I track the performance of my shortened URLs?",
      answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
    },
    {
      question: "How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?",
      answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
    },
    {
      question: "What is a QR code and what can it do?",
      answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
    },
    {
      question: "Is there an API available for integrating the URL shortening service into my own applications or websites?",
      answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
    },
    
  ];

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
        key={index}
        onClick={() => {
          setActiveIndex(index);
        }}
      />
    );
  });

  return (
    <div className="faq">
      <div className="faq__content">
        <h1 className="faq__title">FAQ</h1>
        <dl className="faq__list">{renderedQuestionsAnswers}</dl>
      </div>
    </div>
  );
};

export default FAQ;
