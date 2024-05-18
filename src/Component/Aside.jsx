import React from "react";
import LatestPost from "./LatestPost";
import AsideAdvert from "./AsideAdvert";
import OlderPost from "./OlderPost";

const Aside = () => {
  return (
    <aside>
      <LatestPost />
      <div className="bg-gray-100 w-ful h-full py-5 mt-10">
        <AsideAdvert>
          <img
            src="\image\google-ad3.PNG"
            alt="advert"
            className="m-auto cursor-pointer"
          />
        </AsideAdvert>
        <AsideAdvert>
          <img
            src="\image\google-ad3.PNG"
            alt="advert"
            className="m-auto cursor-pointer"
          />
        </AsideAdvert>
      </div>
      <OlderPost />
      <AsideAdvert>
        <img
          src="\image\google-ad3.PNG"
          alt="advert"
          className="m-auto cursor-pointer"
        />
        {/* <p className="text-xs test-stone-600 pt-2">Advertisment</p> */}
      </AsideAdvert>
    </aside>
  );
};

export default Aside;
