import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Result({ result, lang }) {
  const [url, setUrl] = useState(
    `https://${lang}.wikipedia.org/?curid=${result.pageid}`
  );

  const formattedSnippet = result.snippet.replace(/<[^>]*>?/gm, "");

  return (
    <div className="w-full  border-b text-blue-900 flex flex-col  p-5 hover:bg-blue-200">
      <h1 className="font-bold">
        {/* <a href={url} target="_blank" rel="noopener">
          {result.title}
        </a> */}
        <Link to={result.title}>{result.title}</Link>
      </h1>
      <a href={url} className="text-blue-400" target="_blank" rel="noopener">
        {url}
      </a>
      <span>{formattedSnippet}</span>
    </div>
  );
}
