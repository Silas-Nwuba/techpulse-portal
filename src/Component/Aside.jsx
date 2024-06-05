import React from "react";
import LatestPost from "./LatestPost";
import OlderPost from "./OlderPost";
import SquareAd from "../ui/SquareAd";

const Aside = () => {
  return (
    <aside>
      <LatestPost />
      <SquareAd height={"h-[80px]"} marginTop={"mt-[2px]"} />
      <OlderPost />
      <SquareAd height={"h-[500px]"} marginTop={"mt-[60px]"} />
    </aside>
  );
};

export default Aside;
