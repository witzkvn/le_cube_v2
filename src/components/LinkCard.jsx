import React from "react";
import { Link } from "react-router-dom";
import isYoutubeLink from "../helpers/utils/isYoutubeLink";
import CardLayout from "../layout/CardLayout";
import VideoPreview from "./VideoPreview";

const LinkCard = ({ link, key }) => {
  return (
    <CardLayout key={key} customClasses="border mb-12 md:mb-20 p-4 md:p-8">
      <a
        key={link.sys.id}
        href={link.fields.lien}
        target="_blank"
        rel="noreferrer"
      >
        <h2 className="text-2xl md:text-3xl text-blue-600 mb-4 font-bold">
          {link.fields.titre}
        </h2>
        <div className="mb-6 flex flex-col lg:flex-row">
          <div className="flex items-center mb-6 lg:mb-0 lg:w-1/2">
            {link.fields.lien &&
            isYoutubeLink(link.fields.lien) &&
            !link.fields.image?.fields.file.url ? (
              <VideoPreview url={link.fields.lien} />
            ) : (
              link.fields.image?.fields.file.url && (
                <img
                  className="w-full object-contain"
                  src={`https:${link.fields.image?.fields.file.url}`}
                  alt={link.fields.title}
                />
              )
            )}
          </div>
          <p className="md:text-left lg:w-1/2 md:ml-4">
            {link.fields.description}
          </p>
        </div>
      </a>
      {link.fields.lien2 && (
        <div className="border-t pt-4">
          <p className="mb-2">Autres liens :</p>
          <a
            href={link.fields.lien2}
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 block"
            onClick={(e) => e.stopPropagation()}
          >
            {link.fields.lien2}
          </a>
          {link.fields.lien3 && (
            <a
              href={link.fields.lien3}
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 block"
              onClick={(e) => e.stopPropagation()}
            >
              {link.fields.lien3}
            </a>
          )}
        </div>
      )}
    </CardLayout>
  );
};

export default LinkCard;
