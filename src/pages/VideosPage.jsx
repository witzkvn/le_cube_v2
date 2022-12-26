import React, { useEffect, useState } from "react";
import VideoPreview from "../components/VideoPreview";
import client from "../services/contentfulClient";

const VideosPage = () => {
  const [videos, setVideos] = useState();
  const [error, setError] = useState(false);
  const getVideos = async () => {
    setError(false);
    try {
      const videos = await client.getEntries("videoPage");
      setVideos(videos.items);
      console.log("🚀 ~ file: videosPage.jsx:8 ~ getVideos ~ videos", videos);
    } catch (error) {
      console.log("🚀 ~ file: videosPage.jsx:8 ~ getVideos ~ error", error);
      setError(true);
    }
  };

  useEffect(() => {
    console.log(
      process.env.REACT_APP_CONTENTFUL_AT,
      process.env.REACT_APP_CONTENTFUL_SPACEID
    );
    getVideos();
    console.log(client);
  }, []);

  if (error)
    return (
      <div>Une erreur est survenue dans la récupérations des informations.</div>
    );

  return (
    <main>
      <h1 className="font-oswald text-4xl text-center mb-6">Films & Vidéos</h1>
      <p>
        Les animaux sont des individus sensibles, ils ressentent la peur, la
        douleur et le plaisir.
      </p>
      <p className="mb-12">
        Ils éprouvent des émotions, ont des désirs, et leur vie compte pour eux.
        Ils sont pourtant traités comme des marchandises, entassés dans des
        élevages et tués à la chaine.
      </p>
      {videos &&
        videos.map((vid) => (
          <div key={vid.sys.id} className="mb-12">
            <div className="flex">
              <VideoPreview url={vid.fields.videoUrl} />
              <div className="ml-4">
                {vid.fields.videoUrl ? (
                  <a
                    href={vid.fields.videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-2xl text-blue-600 mb-2 block"
                  >
                    {vid.fields.titre}
                  </a>
                ) : (
                  <p className="text-2xl text-blue-600 mb-2 block">
                    {vid.fields.titre}
                  </p>
                )}
                <p className="mb-6">{vid.fields.description}</p>
                {vid.fields.videoUrl && (
                  <p>
                    Lien du contenu :{" "}
                    <a
                      href={vid.fields.videoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-500"
                    >
                      {vid.fields.videoUrl}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
    </main>
  );
};

export default VideosPage;
