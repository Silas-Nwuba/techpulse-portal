import React from "react";
import Button from "./Button";

const NotFoundError = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 mt-20">
      <img
        src="/image/notFound-removebg-preview.png"
        alt="Error"
        className="w-[200px] "
      />
      <h3 className="font-semibold dark:text-[#e0e0e0]">Connect to internet</h3>
      <p className="text-sm dark:text-[#e0e0e0]">
        {" "}
        your are offline. check network connectivity
      </p>

      <Button
        name={"Reload"}
        width={"w-[120px]"}
        padding="p-3"
        marginTop="mt-5"
        backgroundColor="bg-sky-600"
        color="text-white"
        onClick={() => window.location.reload()}
      />
    </div>
  );
};

export default NotFoundError;
