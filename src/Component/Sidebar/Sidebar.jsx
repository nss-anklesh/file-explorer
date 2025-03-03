import React, { useState } from "react";
import { FaFolder, FaFolderOpen } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = ({ node, onFolderSelect, selectedFolder }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    if (node.type === "folder") {
      setIsExpanded(!isExpanded);
    }
  };

  const handleFolderClick = () => {
    if (node.type === "folder") {
      onFolderSelect(node);
    }
  };

  return (
    <div className="sidebar-list-wrapper">
      <div
        onClick={handleToggle}
        className="slidebar-list"
        style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
      >
        <div className="sidebar-item">
          {node.type === "folder" ? (
            isExpanded ? <FaFolderOpen /> : <FaFolder />
          ) : null}
          <span
            onClick={handleFolderClick}
            style={{
              marginLeft: "10px",
              fontWeight: selectedFolder?.name === node.name ? "bold" : "normal",
            }}
          >
            {node.name}
          </span>
        </div>
      </div>
      {isExpanded && node.children && (
        <div style={{ marginLeft: "20px" }}>
          {node.children.map(
            (child) =>
              child.type === "folder" && (
                <Sidebar
                  key={child.name}
                  node={child}
                  onFolderSelect={onFolderSelect}
                  selectedFolder={selectedFolder}
                />
              )
          )}
        </div>
      )}
    </div>
  );
};

export default Sidebar;