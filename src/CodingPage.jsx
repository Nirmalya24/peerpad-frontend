import CodeStatusBar from "./components/CodeStatusBar";
import CodeTextArea from "./components/CodeTextArea";
import Accordion from "./components/Accordion";
import QuestionsDropdown from "./components/QuestionsDropdown";
import LanguageSelectionDropdown from "./components/LanguageSelectionDropdown";
import { useState } from "react";

export default function CodingPage() {
  const [question, setQuestion] = useState("");
  const [questionDescriptions, setQuestionDescription] = useState("");
  const handleQuestionChange = (question, questionDescription) => {
    setQuestion(question);
    setQuestionDescription(questionDescription);
  };

  const [language, setLanguage] = useState("");
  const [languageHello, setLanguageHello] = useState("");
  const handleLanguageChange = (language, languageHello) => {
    setLanguage(language);
    setLanguageHello(languageHello);
  };
  return (
    <div className="h-screen bg-purple-900">
      <div></div>
      <header className="w-full relative p-6 text-white">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-pink-500">{"<PeerPad/>"}</h1>
          <CodeStatusBar />
        </div>
      </header>
      <section className="w-full relative p-2 h-5/6">
        <div className="flex flex-row h-full">
          <div className="bg-red-500 flex-1 mx-1 h-full">
            <QuestionsDropdown onChange={handleQuestionChange} />
            <CodeTextArea
              language="plaintext"
              value={
                question === ""
                  ? "Interviewer Space"
                  : question + "\n" + questionDescriptions
              }
            />
          </div>
          <div className="bg-blue-500 flex-1 mx-1 h-5/6">
            <LanguageSelectionDropdown onChange={handleLanguageChange} />
            <CodeTextArea
              language={language === "" ? "plaintext" : language}
              value={language === "" ? "" : languageHello}
            />
            <Accordion
              name="Output"
              output="Code output"
              className="border-0"
            />
          </div>
        </div>
        {/* <div className="bg-red-100 w-1/2 h-2 inline-block">
          <textarea name="" id="" className="w-full"></textarea>
        </div>
        <div className="bg-blue-100 w-1/2 h-2 inline-block">
          <textarea name="" id="" className="w-full "></textarea>
        </div> */}
      </section>
    </div>
  );
}
