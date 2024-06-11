import React from "react";
import Button from "./Button";

const Cookies = () => {
  return (
    <div className="w-full  bg-slate-100 shadow-xl  fixed bottom-0  z-[50000] py-5 space-y-2 ">
      <div className="px-5">
        <p className="text-sm mb-5">
          This website uses cookies to ensure you get the best experience on our
          website and to show content that is more relevant to your intrest. By
          clicking "Accept Cookies" or continuing to browse the site, you agree
          to our use of cookies by TechPulse ads describe.
        </p>
      </div>
      <div className="mb-3 border-t py-2 mt-5  w-full">
        <span className="flex justify-end items-center gap-5 mr-5 md:mr-10">
          <Button
            name={"Cancel"}
            backgroundColor="bg-slate-50"
            width={"w-[100px]"}
            color="text-stone-500"
            marginBottom="mb-2"
            marginTop="mt-2"
            hover="hover-[bg-slate-50]"
          />
          <Button
            name={"Accept"}
            backgroundColor="bg-[#1e88e5]"
            width={"w-[100px]"}
            color="text-white"
            marginBottom="mb-2"
            marginTop="mt-2"
          />
        </span>
      </div>
    </div>
  );
};

export default Cookies;
