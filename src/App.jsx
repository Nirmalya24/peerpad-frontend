import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import LandingPage from "./LandingPage";
import CodingPage from "./CodingPage";
import CodeTextArea from "./components/CodeTextArea";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/coding" element={<CodingPage />} />
        <Route path="/code" element={<CodeTextArea language="cpp" />} />
      </Routes>
    </div>
  );
}

export default App;
