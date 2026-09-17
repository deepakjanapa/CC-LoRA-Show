import { Routes, Route } from "react-router-dom";
import Overview from "@/pages/Overview";
import Problem from "@/pages/Problem";
import Method from "@/pages/Method";
import Data from "@/pages/Data";
import Results from "@/pages/Results";
import Rigor from "@/pages/Rigor";
import Findings from "@/pages/Findings";
import About from "@/pages/About";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="/problem" element={<Problem />} />
      <Route path="/method" element={<Method />} />
      <Route path="/data" element={<Data />} />
      <Route path="/results" element={<Results />} />
      <Route path="/rigor" element={<Rigor />} />
      <Route path="/findings" element={<Findings />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
