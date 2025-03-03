import React, { useState } from "react";
import { FaFolder, FaFolderOpen } from "react-icons/fa";

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

  if (node.name === "root") {
    return (
      <div>
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
    );
  }

  return (
    <div>
      <ul>
      <li
        onClick={handleToggle}
        style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
      >
        {node.type === "folder" ? (
          selectedFolder?.name === node.name  ? <FaFolderOpen /> : <FaFolder />
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
      </li>
      
      </ul>
    </div>
  );
};

export default Sidebar;