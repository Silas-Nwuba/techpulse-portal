import React from "react";
import LatestPost from "./LatestPost";
import OlderPost from "./OlderPost";
import SquareAd from "../ui/SquareAd";

const Aside = () => {
  return (
    <aside>
      <LatestPost />
      <SquareAd />
      <SquareAd />
      <OlderPost />
      <SquareAd />
    </aside>
  );
};

export default Aside;
