export default function AccordionItem({
  title,
  content,
  isOpen,
  onClick,
}: AccordionItemProps) {
  return (
    <div className="border-b border-gray-200 p-2">
      <button
        className="w-full flex justify-between items-center py-4 text-left"
        onClick={onClick}
      >
        <span>{title}</span>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          {isOpen ? "-" : "+"}
        </span>
      </button>
      <div
        className={`transition-all duration-200  overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-50"
        }`}
      >
        <div className="p-4 text-gray-700">{content}</div>
      </div>
    </div>
  );
}
