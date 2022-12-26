import React from "react";

const LegalPage = () => {
  return (
    <div>
      <h1 className="mb-12 text-center text-4xl">Mentions légales</h1>
      <h2 className="text-2xl mb-4">
        Le site le-cube.info est édité à titre personnel, il n'appartient pas à
        une société, une entreprise ou une association.
      </h2>
      <p>
        Les mentions faites de sociétés, entreprises ou associations le sont à
        titre gracieux et n'engagent en rien les sociétés, entreprises ou
        associations citées.
      </p>
      <p>
        Le traitementdes sujets abordés par les auteurs/rédacteurs est libre de
        toute attache aux sociétés, entreprises ou associations mentionnées.
      </p>
      <p>
        Seules les pages officielles des sociétés, entreprises ou associations
        mentionnées peuvent vous informer sur leur position actuelle concernant
        les sujets traités.
      </p>
      <h2 className="text-2xl mb-4 mt-12">Hébergement :</h2>
      <p>neoDomaine.com</p>
      <p>36 rue St Cléophas - 34070 - Montpellier FRANCE</p>
      <p>Contact : contact@neodomaine.com</p>
    </div>
  );
};

export default LegalPage;
