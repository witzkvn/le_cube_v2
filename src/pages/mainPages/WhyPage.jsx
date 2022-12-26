import React from "react";
import { Link } from "react-router-dom";
import CardLayout from "../../layout/CardLayout";
import GridSectionWrapper from "../../layout/GridSectionWrapper";
import PageMainLayout from "../../layout/PageMainLayout";
import PourquoiImage from "../../assets/why/why_main.jpg";
import ElevageImage from "../../assets/other/poulets.jpg";
import FermeImage from "../../assets/other/animaux-ferme.jpg";

const WhyPage = () => {
  return (
    <PageMainLayout customClasses={"text-center "}>
      <div className="mb-12">
        <h1 className="text-5xl mb-24 font-bold">
          Pourquoi arrêter d'exploiter les animaux ?
        </h1>
        <p>
          Les animaux sont des individus, des êtres sensibles, ils ressentent la
          peur, la douleur, ils ont le désir de vivre.
        </p>
        <p>Refuser de les exploiter est un acte de justice.</p>
      </div>
      <GridSectionWrapper>
        <Link to="/videos">
          <CardLayout>
            <div className="h-52 overflow-hidden">
              <img
                src={PourquoiImage}
                alt="Films & Enquêtes"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2>
                <span className="block uppercase font-bold text-3xl">
                  Films & Enquêtes
                </span>
                Pour en savoir davantage
              </h2>
            </div>
          </CardLayout>
        </Link>
        <Link to="/vie-des-animaux">
          <CardLayout>
            <div className="h-52 overflow-hidden">
              <img
                src={ElevageImage}
                alt="Que se passe-t-il dans les élevages ?"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2>
                <span className="block uppercase font-bold text-3xl">
                  Leur vie avant votre assiette
                </span>
                Que se passe-t-il dans les élevages ?
              </h2>
            </div>
          </CardLayout>
        </Link>
        <Link to="/arreter-exploitation-des-animaux">
          <CardLayout>
            <div className="h-52 overflow-hidden">
              <img
                src={FermeImage}
                alt="Ne plus exploiter les animaux"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2>
                <span className="block uppercase font-bold text-3xl">
                  Ne plus les exploiter
                </span>
                Toutes les raisons de faire ce choix
              </h2>
            </div>
          </CardLayout>
        </Link>
      </GridSectionWrapper>
    </PageMainLayout>
  );
};

export default WhyPage;
