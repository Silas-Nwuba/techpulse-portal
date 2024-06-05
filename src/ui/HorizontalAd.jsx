import React, { useEffect, useState } from "react";
import HeaderAdvert from "../Component/HeaderAdvert";

const HorizontalAd = ({ marginTop, backgroundColor, height }) => {
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
  if (!isLoading)
    return (
      <HeaderAdvert
        marginTop={marginTop}
        backgroundColor={backgroundColor}
        height={height}
      />
    );
  return (
    <div className="text-center mx-0">
      <ins
        className="adsbygoogle"
        style={{
          display: `${isLoading ? "block" : "none"}`,
          width: "728px",
          height: "90px",
        }}
        data-ad-client="ca-pub-2814454738676259"
        data-ad-slot="2763095130"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default HorizontalAd;
