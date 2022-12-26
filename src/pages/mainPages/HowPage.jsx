import React from "react";
import { Link } from "react-router-dom";
import CardLayout from "../../layout/CardLayout";
import GridSectionWrapper from "../../layout/GridSectionWrapper";
import PageMainLayout from "../../layout/PageMainLayout";
import AlimentationImage from "../../assets/how/les-vitamines-3.jpg";
import CuisineImage from "../../assets/how/how_main.jpg";
import SportImage from "../../assets/how/sport.jpg";
import LifeImage from "../../assets/how/etres-humains4.jpeg";
import VeggieChallengeImage from "../../assets/how/veggie-chalenge.jpg";
import TipsImage from "../../assets/how/environnement-3.jpg";

const HowPage = () => {
  return (
    <PageMainLayout>
      <div className="text-center mb-12">
        <h1 className="text-5xl mb-24 font-bold">
          Comment ne plus exploiter les animaux ?
        </h1>
        <p className="text-xl font-bold">
          Passer des bonnes intentions aux bonnes pratiques :
        </p>
        <p>
          Vos actes seront en accord avec vos valeurs, les animaux ne seront
          plus torturés et maltraités à cause de vous.
        </p>
      </div>
      <GridSectionWrapper>
        <Link to="/alimentation">
          <CardLayout>
            <div className="h-52 overflow-hidden">
              <img
                src={AlimentationImage}
                alt="Besoins alimentaires"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2>
                <span className="block uppercase font-bold text-3xl">
                  Besoins alimentaires
                </span>
                Protéines, vitamines, nutriments, sans manger d'animaux.
              </h2>
            </div>
          </CardLayout>
        </Link>
        <Link to="/cuisine">
          <CardLayout>
            <div className="h-52 overflow-hidden">
              <img
                src={CuisineImage}
                alt="Cuisiner végétal"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2>
                <span className="block uppercase font-bold text-3xl">
                  Cuisiner végétal
                </span>
                Une cuisine délicieuse, riche, colorée. Comment la préparer ?
                Inclus des recettes petits budgets !
              </h2>
            </div>
          </CardLayout>
        </Link>
        <Link to="/sport">
          <CardLayout>
            <div className="h-52 overflow-hidden">
              <img
                src={SportImage}
                alt="Sport et végétalisme"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2>
                <span className="block uppercase font-bold text-3xl">
                  Sport et végétalisme
                </span>
                Un duo gagnant !
              </h2>
            </div>
          </CardLayout>
        </Link>
        <Link to="/sante">
          <CardLayout>
            <div className="h-52 overflow-hidden">
              <img
                src={LifeImage}
                alt="Pour tous les âges"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2>
                <span className="block uppercase font-bold text-3xl">
                  Pour tous les âges
                </span>
                Enfants, adultes, séniors.
              </h2>
            </div>
          </CardLayout>
        </Link>
        <Link to="/veggie-challenge">
          <CardLayout>
            <div className="h-52 overflow-hidden">
              <img
                src={VeggieChallengeImage}
                alt="Veggie Challenge"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2>
                <span className="block uppercase font-bold text-3xl">
                  Le Veggie Challenge
                </span>
                Vous accompagner dans votre transition vers une cuisine
                végétale.
              </h2>
            </div>
          </CardLayout>
        </Link>
        <Link to="/conseils">
          <CardLayout>
            <div className="h-52 overflow-hidden">
              <img
                src={TipsImage}
                alt="Conseils pratiques"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2>
                <span className="block uppercase font-bold text-3xl">
                  Conseils pratiques
                </span>
                Vivre sans les exploiter.
              </h2>
            </div>
          </CardLayout>
        </Link>
      </GridSectionWrapper>
    </PageMainLayout>
  );
};

export default HowPage;
