import { useState } from "react";
import { NavLink } from "react-router";

import AccordionItem from "./accordion-item";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "System Management",
      content: <NavLink to="user-management">User Management</NavLink>,
    },
    {
      title: "Section 2",
      content: `I'm the content of section 2`,
    },
    {
      title: "Section 3",
      content: `I'm the content of section 3`,
    },
  ];

  return (
    <div>
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}
