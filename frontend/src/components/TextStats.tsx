interface TextStatsProps {
  text: string;
}

export default function TextStats({ text }: TextStatsProps) {
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="flex gap-6 sm:gap-8 justify-center mb-6 flex-wrap sm:flex-nowrap">
      <div className="text-center">
        <p className="text-xl sm:text-2xl font-bold">{text.length}</p>
        <p className="text-xs sm:text-sm text-gray-400">Caractères</p>
      </div>
      <div className="text-center">
        <p className="text-xl sm:text-2xl font-bold">{wordCount}</p>
        <p className="text-xs sm:text-sm text-gray-400">Mots</p>
      </div>
    </div>
  );
}
