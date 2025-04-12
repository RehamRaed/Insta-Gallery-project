import React from "react";
import { PhotoProvider } from "./context/PhotoContext";
import Gallery from "./components/Gallery";
import './App.css';
const App = () => {
  return (
    <PhotoProvider>
      <div className="App">
        <h1>Insta Gallery</h1>
        <Gallery />
      </div>
    </PhotoProvider>
  );
};

export default App;
