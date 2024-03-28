import React from "react";

const ImageGallery = () => {
  return (
    <div className="flex  gap-4  m-auto mb-10">
      <div>
        <img
          src="\image\images (8).jpg"
          alt="imageGallery"
          className="w-[500px] h-[400px] z-50 rounded-xl"
        />
      </div>
      <div>
        <img
          src="/image\images (7).jpg"
          alt="imageGallery"
          className="w-[500px] h-[400px] rounded-xl  z-50"
        />
      </div>
      <div>
        <img
          src="image\images (6).jpg"
          alt="imageGallery"
          className=" w-[500px] h-[400px] rounded-xl z-50"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
