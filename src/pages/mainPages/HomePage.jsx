import React from "react";
import HeaderImage from "../../assets/home/home_header.jpg";
import PourquoiImage from "../../assets/why/why_main.jpg";
import CommentImage from "../../assets/how/how_main.jpg";
import AgirImage from "../../assets/act/act_main.jpg";
import HomeCard from "../../components/HomeCard";

const HomePage = () => {
  return (
    <div>
      <header className="bg-black text-white text-center flex flex-col justify-center">
        <div className="mt-auto p-12">
          <h1 className="text-6xl mb-8 font-oswald">Le Cube de la Vérité</h1>
          <p>
            Manger des animaux, se vêtir de leur peau ou de leur fourrure, se
            distraire grâce à eux, c'est les faire souffrir, les tuer pour votre
            seul intérêt.
            <span className="mt-4 font-bold text-lg block underline underline-offset-8">
              Refuser de les exploiter est un acte de justice.
            </span>
          </p>
        </div>
        <div className="mx-auto max-h-[100vh] overflow-hidden">
          <img src={HeaderImage} alt="le cube de la vérité" />
        </div>
      </header>
      <main className="my-12 p-12 xl:p-20">
        <HomeCard
          image={PourquoiImage}
          title="Pourquoi arrêter d'exploiter les animaux ?"
          description={
            <p className="mb-6">
              Découvrez de multiples raisons pour lesquelles il est essentiel
              d'arrêter d'exploiter les animaux. Enquêtes, films, et autres
              ressources ... Découvrez toute la vérité.
            </p>
          }
          actionButtonText="Découvrir"
          actionButtonLink="/pourquoi"
          customClasses="mb-40"
        />
        <HomeCard
          image={CommentImage}
          title="Comment ne plus exploiter les animaux ?"
          type="left"
          description={
            <p className="mb-6">
              Nous vous proposons un ensemble de ressources utiles pour vous
              faciliter la transition vers le véganisme, avec de nombreux
              conseils en alimentations ou en santé.
            </p>
          }
          actionButtonText="Découvrir"
          actionButtonLink="/comment"
          customClasses="mb-40"
        />
        <HomeCard
          image={AgirImage}
          title="Venez militer pour les animaux"
          type="right"
          description={
            <p className="mb-6">
              Nous militons pour l'association{" "}
              <a
                target="_blank"
                className="underline"
                href="https://www.anonymousforthevoiceless.org/"
                rel="noreferrer"
              >
                Anonymous for the Voiceless
              </a>{" "}
              qui est spécialisée dans la sensibilisation du public dans les
              rues, en formant des Cubes de la Vérité. Dans ces cubes, nous
              montrons sur des écrans la réalité qu'endurent des milliards
              d'animaux chaque année. Nous sensibilisons les passants en se
              basant sur ces images.
            </p>
          }
          actionButtonText="Rejoindre le mouvement"
          actionButtonLink="/rejoindre"
        />
      </main>
    </div>
  );
};

export default HomePage;
