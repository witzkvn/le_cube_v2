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

const cards = [
  {
    pathTo: "/alimentation",
    image: AlimentationImage,
    title: "Besoins alimentaires",
    subTitle: "Protéines, vitamines, nutriments, sans manger d'animaux.",
  },
  {
    pathTo: "/cuisine",
    image: CuisineImage,
    title: "Cuisiner végétal",
    subTitle:
      "Une cuisine délicieuse, riche, colorée. Comment la préparer ? Inclus des recettes petits budgets !",
  },
  {
    pathTo: "/sport",
    image: SportImage,
    title: "Sport et végétalisme",
    subTitle: "Un duo gagnant !",
  },
  {
    pathTo: "/sante",
    image: LifeImage,
    title: "Pour tous les âges",
    subTitle: "Enfants, adultes, séniors.",
  },
  {
    pathTo: "/veggie-challenge",
    image: VeggieChallengeImage,
    title: "Le Veggie Challenge",
    subTitle:
      "Vous accompagner dans votre transition vers une cuisine végétale.",
  },
  {
    pathTo: "/conseils",
    image: TipsImage,
    title: "Conseils pratiques",
    subTitle: "Vivre sans les exploiter.",
  },
];

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
        {cards &&
          cards.map((card, index) => (
            <Link to={card.pathTo} key={index}>
              <CardLayout>
                <div className="h-52 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2>
                    <span className="block uppercase font-bold text-3xl">
                      {card.title}
                    </span>
                    {card.subTitle}
                  </h2>
                </div>
              </CardLayout>
            </Link>
          ))}
      </GridSectionWrapper>
    </PageMainLayout>
  );
};

export default HowPage;
