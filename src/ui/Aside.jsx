import React from "react";
import PopularPost from "./PopularPost";
import OlderPost from "./OlderPost";
import SocialContact from "./SocialContact";
import AdvertImage from "./AdvertImage";

const Aside = () => {
  return (
    <aside className="mt-5 xl:mt-0 w-[100%] xl:w-[40%] ">
      <AdvertImage>
        <img
          src="\image\advert-image.jpg"
          alt="advert"
          className="w-[70%] xl:w-full my-10 xl:my-5 mx-auto"
        />
      </AdvertImage>
      <PopularPost />
      <AdvertImage>
        <img
          src="\image\banner_03.jpg"
          alt="advert"
          className="xl:w-full w-[70%] my-10 mx-auto xl:my-0 xl:mx-0"
        />
      </AdvertImage>
      <OlderPost />
      <SocialContact />
    </aside>
  );
};

export default Aside;
