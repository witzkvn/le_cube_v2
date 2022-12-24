import React from "react";
import HeaderImage from "../assets/header_sm.jpg";

const HomePage = () => {
  return (
    <div>
      <header className="rounded-xl overflow-hidden flex bg-black h-96">
        <div className="flex flex-col shrink justify-center">
          <h1 className="text-6xl mb-8 font-oswald">Le Cube de la Vérité</h1>
          <p className="text-gray-300">
            Manger des animaux, se vêtir de leur peau ou de leur fourrure, se
            distraire grâce à eux, c'est les faire souffrir, les tuer pour votre
            seul intérêt.
            <div className="mt-4 font-bold text-lg">
              Refuser de les exploiter est un acte de justice.
            </div>
          </p>
        </div>
        <div className="h-full w-96 shrink-0 ml-auto">
          <img
            src={HeaderImage}
            alt="Le cube de la vérité"
            className="h-full"
          />
        </div>
      </header>
    </div>
  );
};

export default HomePage;
