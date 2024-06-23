import React from "react";
import Button from "./Button";
const NotFoundError = () => {
  return (
    <div className="text-center">
      <span className="absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2">
        <img
          src="/image/notFound-removebg-preview.png"
          alt="Error"
          className="w-[200px] mx-auto "
        />
        <h3 className="font-semibold dark:text-[#e0e0e0] mt-2">
          Connect to internet
        </h3>
        <p className="text-sm dark:text-[#e0e0e0] p-2 text-center">
          You are offline. check network connectivity
        </p>
        <Button
          name={"Refresh"}
          width={"w-[120px]"}
          padding="p-3"
          marginTop="mt-5"
          backgroundColor="bg-sky-600"
          color="text-white"
          onClick={() => window.location.reload()}
        />
      </span>
    </div>
  );
};
export default NotFoundError;
