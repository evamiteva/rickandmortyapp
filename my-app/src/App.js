import React from "react";
import Filters from './Filters';
import CharacterList from "./characterList"; // Import CharacterList
import './App.css';



const App = () => {
  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <CharacterList /> {/* Use the CharacterList component */}
    </div>
  );
};


export default App;
