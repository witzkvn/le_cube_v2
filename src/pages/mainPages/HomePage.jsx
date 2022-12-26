import React from "react";
import { Link } from "react-router-dom";
import HeaderImage from "../../assets/home/home_header.jpg";
import PourquoiImage from "../../assets/why/why_main.jpg";
import CommentImage from "../../assets/how/how_main.jpg";
import AgirImage from "../../assets/act/act_main.jpg";
import CustomButton from "../../components/CustomButton";
import CardLayout from "../../layout/CardLayout";
import PageMainLayout from "../../layout/PageMainLayout";

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
      <PageMainLayout>
        <section className="grid grid-col-1 gap-12 max-w-max mx-auto mb-24 lg:grid-cols-2 2xl:grid-cols-3">
          <Link to="/pourquoi">
            <CardLayout>
              <div className="h-52 overflow-hidden">
                <img
                  src={PourquoiImage}
                  alt="Pourquoi"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2>
                  <span className="block uppercase font-bold text-3xl">
                    Pourquoi
                  </span>
                  arrêter d'exploiter les animaux ?
                </h2>
              </div>
            </CardLayout>
          </Link>
          <Link to="/comment">
            <CardLayout>
              <div className="h-52 overflow-hidden">
                <img
                  src={CommentImage}
                  alt="Comment"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2>
                  <span className="block uppercase font-bold text-3xl">
                    Comment
                  </span>
                  ne plus exploiter les animaux ?
                </h2>
              </div>
            </CardLayout>
          </Link>
          <Link to="/agir">
            <CardLayout>
              <div className="h-52 overflow-hidden">
                <img
                  src={AgirImage}
                  alt="Agir"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2>
                  <span className="block uppercase font-bold text-3xl">
                    Agir
                  </span>
                  Participez activement à la lutte pour les droits des animaux !
                </h2>
              </div>
            </CardLayout>
          </Link>
        </section>
        <section className="text-center">
          <h2 className="text-4xl mb-6 uppercase font-bold">Nos actions</h2>
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
            qui est spécialisée dans la sensibilisation du public dans les rues,
            en formant des Cubes de la Vérité. Dans ces cubes, nous montrons sur
            des écrans la réalité qu'endurent des milliards d'animaux chaque
            année. Nous sensibilisons les passants en se basant sur ces images
            et en tenant un discours antispéciste et abolitionniste envers
            l'exploitation des animaux.
          </p>
          <CustomButton to="/rejoindre" type="secondary">
            Rejoindre le mouvement
          </CustomButton>
        </section>
      </PageMainLayout>
    </div>
  );
};

export default HomePage;
