import React, { useState } from "react";
import plusIcon from "../../../assets/images/faq/plus-icon.svg";

export default function FaqAccordion({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-gray-light p-2 rounded-md mb-2 flex items-center justify-between">
      <div>{title}</div>
      <div className="flex-shrink-0">
        <img src={plusIcon} />{" "}
      </div>
    </div>
  );
}
