import {createContext, useState} from 'react';

import TitleComponent from './Components/title-component';
import MainCards from './Components/main-cards';
import SecondaryCards from './Components/secondary-cards';

import './App.css';
export const ThemeContext = createContext(null);


function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  }

  return (
      <div className="App" id={theme}>
          <TitleComponent theme={theme} toggleTheme={toggleTheme} />
        <div className="container">
          <MainCards />
          <SecondaryCards />
        </div>
      </div>
  );
}

export default App;
