import React, { useEffect, useState } from "react";
import AsideAdvert from "../Component/AsideAdvert";

const SquareAd = ({ height, marginTop }) => {
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
  if (!isLoading) return <AsideAdvert height={height} marginTop={marginTop} />;
  return (
    <div className="text-center mt-10 mx-auto space-y-10">
      <ins
        class="adsbygoogle"
        style={{
          display: `${isLoading ? "block" : "none"}`,
          width: "300px",
          height: "300px",
        }}
        data-ad-client="ca-pub-2814454738676259"
        data-ad-slot="6251301049"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default SquareAd;
