interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}