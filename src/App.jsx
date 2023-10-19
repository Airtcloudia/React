import { useState, useContext } from "react";
import "./App.css";
import Clock from "./Clock";
import LanguageContext from "./LanguageContext";

function App() {
  const [language, setLanguage] = useState("it");

  const handleSetLanguage = (language) => {
    setLanguage(language);
  };

  return (
    <div>
      <button onClick={() => handleSetLanguage("it")}>IT</button>
      <button onClick={() => handleSetLanguage("en")}>EN</button>
      {/* <LanguageContext.Provider value={language}> /}
        <Clock />
      {/ </LanguageContext.Provider> */}
    </div>
  );
}

export default App;

// Rimuovere il provider di contesto. Cosa succede al Clockcomponente? Perché?
//Rimuovendo "LanguageContext.provider" il componente Clock non ha dunque, più accesso al componente LanguageContext e quindi il parametro language risulterà undefined;
// l'orario verrà comunque mostrato aggiornato ma non sarà possibile fare lo switch tra i due linguaggi (IT,EN).


