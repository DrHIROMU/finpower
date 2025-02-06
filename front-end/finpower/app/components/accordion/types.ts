interface AccordionItemProps {
  title: string;
  functions: SystemFunction[];
  isOpen: boolean;
  onClick: () => void;
}

interface Module {
  name: string;
  functions: SystemFunction[];
}

interface SystemFunction{
  name: string;
  path: string;
}