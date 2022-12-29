import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
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

  if (isLoading)
    return (
      <PageMainLayout customClasses={"flex justify-center min-h-screen"}>
        <Loader />
      </PageMainLayout>
    );

  if (!isLoading && error)
    return (
      <PageMainLayout customClasses={"flex justify-center min-h-screen"}>
        <div className="font-bold text-red-800 text-center">
          Une erreur est survenue dans la récupérations des informations.
          <br />
          Merci de recharger la page ou de signaler le problème
          <br />
          <a
            href="mailto:witz.kevin05@gmail.com?subject=Signalement%20d'un%20bug%20sur%20le-cube.fr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open a test email in your default mail client"
          >
            {" "}
            en cliquant ici.
          </a>
        </div>
      </PageMainLayout>
    );

  return (
    <PageMainLayout>
      <div className="text-center">
        <h1 className="font-oswald text-4xl mb-24">Films & Vidéos</h1>
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
