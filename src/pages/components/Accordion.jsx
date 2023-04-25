import { useState } from "react";
import { m, AnimatePresence, LayoutGroup } from "framer-motion";

const Accordion = ({ question, answer }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <LayoutGroup>
      <AnimatePresence>
    <m.div className="accordion">
        <m.div
          // key="question"
          onClick={() => setIsOpen(!isOpen)}
        >
          <m.div className="accordion-title">
          {question}
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

        </m.div>
    </m.div>
      </AnimatePresence>
      </LayoutGroup>
  );
};

export default Accordion;
