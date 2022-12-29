import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import VideoPreview from "../../components/VideoPreview";
import isYoutubeLink from "../../helpers/utils/isYoutubeLink";
import PageMainLayout from "../../layout/PageMainLayout";
import client from "../../services/contentfulClient";

const TipsPage = () => {
  const [links, setLinks] = useState();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getLinks = async () => {
    setError(false);
    try {
      const links = await client.getEntries({
        content_type: "tips",
        order: "sys.createdAt",
      });
      setLinks(links.items);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getLinks().then(() => setIsLoading(false));
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

  const LinkCardItem = ({ link }) => (
    <div key={link.sys.id} className="mb-16">
      <div className="flex flex-col items-center lg:flex-row lg:items-start">
        {link.fields.lien &&
        isYoutubeLink(link.fields.lien) &&
        !link.fields.image?.fields.file.url ? (
          <VideoPreview url={link.fields.lien} />
        ) : (
          link.fields.image?.fields.file.url && (
            <img
              className="w-full object-contain min-h-[250px] sm:w-[560px] sm:h-[315px]"
              src={`https:${link.fields.image?.fields.file.url}`}
              alt="Besoins alimentaires"
            />
          )
        )}
        <div className="w-full sm:w-[560px] mt-4 lg:mt-0 lg:ml-4 lg:w-auto">
          {link.fields.lien ? (
            <a
              href={link.fields.lien}
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-blue-600 mb-2 block"
            >
              {link.fields.titre}
            </a>
          ) : (
            <p className="text-2xl text-blue-600 mb-2 block">
              {link.fields.titre}
            </p>
          )}

          <p className="mb-6">{link.fields.description}</p>
          <div onClick={(e) => e.preventDefault()}>
            {link.fields.lien && (
              <p>
                Lien du contenu :{" "}
                <a
                  href={link.fields.lien}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500"
                  onClick={(e) => e.stopPropagation()}
                >
                  {link.fields.lien}
                </a>
              </p>
            )}
            {link.fields.lien2 && (
              <p>
                Autre lien utile :{" "}
                <a
                  href={link.fields.lien2}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500"
                  onClick={(e) => e.stopPropagation()}
                >
                  {link.fields.lien2}
                </a>
              </p>
            )}
            {link.fields.lien3 && (
              <p>
                Autre lien utile :{" "}
                <a
                  href={link.fields.lien3}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500"
                  onClick={(e) => e.stopPropagation()}
                >
                  {link.fields.lien3}
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <PageMainLayout>
      <div className="text-center">
        <h1 className="font-oswald text-4xl mb-24">
          Une alimentation adaptée pour tous
        </h1>
      </div>
      {links &&
        links.map((link) => {
          if (link.fields.lien && !isYoutubeLink(link.fields.lien)) {
            return (
              <a href={link.fields.lien} target="_blank" rel="noreferrer">
                <LinkCardItem link={link} />
              </a>
            );
          } else {
            return <LinkCardItem link={link} />;
          }
        })}
    </PageMainLayout>
  );
};

export default TipsPage;
