interface SidebarItemProps {
  title: string;
  functions: SystemFunction[];
  isOpen: boolean;
  onClick: () => void;
}