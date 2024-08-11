import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [expanded, setExpanded] = useState({
    REM: true,
    ACM: false,
    WEM: false,
    LER: false,
    AM: false,
  });

  const toggleExpand = (item) => {
    setExpanded({ ...expanded, [item]: !expanded[item] });
  };

  return (
    <div className="sidebar">
      <div className="tree-item" onClick={() => toggleExpand("REM")}>
        Reliability Engineering for Maintenance
      </div>
      {expanded.REM && (
        <div className="sub-tree">
          <div className="sub-tree-item" data-fulltext="Criticality Analysis">
            box-1
          </div>
          <div className="sub-tree-item" data-fulltext="Rsd">
            box-2
          </div>
          <div className="sub-tree-item" data-fulltext="Re">
            box-3
          </div>
          <div className="sub-tree-item" data-fulltext="Rca">
            Rca
          </div>
          <div className="sub-tree-item" data-fulltext="Cp">
            Cp
          </div>
          <div className="sub-tree-item" data-fulltext="Rcd">
            Rcd
          </div>
        </div>
      )}
      <div className="tree-item" onClick={() => toggleExpand("ACM")}>
        ACM
      </div>
      {expanded.ACM && (
        <div className="sub-tree">
          <div className="sub-tree-item" data-fulltext="Criticality Analysis">
            box-1
          </div>
          <div className="sub-tree-item" data-fulltext="Rsd">
            Rsd
          </div>
          <div className="sub-tree-item" data-fulltext="Re">
            Re
          </div>
          <div className="sub-tree-item" data-fulltext="Rca">
            Rca
          </div>
          <div className="sub-tree-item" data-fulltext="Cp">
            Cp
          </div>
          <div className="sub-tree-item" data-fulltext="Rcd">
            Rcd
          </div>
        </div>
      )}

      <div className="tree-item" onClick={() => toggleExpand("WEM")}>
        WEM
      </div>
      {expanded.WEM && <div className="sub-tree">...</div>}
      <div className="tree-item" onClick={() => toggleExpand("LER")}>
        LER
      </div>
      {expanded.LER && <div className="sub-tree">...</div>}
      <div className="tree-item" onClick={() => toggleExpand("AM")}>
        AM
      </div>
      {expanded.AM && <div className="sub-tree">...</div>}
    </div>
  );
};

export default Sidebar;
