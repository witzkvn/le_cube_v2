import React from "react";

const JoinPage = () => {
  return (
    <div className="text-center">
      <h1 className="text-5xl mb-24 font-bold">Défendez les animaux</h1>
      <div className="mb-24">
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
        <h2 className="mb-6 text-4xl">Trouver une antenne</h2>
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
      </div>
    </div>
  );
};

export default JoinPage;
