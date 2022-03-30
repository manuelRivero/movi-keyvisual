import React, { useEffect, useState } from "react";
import plusIcon from "../../../assets/images/faq/plus-icon.svg";
import minusIcon from "../../../assets/images/faq/minus.svg";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

export default function FaqAccordion({ title, html }) {
  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();

  useEffect(() => {
    if (isOpen) {
      console.log("is open");
      controls.start({
        x: "0%",
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    } else {
      controls.start({
        x: "-100%",
        opacity: 0,
        transition: { duration: 1, type: "spring" },
      });
    }
  }, [isOpen]);
  return (
    <>
      {" "}
      <div className="bg-gray-light p-2 rounded-md mb-2 flex items-center justify-between">
        <div>{title}</div>
        <div className="flex-shrink-0">
          <img
            className="cursor-pointer"
            src={isOpen ? minusIcon : plusIcon}
            onClick={() => setIsOpen(!isOpen)}
          />{" "}
        </div>
      </div>
      <div>
        <AnimatePresence exitBeforeEnter={true}>
          {isOpen && (
            <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
              <div
             
                className="p-4 mb-2 shadow-lg rounded-b-2xl"
                dangerouslySetInnerHTML={{ __html: html }}
              ></div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
