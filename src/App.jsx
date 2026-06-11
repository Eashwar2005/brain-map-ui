import { useState } from "react";
import Sidebar from "./components/Sidebar";
import BrainMap from "./components/BrainMap";
import SkillPanel from "./components/SkillPanel";

function App() {
  const [activeSkill, setActiveSkill] = useState("programming");
  const [focusMode, setFocusMode] = useState(true);

  return (
    <div className="app" style={{ overflow: "hidden" }}>
      <Sidebar focusMode={focusMode} />
      <BrainMap 
        activeSkill={activeSkill} 
        setActiveSkill={setActiveSkill} 
        focusMode={focusMode} 
        setFocusMode={setFocusMode} 
      />
      <SkillPanel 
        activeSkill={activeSkill} 
        setActiveSkill={setActiveSkill} 
        focusMode={focusMode} 
      />
    </div>
  );
}

export default App;

