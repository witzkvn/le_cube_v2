import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import CardLayout from "../layout/CardLayout";
import GridSectionWrapper from "../layout/GridSectionWrapper";
import PageMainLayout from "../layout/PageMainLayout";
import client from "../services/contentfulClient";

const AnimalsInfos = () => {
  const [links, setLinks] = useState();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getLinks = async () => {
    setError(false);
    try {
      const liens = await client.getEntries({
        content_type: "animalsInformationLink",
        order: "sys.createdAt",
      });
      setLinks(liens.items);
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

  return (
    <PageMainLayout>
      <div className="text-center mb-12">
        <h1 className="text-5xl mb-24 font-bold">
          Leur vie avant votre assiette
        </h1>
        <p>Que se passe-t-il dans les élevages ?</p>
        <p>Conditions de vie, de transport et de mise à mort.</p>
      </div>
      <GridSectionWrapper>
        {links &&
          links.map((link) => (
            <a
              key={link.sys.id}
              href={link.fields.lien}
              target="_blank"
              rel="noreferrer"
            >
              <CardLayout>
                <div className="h-52 overflow-hidden">
                  <img
                    src={`https:${link.fields.image.fields.file.url}`}
                    alt="Connaitre les animaux"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2>
                    <span className="block uppercase font-bold text-3xl">
                      {link.fields.titre}
                    </span>
                    {link.fields.sousTitre ?? ""}
                  </h2>
                </div>
              </CardLayout>
            </a>
          ))}
      </GridSectionWrapper>
    </PageMainLayout>
  );
};

export default AnimalsInfos;
