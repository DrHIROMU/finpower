export default function AccordionItem({
  title,
  content,
  isOpen,
  onClick,
}: AccordionItemProps) {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex justify-between items-center py-4 text-left"
        onClick={onClick}
      >
        <span>{title}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <div className="p-4 text-gray-700">{content}</div>}
    </div>
  );
}
