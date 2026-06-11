import { useState } from "react";
import Sidebar from "./components/Sidebar";
import BrainMap from "./components/BrainMap";
import SkillPanel from "./components/SkillPanel";

function App() {
  const [activeSkill, setActiveSkill] = useState("programming");

  return (
    <div className="app">
      <Sidebar />
      <BrainMap activeSkill={activeSkill} setActiveSkill={setActiveSkill} />
      <SkillPanel activeSkill={activeSkill} setActiveSkill={setActiveSkill} />
    </div>
  );
}

export default App;

