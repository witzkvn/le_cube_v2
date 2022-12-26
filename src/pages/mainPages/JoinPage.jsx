import React from "react";
import PageMainLayout from "../../layout/PageMainLayout";

const JoinPage = () => {
  return (
    <PageMainLayout>
      <div className="text-center">
        <h1 className="text-5xl mb-24 font-bold">Défendez les animaux</h1>
        <div className="mb-20">
          <h2 className="mb-6 text-4xl">Nous contacter</h2>
          <p>Pour nous rejoindre, vous pouvez nous contacter par email :</p>
          <a
            href="mailto:le.cube.francophone@gmail.com"
            className="text-2xl text-orange-600 underline"
          >
            le.cube.francophone@gmail.com
          </a>
        </div>
        <div>
          <h2 className="mb-6 text-4xl">Agir en militant avec nous</h2>
          <p className="mb-4 font-bold text-xl">
            Vous êtes déjà vegan ? Faites plus pour défendre les droits des
            animaux : Agissez !
          </p>

          <p>
            Chaque année des milliards d'animaux sont exploités et tués pour
            satisfaire le plaisir et les intérêts humains.
          </p>
          <p className="mb-4">
            En étant vegan vous ne participez plus à ce massacre, mais il
            continue autour de vous.
          </p>
          <p>
            Vous pouvez agir dès aujourd'hui pour mettre fin à cette injustice
            et militer pour les droits des animaux : Rejoignez un groupe de
            militant·es efficaces pour réellement défendre les animaux !
          </p>
          <a
            target="_blank"
            className="underline text-orange-600  text-2xl block my-8"
            href="https://www.anonymousforthevoiceless.org/join"
            rel="noreferrer"
          >
            Rejoindre Anonymous for the Voiceless
          </a>
          <p className="mb-4">
            Il existe des antennes{" "}
            <a
              target="_blank"
              className="underline"
              href="https://www.anonymousforthevoiceless.org/"
              rel="noreferrer"
            >
              d'Anonymous for the Voiceless
            </a>{" "}
            partout dans le monde. Trouvez la plus proche de chez vous sur cette
            carte interactive. En cliquant dessus, vous obtiendrez les liens de
            contact avec cette antenne.
          </p>
          <div>
            <iframe
              className="mx-auto"
              title="join-us"
              src="https://www.google.com/maps/d/embed?mid=17Y1nr0AHYZN7oZjFRo2EHupgEek&ehbc=2E312F"
              width="640"
              height="480"
            ></iframe>
          </div>
          <p className="mt-12 uppercase text-3xl font-bold underline underline-offset-8">
            Votre action est majeure
          </p>
        </div>
      </div>
    </PageMainLayout>
  );
};

export default JoinPage;
