import { useState } from "react";
import Header from "./components/Header";
import TextStats from "./components/TextStats";
import TextAreaInput from "./components/TextAreaInput";
import SummaryBox from "./components/SummaryBox";
import Footer from "./components/Footer";

export default function App() {
  const [textValue, setTextValue] = useState("");
  const [summaryValue, setSummaryValue] = useState("Ceci est un résumé exemple.");

  const handleTyping = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(event.target.value);
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(summaryValue);
  };

  return (
    <div className="min-h-screen flex flex-col bg-zinc-900 text-white">
      {/* Main content grows and pushes footer to bottom */}
      <main className="flex-grow flex flex-col items-center px-4 py-8">
        <Header />
        <TextStats text={textValue} />
        <div className="flex flex-col lg:flex-row gap-6 max-w-4xl w-full mx-auto px-2">
          <div className="w-full lg:w-1/2">
            <TextAreaInput value={textValue} onChange={handleTyping} />
          </div>
          <div className="w-full lg:w-1/2">
            <SummaryBox summary={summaryValue} onCopy={handleCopyText} />
          </div>
        </div>


        <button className="mt-6 px-6 py-2 rounded bg-white text-black font-semibold hover:bg-gray-200 transition">
          Résumer
        </button>
      </main>

      {/* Footer stays at the bottom */}
      <Footer />
    </div>
  );
}
