import React, { useState } from "react";

import Naav from "./component/naav/Naav";

import "./App.css";
import { LangProvider } from "./langContext/LangContext";
import Routing from "./routing/routing";
import i18n from "./i18n";
const App = () => {
  const [lang, setlang] = useState(i18n.language);
  console.log(lang);
  i18n.on("languageChanged", () => setlang(i18n.language));
  return (
    <div
      dir={lang === "en" ? "ltr" : "rtl"}
      style={{ fontFamily: lang === "en" ? "Poppins" : "Cairo" }}
    >
      <LangProvider value={{ lang, setlang }}>
        <Naav />
        <Routing />
      </LangProvider>
    </div>
  );
};

export default App;
