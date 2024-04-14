import React, { useEffect } from "react";
import Aside from "../../ui/Aside";
import Content from "../../ui/Content";

const News = () => {
  useEffect(() => {
    document.title = "News - TechPulse";
    window.scrollTo(0, 0);
    const handleScroll = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener("popstate", handleScroll);
    return () => {
      window.removeEventListener("popstate", handleScroll);
      document.title = "TechPulse";
    };
  }, []);

  return (
    <>
      <div className="mb-10 grid grid-cols-1 xl:flex xl:justify-between xl:gap-10">
        <Content />
        <Aside />
      </div>
    </>
  );
};

export default News;
