import React from "react";

const VideoPreview = ({ url }) => {
  if (url.includes("youtube.com")) {
    return (
      <div className="w-full">
        <iframe
          className="w-full mx-auto min-h-[250px] sm:w-[560px] sm:h-[315px]"
          src={url.replace("watch?v=", "embed/")}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
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
      {url}
    </a>
  );
};

export default VideoPreview;
