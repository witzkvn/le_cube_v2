import React from "react";
import isYoutubeLink from "../helpers/utils/isYoutubeLink";

const VideoPreview = ({ url }) => {
  if (isYoutubeLink(url)) {
    return (
      <div className="w-full">
        <iframe
          className="w-full mx-auto min-h-[300px]"
          src={url.replace("watch?v=", "embed/")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="underline underline-offset-8"
    >
      Voir la ressource
    </a>
  );
};

export default VideoPreview;
