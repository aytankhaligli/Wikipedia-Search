import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Result({ result, lang }) {
  const [url, setUrl] = useState(
    `https://${lang}.wikipedia.org/?curid=${result.pageid}`
  );

  const formattedSnippet = result.snippet.replace(/<[^>]*>?/gm, "");

  return (
    <Link
      to={result.title}
      className="w-full  border-b text-blue-900 flex flex-col  p-5 hover:bg-blue-200"
    >
      <h1 className="font-bold">
        <Link to={result.title}>{result.title}</Link>
      </h1>
      {/* <a href={url} className="text-blue-400" target="_blank" rel="noopener">
        {url}
      </a> */}
      <span>{formattedSnippet}</span>
    </Link>
  );
}
