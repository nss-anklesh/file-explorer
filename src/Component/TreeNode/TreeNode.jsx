import React, { useState } from "react";
import { FaFolder, FaFolderOpen } from "react-icons/fa";

const TreeNode = ({ node, onFolderSelect, selectedFolder }) => {
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
    <div>
      <div
        onClick={handleToggle}
        style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
      >
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
      {isExpanded && node.children && (
        <div style={{ marginLeft: "20px" }}>
          {node.children.map(
            (child) =>
              child.type === "folder" && (
                <TreeNode
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

export default TreeNode;