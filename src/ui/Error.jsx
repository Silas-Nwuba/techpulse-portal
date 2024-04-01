import React from "react";
import Button from "./Button";
import { useQueryClient } from "@tanstack/react-query";

const Error = () => {
  const queryClient = useQueryClient();
  const handleTryAgain = () => {
    queryClient.invalidateQueries({
      queryKey: ["post"],
    });
  };
  return (
    <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 mt-10 text-center ">
      <img
        src="\image\no-internet.png"
        alt="wifi"
        className="w-[80px] mx-auto"
      />

      <h2 className="dark:text-white">
        No internet connection found check your connection
      </h2>
      <Button
        backgroundColor="bg-gradient-to-r from-cyan-500 to-blue-400"
        color="text-white"
        width="w-[150px]"
        name="Try Again"
        onClick={handleTryAgain}
      />
    </div>
  );
};

export default Error;
