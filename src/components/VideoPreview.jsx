import React from "react";

const VideoPreview = ({ url }) => {
  // "https://www.youtube.com/embed/kxMBrqDvFhE"
  if (url.includes("youtube.com")) {
    return (
      <div className="w-[560px] h-[315px]">
        <iframe
          width="560"
          height="315"
          src={url.replace("watch?v=", "embed/")}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    );
  }
  return <a href={url}>url</a>;
};

export default VideoPreview;
