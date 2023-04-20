import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Info() {
  const [pageTitle, setPageTitle] = useState("book");
  const [pageContent, setPageContent] = useState("");
  const [pageImages, setPageImages] = useState([]);

  // let params = useParams();
  // console.log(pageTitle);

  // useEffect(() => {
  //   setPageTitle(params.pageTitle);
  // }, []);

  const fetchPageData = async () => {
    const pageContentUrl = `/api?action=parse&format=json&page=${pageTitle}&prop=text`;
    const pageImagesUrl = `/api?action=query&format=json&titles=Book&prop=pageimages&piprop=original`;

    const [contentResponse, imagesResponse] = await Promise.all([
      fetch(pageContentUrl),
      fetch(pageImagesUrl),
    ]);
    if (!contentResponse.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    const contentData = await contentResponse.json();
    const imagesData = await imagesResponse.json();

    const pageContent = contentData?.parse?.text?.["*"];
    const pageImages = Object.values(imagesData?.query?.pages)[0]?.original
      ?.source;
    console.log(contentData, imagesData);
    setPageContent(pageContent);
    setPageImages(pageImages);
  };

  useEffect(() => {
    fetchPageData();
  }, [pageTitle]);

  return (
    <div>
      <h1>{pageTitle}</h1>
      <img src={pageImages} alt={`${pageTitle} image`} />
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
    </div>
  );
}
