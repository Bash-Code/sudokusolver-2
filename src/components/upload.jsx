import React, { useState } from "react";
import {BounceLoader} from 'react-spinners';
import "./App.css";

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [isLoading, setIsLoading]= useState(false);
  const [canotSolve, setCanotSolve]= useState(true);

  const fileSelectedHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
    setCanotSolve(false);
  };

  const fileUploadHandler = () => {
    const formData = new FormData();
    formData.append("image", selectedFile);

    fetch("http://localhost:5000/getPuzzle",{
      method: "POST",
      body: formData,
    }).then(response => {
      console.log(response);
    })
    setIsLoading(true);
  };
  

  return (
    <div className="sudokufile">
      <label>Upload Here a picture of your sudoku</label>
      <br />

      <input
        type="file"
        id="sudoku"
        name="file"
        onChange={fileSelectedHandler}
      />
      <button disabled={canotSolve} type="button" onClick={fileUploadHandler}>
        solve
      </button>
    </div>
  );
}

export default Upload;
