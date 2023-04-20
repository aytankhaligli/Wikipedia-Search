import { useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import Info from "./Info";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [lang, setLang] = useState("en");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const hanleClick = () => {
    setSearchQuery(inputValue.trim());
    setIsLoading(true);
  };

  const changLang = (e) => {
    setLang(e.target.value);
  };

  useEffect(() => {
    setData("");
    getData();
  }, [searchQuery, lang]);

  const getData = async () => {
    try {
      const res = await fetch(
        `https://${lang}.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`
      );

      if (!res.ok) {
        throw Error(response.statusText);
      }
      const data = await res.json();
      setData(data.query.search);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mt-20 w-full h-full flex flex-col items-center justify-center">
      {/* <Routes>
        <Route element={<MainPage />} path="/" />
        <Route element={<Info />} path="/wiki/:pageTitle" />
      </Routes> */}
      <MainPage />
      <Info />
      {/* <img src={logo} alt="wikipediya logo" className="w-[150px]" />
      <div className="flex items-center justify-center my-10 relative">
        <input
          type="text"
          placeholder="Type here..."
          value={inputValue}
          onChange={handleChange}
          className="p-4 border w-[600px] rounded-l  focus:outline-none text-blue-900 "
        />
        <select
          className="absolute right-24 focus:outline-none"
          onChange={changLang}
        >
          <option value="eng">Eng</option>
          <option value="az">Aze</option>
          <option value="ru">Ru</option>
          <option value="tr">Tr</option>
        </select>
        <button
          onClick={hanleClick}
          className="p-4 rounded-r bg-blue-400 text-blue-900"
        >
          Search
        </button>
      </div>

      {isLoading ? (
        <BeatLoader color="#123abc" loading={isLoading} />
      ) : (
        data && (
          <div className="flex flex-col items-center ">
            {data.map((res) => (
              <Result key={res.pageid} result={res} lang={lang} />
            ))}
          </div>
        )
      )} */}
    </div>
  );
}

export default App;
