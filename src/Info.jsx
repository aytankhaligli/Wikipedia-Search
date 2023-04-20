import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Info({ lang }) {
  const [pageTitle, setPageTitle] = useState("Book");
  const [pageContent, setPageContent] = useState("");

  const params = useParams();

  const url =
    `https://${lang}.wikipedia.org/w/api.php?` +
    new URLSearchParams({
      origin: "*",
      action: "parse",
      page: pageTitle,
      format: "json",
    });

  const fetchPageData = async () => {
    try {
      const req = await fetch(url);
      const json = await req.json();
      const pageContent = json.parse.text["*"];
      setPageContent(pageContent);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    fetchPageData();
    setPageTitle(params.pageTitle);
  }, [pageTitle]);
  return (
    <div className="bg-gray-50 p-5 text-gray-800">
      <h1 className="text-2xl text-blue-900 mb-5">{pageTitle}</h1>

      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
    </div>
  );
}
