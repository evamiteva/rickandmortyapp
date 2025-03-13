import React from "react";
import Filters from './Filters';
import { useTranslation } from 'react-i18next';
import CharacterList from "./characterList"; // Import CharacterList
import './App.css';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <h1>{t('welcome')}</h1>
      <LanguageSwitcher />
      <CharacterList />
    </div>
  );
}

export default App;
