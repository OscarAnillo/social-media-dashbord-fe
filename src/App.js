import {createContext, useState} from 'react';
import TitleComponent from './Components/title-component';
import './App.css';

export const ThemeContext = createContext(null);


function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  }

  return (
      <div className="App" id={theme}>
        <div className="container">
          <TitleComponent toggleTheme={toggleTheme} />
        </div>
      </div>
  );
}

export default App;
