import React from "react";
import { Link } from "react-router-dom";
import isYoutubeLink from "../helpers/utils/isYoutubeLink";
import CardLayout from "../layout/CardLayout";
import VideoPreview from "./VideoPreview";

const LinkCard = ({ link, key }) => {
  return (
    <CardLayout key={key} customClasses="border mb-12 md:mb-20 ">
      <a
        key={link.sys.id}
        href={link.fields.lien}
        target="_blank"
        rel="noreferrer"
        className="flex-1 p-4 md:p-8"
      >
        <h2 className="text-2xl md:text-3xl text-blue-600 mb-4 font-bold">
          {link.fields.titre}
        </h2>
        <div className="mb-6 flex flex-col">
          <div className="flex items-center mb-6">
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
          <p className="md:text-left">{link.fields.description}</p>
        </div>
      </a>
      {link.fields.lien2 && (
        <div className="border-t p-4 md:p-8 break-all text-sm text-left">
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
              className="text-gray-500 block mt-2"
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
