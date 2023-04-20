import { useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import Info from "./Info";

function App() {
  const [lang, setLang] = useState("en");
  return (
    <div className=" w-full h-full flex flex-col items-center justify-center">
      <Routes>
        <Route element={<MainPage lang={lang} setLang={setLang} />} path="/" />
        <Route element={<Info lang={lang} />} path="/:pageTitle" />
      </Routes>
    </div>
  );
}

export default App;
