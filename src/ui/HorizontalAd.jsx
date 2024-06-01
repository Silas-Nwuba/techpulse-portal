import React, { useEffect, useState } from "react";
import HorizontalAdLoader from "./HorizontalAdLoader";

const HorizontalAd = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  if (isLoading) return <HorizontalAdLoader />;
  return (
    <div className="text-center mx-0 my-20">
      <ins
        class="adsbygoogle"
        style={{ display: "block", width: "728px", height: "90px" }}
        data-ad-client="ca-pub-2814454738676259"
        data-ad-slot="2763095130"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default HorizontalAd;
