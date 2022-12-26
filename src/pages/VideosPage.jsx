import React, { useEffect, useState } from "react";
import VideoPreview from "../components/VideoPreview";
import PageMainLayout from "../layout/PageMainLayout";
import client from "../services/contentfulClient";

const VideosPage = () => {
  const [videos, setVideos] = useState();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getVideos = async () => {
    setError(false);
    try {
      const videos = await client.getEntries({
        content_type: "videoPage",
        order: "sys.createdAt",
      });
      setVideos(videos.items);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getVideos().then(() => setIsLoading(false));
  }, []);

  if (isLoading) return <div>Chargement...</div>;

  if (!isLoading && error)
    return (
      <div>Une erreur est survenue dans la récupérations des informations.</div>
    );

  return (
    <PageMainLayout>
      <div className="text-center">
        <h1 className="font-oswald text-4xl mb-6">Films & Vidéos</h1>
        <p>
          Les animaux sont des individus sensibles, ils ressentent la peur, la
          douleur et le plaisir.
        </p>
        <p className="mb-12">
          Ils éprouvent des émotions, ont des désirs, et leur vie compte pour
          eux. Ils sont pourtant traités comme des marchandises, entassés dans
          des élevages et tués à la chaine.
        </p>
      </div>
      {videos &&
        videos.map((vid) => (
          <div key={vid.sys.id} className="mb-16">
            <div className="flex flex-col items-center lg:flex-row lg:items-start">
              <VideoPreview url={vid.fields.videoUrl} />
              <div className="w-full sm:w-[560px] mt-4 lg:mt-0 lg:ml-4 lg:w-auto">
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
    </PageMainLayout>
  );
};

export default VideosPage;
