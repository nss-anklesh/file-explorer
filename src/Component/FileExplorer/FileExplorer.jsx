import React, { useState } from "react";
import fileSystem from "../../data/fileSystem.json";
import Sidebar from "../Sidebar/Sidebar";
import Content from "../MainContent/Content";

const FileExplorer = () => {
  const [fs, setFs] = useState(fileSystem);
  const [selectedFolder, setSelectedFolder] = useState(null);

  // selection
  const handleFolderSelect = (folder) => {
    setSelectedFolder(folder);
  };

  // delete file
  const deleteFile = (folder, fileName) => {
    const updatedFs = { ...fs };
    folder.children = folder.children.filter((child) => child.name !== fileName);
    setFs(updatedFs);
  };

  // Edit
  const renameFile = (file, newName) => {
    const updatedFs = { ...fs };
    file.name = newName;
    setFs(updatedFs);
  };

  return (
    <div className="main-wrapper">
      <aside>
        <Sidebar
          node={fs}
          onFolderSelect={handleFolderSelect}
          selectedFolder={selectedFolder}
        />
      </aside>
      <div className="content">
        <h1>File Explorer</h1>
        <Content
          selectedFolder={selectedFolder}
          deleteFile={deleteFile}
          renameFile={renameFile}
        />
      </div>
    </div>
  );
};

export default FileExplorer;