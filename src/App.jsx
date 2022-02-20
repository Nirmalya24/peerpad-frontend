import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import LandingPage from "./LandingPage";
import CodingPage from "./CodingPage";
import CodeTextArea from "./components/CodeTextArea";
import Accordion from "./components/Accordion";
import QuestionsDropdown from "./components/QuestionsDropdown";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/coding" element={<CodingPage />} />
        <Route path="/code" element={<CodeTextArea language="cpp" />} />
        <Route
          path="/accordion"
          element={
            <Accordion name="Output" output="Output will be displayed here" />
          }
        />
        <Route path="/dropdown" element={<QuestionsDropdown />} />
      </Routes>
    </div>
  );
}

export default App;
