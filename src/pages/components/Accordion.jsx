import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";

const Accordion = ({ question, answer }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <m.div>
      <AnimatePresence>
        <m.div
          // key="question"
          className="accordion"
          onClick={() => setIsOpen(!isOpen)}
        >
          <m.div className="accordion-title">
          {question}
          </m.div>
        </m.div>

        {isOpen && (
          <m.div
            // key="answer"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
            exit={{ opacity: 0 }}
            className="accordion-open"
          >
            {answer}
          </m.div>
        )}
      </AnimatePresence>
    </m.div>
  );
};

export default Accordion;
