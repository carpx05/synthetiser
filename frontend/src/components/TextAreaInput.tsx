interface TextAreaInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextAreaInput({ value, onChange }: TextAreaInputProps) {
  return (
    <textarea
      placeholder="Entrez le texte ici..."
      className="w-full min-h-[150px] p-4 bg-zinc-800 border border-gray-600 rounded resize-none"
      value={value}
      onChange={onChange}
    />
  );
}
