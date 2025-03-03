import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Content = ({ selectedFolder, deleteFile, renameFile }) => {
  if (!selectedFolder) {
    return <p>Select a folder to view its files.</p>;
  }

  return (
    <div>
      <h2>Files in {selectedFolder.name}</h2>
      <table className="explorer-table">
        <thead>
            <tr>
                <th align="left">S. No.</th>
                <th align="left">Name</th>
                <th align="center">Action</th>
            </tr>
        </thead>
        <tbody>
            {selectedFolder.children.map((file, index) => (
                <tr key={file.name}>
                    <td>{index+1}</td>
                    <td>{file.name}</td>
                    <td align="center">
                    <button className="btn edit-btn" onClick={() => renameFile(file, prompt("Enter new name:"))}>
                        <FaEdit/> Rename
                    </button>
                    <button className="btn delete-btn ml-10" onClick={() => deleteFile(selectedFolder, file.name)}>
                        <FaTrash/> Delete
                    </button>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Content;