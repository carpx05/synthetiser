import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/solid";

interface SummaryBoxProps {
  summary: string;
  onCopy: () => void;
}

export default function SummaryBox({ summary, onCopy }: SummaryBoxProps) {
  return (
    <div className="min-h-[150px] p-4 border border-gray-600 bg-zinc-800 rounded relative">
      <button
        onClick={onCopy}
        className="absolute top-2 right-2 p-1 text-white hover:text-yellow-300"
      >
        <ClipboardDocumentCheckIcon className="h-6 w-6" />
      </button>
      <p className="text-sm whitespace-pre-wrap">{summary}</p>
    </div>
  );
}
