import { useEffect, useState } from "react";

import AccordionItem from "./sidebar-item";

export default function Sidebar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [moduleFunctions, setModuleFunctions] = useState<Module[]>([]);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    console.log("get menu");
    setModuleFunctions([
      {
        name: "Assets Information",
        functions: [{ name: "Assets Information", path: "assets-information" }],
      },
      {
        name: "System Management",
        functions: [{ name: "Users Management", path: "users" }],
      },
    ]);
  }, []);
  
  return (
    <div>
      {moduleFunctions.map((module, index) => (
        <AccordionItem
          key={index}
          title={module.name}
          functions={module.functions}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}
