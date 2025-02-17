import React, { useState } from "react";
import FrontendProjects from "./FrontendProjects";
import BackendProjects from "./BackendProjects";
import Designs from "./Designs";
import AllProjects from "./AllProjects";
import  "./TabsStyle.css"

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <ul className="tabs">
        <li className={activeTab === "all" ? "active" : ""} onClick={() => handleTabClick("all")}>
          All
        </li>
        <li className={activeTab === "frontend" ? "active" : ""} onClick={() => handleTabClick("frontend")}>
          Frontend
        </li>
        <li className={activeTab === "backend" ? "active" : ""} onClick={() => handleTabClick("backend")}>
          Backend
        </li>
        <li className={activeTab === "graphics" ? "active" : ""} onClick={() => handleTabClick("graphics")}>
          Graphics
        </li>
      </ul>

      {activeTab === "all" && <AllProjects />}
      {activeTab === "frontend" && <FrontendProjects />}
      {activeTab === "backend" && <BackendProjects />}
      {activeTab === "graphics" && <Designs />}
    </div>
  );
};

export default Tabs;

