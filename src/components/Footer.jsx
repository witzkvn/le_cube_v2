import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center p-6 mt-24 lg:text-left">
      <div className="container p-6 flex">
        <div className="w-1/3 mr-auto text-center">
          <h3 className="text-3xl mb-6">Rejoignez-nous</h3>
          <p className="mb-6">
            Nous sommes militants bénévoles pour l'association{" "}
            <a
              className="underline"
              href="https://www.anonymousforthevoiceless.org/"
            >
              Anonymous for the Voiceless
            </a>{" "}
            qui possède des antennes partout dans le monde. Aidez les animaux en
            venant militer à nos côtés lors des cubes de la vérité.
          </p>
          <CustomButton>
            <Link to="/rejoindre">Rejoindre le mouvement</Link>
          </CustomButton>
        </div>
        <div>
          <h4 className="text-xl uppercase font-bold mb-6">Liens du site</h4>
          <div className="grid gap-32 lg:grid-cols-3 md:grid-cols-2">
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
                <li>
                  <a href="#!" className="text-gray-800">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-gray-800">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-gray-800">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="uppercase font-bold mb-2.5 text-gray-800">
                Links
              </h5>

              <ul className="list-none mb-0">
                <li>
                  <a href="#!" className="text-gray-800">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-gray-800">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-gray-800">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-gray-800">
                    Link 4
                  </a>
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
