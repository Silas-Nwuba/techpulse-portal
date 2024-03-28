import React from "react";
const ViewComment = () => {
  // 2XxI52lgUDp7hAB8
  return (
    <div className="bg-white rounded-md py-5 px-10">
      {/* <div className="mt-8 mb-5">
        <div className="rounded-full w-[80%] h-[20px] mb-5 skeleton"></div>
        <div className="block sm:flex sm:gap-5">
          <div className="w-[50px] h-[50px] rounded-[100%] skeleton"></div>
          <div className="w-full mt-2">
            <div className=" w-[60%] h-[20px] sm:w-[40%] sm:h-[20px]  rounded-full skeleton mb-1"></div>
            <div className="w-[100%] sm:w-[100%] h-[15px] rounded-full skeleton mb-1"></div>
            <div className="w-[100%] sm:w-[100%] h-[15px] rounded-full skeleton mb-1"></div>
            <div className="w-[20%] sm:w-[15%] h-[10px] rounded-full skeleton mb-1"></div>
          </div>
        </div>
      </div> */}

      <h4 className="uppercase mb-1 ">Post A Comment</h4>
      <p className="text-sm italic text-color-stone-300 bg-red-300 w-full text-white font-medium  rounded-md p-2 mt-2 mb-3">
        To be published, comments must be reviewed by the administrator, we
        appreciate your comment.
      </p>
      <p className="mt-2 text-stone-500 font-medium text-[16px]">1 Comments</p>
      <div className=" mt-10 mb-5">
        <div className="block gap-5 sm:flex">
          <img
            src="\image\avatar.webp"
            alt=""
            className="rounded-full w-[50px] h-[50px]"
          />
          <div className="mt-2 sm:mt-0">
            <div className="flex items-center gap-4">
              <h1 className="text-stone-600 font-semibold text-[16px]">
                Anonymous
              </h1>
              <p className="text-sm text-stone-400"> 03 Feb 2022</p>
            </div>
            <p className="mt-2 text-stone-500 text-[16px]">
              The generated Lorem Ipsum is therefore always free from
              repetition, injected humour, or non-characteristic words etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewComment;
