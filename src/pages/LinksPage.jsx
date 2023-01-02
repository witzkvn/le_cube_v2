import React, { useCallback, useEffect, useState } from "react";
import LinkCard from "../components/LinkCard";
import Loader from "../components/Loader";
import PageMainLayout from "../layout/PageMainLayout";
import client from "../services/contentfulClient";

const LinksPage = ({ title, fetchId, description }) => {
  const [links, setLinks] = useState();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getLinks = useCallback(async () => {
    setError(false);
    try {
      const links = await client.getEntries({
        content_type: fetchId,
        order: "sys.createdAt",
      });
      setLinks(links.items);
    } catch (error) {
      setError(true);
    }
  }, [fetchId]);

  useEffect(() => {
    setIsLoading(true);
    getLinks().then(() => setIsLoading(false));
  }, [getLinks]);

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
        <h1 className="font-oswald text-4xl mb-24">{title}</h1>
        {description && description}
      </div>
      <section className="grid grid-col-1 gap-12 max-w-max mx-auto mb-24 lg:grid-cols-2">
        {links &&
          links.map((link) => (
            <div key={link.sys.id}>
              <LinkCard link={link} />
            </div>
          ))}
      </section>
    </PageMainLayout>
  );
};

export default LinksPage;
