import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-6 mt-24 lg:text-left">
      <div className="p-6 w-full lg:flex lg:justify-center">
        <div className="w-full mb-24 text-center lg:mr-24 lg:w-1/3 lg:mb-0 xl:mr-56">
          <h3 className="text-3xl mb-6">Rejoignez-nous</h3>
          <p className="mb-6">
            Nous sommes militants bénévoles pour l'association{" "}
            <a
              target="_blank"
              className="underline"
              href="https://www.anonymousforthevoiceless.org/"
              rel="noreferrer"
            >
              Anonymous for the Voiceless
            </a>{" "}
            qui possède des antennes partout dans le monde. Aidez les animaux en
            venant militer à nos côtés lors des cubes de la vérité.
          </p>
          <CustomButton to="/rejoindre">Rejoindre le mouvement</CustomButton>
        </div>
        <div>
          <h4 className="text-xl uppercase font-bold mb-6">Liens du site</h4>
          <div className="grid gap-6  md:grid-cols-2 lg:grid-cols-3 lg:gap-32">
            <div className="mb-6">
              <ul>
                <li className="mb-3">
                  <Link to="/pourquoi" className="hover:text-orange-600">
                    Pourquoi
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/comment" className="hover:text-orange-600">
                    Comment
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/agir" className="hover:text-orange-600">
                    Agir
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="/veggie-challenge"
                    className="hover:text-orange-600"
                  >
                    Veggie-challenge
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <ul className="list-none mb-0">
                <li className="mb-3">
                  <Link to="/videos" className="hover:text-orange-600">
                    Films et vidéos
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/vie-des-animaux" className="hover:text-orange-600">
                    Infos animaux
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="/arreter-exploitation-des-animaux"
                    className="hover:text-orange-600"
                  >
                    Stop Exploitation
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/alimentation" className="hover:text-orange-600">
                    Alimentation
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <ul className="list-none mb-0">
                <li className="mb-3">
                  <Link to="/cuisine" className="hover:text-orange-600">
                    Cuisine
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/sport" className="hover:text-orange-600">
                    Sport
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/sante" className="hover:text-orange-600">
                    Santé
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/conseils" className="hover:text-orange-600">
                    Conseils Pratiques
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="text-gray-700 text-center mt-12">
        <Link to="/mentions-legales" className="hover:text-orange-600">
          Mentions légales
        </Link>{" "}
        - © {new Date().getFullYear()} Copyright :{" "}
        <a className="hover:text-orange-600" href="https://github.com/witzkvn">
          witzkvn
        </a>{" "}
        pour Anonymous For The Voiceless France
      </div>
    </footer>
  );
};

export default Footer;
