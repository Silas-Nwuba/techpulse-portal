import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useViewPostById } from "./useViewPostById";
import { formatDate } from "../../utils/helper";
import { Interweave } from "interweave";
import FullPageLoaderSpinner from "../../ui/FullPageLoaderSpinner";
import { OverLay } from "../../ui/OverLay";
import ConfirmDeleteModal from "../../ui/ConfirmDeleteModal";

const ViewPost = () => {
  const { id } = useParams();
  const { data, isLoading } = useViewPostById(id);
  const [show, setShow] = useState(false);

  function extractWords(inputString, wordLimit = 300) {
    const words = inputString.split(/\s+/);
    const truncatedString = words.slice(0, wordLimit).join(" ");
    return words.length > wordLimit ? truncatedString + "..." : truncatedString;
  }

  const handleDeletModal = () => {
    setShow(true);
  };

  useEffect(() => {
    document.title = "TekMatas | View Post";
    return () => {
      document.title = "TekMatas | View Post";
    };
  }, []);

  if (isLoading) return <FullPageLoaderSpinner />;

  return (
    <div className="mt-20">
      <h1 className="dark:text-[#d0d6e1] mb-5 text-[23px] font-semibold">
        Post Details
      </h1>
      <div className="bg-white dark:bg-[#0c1427] dark:border dark:border-[#172340] py-5 px-6  w-[81%] rounded-[10px]">
        <h2 className="text-[#000000] text-[24px] leading-[34px] my-3 font-medium dark:text-[#d0d6e1]">
          {data?.title}
        </h2>
        <span className="flex items-center gap-5  mt-2 font-normal text-[#000000] dark:text-[#d0d6e1]">
          <h3 className="text-[15px]">
            {" "}
            <span className="font-normal">Date : </span>
            {formatDate(data?.createdDate)}
          </h3>
          <h3 className="text-[15px]">
            <span className="font-normal">Posted by : </span>
            {data?.author === "Admin" ? "Ebuka Nwuba" : data?.author}
          </h3>
          <h3 className="text-[15px]">
            <span className="font-normal capitalize">Category :</span>{" "}
            {data?.category}
          </h3>
          <h3 className="text-[15px]">
            <span className="font-normal">Feature :</span> {data?.feature}
          </h3>
        </span>
        <img
          src={data?.image}
          alt="postimage"
          className="w-full mt-10 rounded-md object-contain"
        />
        <div>
          <div className="my-5">
            <h4 className="dark:text-[#d0d6e1] font-medium text-lg">Summary</h4>
            <p className="text-[#000000] font-normal text-[16px] dark:text-[#d0d6e1] mt-3">
              <Interweave content={data?.summary ? data?.summary : ""} />
            </p>
          </div>

          <div className="mt-10 leading-[30px] text-[#000000] text-[16px] dark:text-[#d0d6e1]">
            <h4 className="dark:text-[#d0d6e1] font-medium text-lg">Content</h4>
            <p className="dark:text-[#d0d6e1] mt-2 mb-1 font-normal text-[16px]">
              <Interweave content={extractWords(data?.content)} />
            </p>
          </div>

          <div className="flex items-center gap-5 mt-10 mb-5">
            <button
              type="button"
              className="bg-slate-100 dark:bg-[#1d72b8]  dark:text-white text-black transition duration-500 ease-in-out w-[100px] h-[30px] py-5  font-medium text-[16px] rounded-[5px] flex items-center justify-center pr-2"
            >
              Edit
            </button>
            <button
              onClick={handleDeletModal}
              type="button"
              className="dark:bg-[#d95347] bg-red-500 text-white transition duration-500 ease-in-out w-[100px] h-[30px] py-5 font-medium text-[16px] rounded-[5px] flex items-center justify-center pr-2"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      {show && (
        <OverLay>
          <ConfirmDeleteModal setShow={setShow} postId={id} />
        </OverLay>
      )}
    </div>
  );
};
export default ViewPost;
