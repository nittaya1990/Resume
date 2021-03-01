import React from "react";
import ReactPlayer from "react-player";
import { links } from "./VideoLinks";

const Page = () => {
  const video = links.map((link) => {
    return (
      <ReactPlayer
        key={link.id}
        muted
        playing
        loop
        height="100%"
        width="100%"
        url={link.url}
      />
    );
  });

  return (
    <React.Fragment>
      <div class="container-fluid">
        <div class="row">{video}</div>
      </div>
    </React.Fragment>
  );
};
export default Page;
