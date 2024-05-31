import React, { useEffect } from "react";
import {
  FaClock,
  FaComment,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Interweave } from "interweave";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { htmlToText } from "html-to-text";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import { useGetallPost } from "../../feature/post/useGetallPost";
import { formatPostDate } from "../../utils/helper";
const contentObj = {
  content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit Cumque rem tenetur quaerat ad iusto! Sapiente quia corrupti enim illum obcaecati eveniet quod aut deserunt voluptatum impedit nostrum beatae, doloribus odio Lorem, ipsum dolor sit amet consectetur adipisicing elit Cumque rem tenetur quaerat ad iusto! Sapiente quia corrupti enim illum obcaecati eveniet quod aut deserunt voluptatum impedit nostrum beatae, doloribus odio.

  Lorem, ipsum dolor sit amet consectetur adipisicing elit Cumque rem tenetur quaerat ad iusto! Sapiente quia corrupti enim illum obcaecati eveniet quod aut deserunt voluptatum impedit nostrum beatae, doloribus odio Lorem, ipsum dolor sit amet consectetur adipisicing elit Cumque rem tenetur quaerat ad iusto! Sapiente quia corrupti enim illum obcaecati eveniet quod aut deserunt voluptatum impedit nostrum beatae, doloribus odio.
  
  `,
};
const ArticlePage = () => {
  const { data } = useGetallPost();
  const { register, formState, handleSubmit, getValues } = useForm();
  const { errors } = formState;
  const { postId } = useParams();
  const item = data?.find((item) => item.id === Number(postId));

  const onSuccess = (data) => {
    toast.success("Comment successfully sent!");
  };

  const paragraphs = item?.content
    .split(/(<\/p>)/)
    .filter((p) => p.trim().length > 0);

  // const formatContentAsParagraphs = (text) => {
  //   // Remove any <br> tags
  //   const cleanedText = text?.replace(/<\/?[^>]+(>|$)/g, "");

  //   // Split the text by double newlines or single newlines
  //   const paragraphs = cleanedText
  //     ?.split(/\n{2,}|\r{2,}/)
  //     .map((para) => para.trim())
  //     .filter((para) => para);

  //   console.log(paragraphs);
  //   // Wrap each paragraph with <p> tags
  //   const formattedContent = paragraphs
  //     ?.map(
  //       (para, index) =>
  //         `<p className="${index === 0 ? "mt-0" : "mt-20"}">${para}</p>`
  //     )
  //     .join("");
  //   return formattedContent;
  // };

  useEffect(() => {
    // window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = `${item?.title}`;
    return () => {
      document.title = "TechPulse: Tech to the world";
    };
  }, [item]);
  return (
    <div className="mt-5 flex  w-[95%] gap-10 flex-col lg:flex-row mx-auto">
      <div className="flex-1">
        <header className="space-y-4">
          <h1 className="text-xl md:text-2xl uppercase text-stone-600 font-bold leading-8">
            {item?.title}
          </h1>
          <p className="text-stone-500 capitalize text-sm leading-7">
            {htmlToText(item?.summary)}
          </p>
          <div className="md:flex justify-between gap-20 items-center">
            <div className="flex-col space-y-2">
              <p className="text-sm">
                By <span className="font-semibold">{item?.author} </span>
              </p>
              <span className="flex gap-5">
                <div className="flex gap-1 items-center text-[11px] text-[(rgb(84, 86, 88))]">
                  <FaClock className="text-stone-400" />
                  <span>{formatPostDate(item?.createdDate)}</span>
                </div>
                <div className="flex items-center text-[11px] text-[(rgb(84, 86, 88))] gap-1">
                  <FaComment className="text-stone-400" />
                  <span>10</span>
                </div>
              </span>
            </div>

            <div className="flex items-center gap-5 mt-5 ml-40">
              <Link className="bg-slate-50 p-2 rounded-full ">
                <FaFacebook className="text-sky-600 text-lg" />
              </Link>
              <Link className="bg-slate-50 p-2 rounded-full">
                <FaTwitter className="text-sky-400 text-lg" />
              </Link>
              <Link className="bg-slate-50 p-2 rounded-full">
                <FaWhatsapp className="text-green-600 text-lg" />
              </Link>
            </div>
          </div>
        </header>
        <section className="mt-5 space-y-5">
          <span>
            <img
              src={item?.image}
              alt="articleImage"
              className="object-cover w-full xl:h-[400px]"
            />
          </span>
          <div>
            <div>
              <Interweave
                content={item?.content}
                className="text-sm text-stone-500 whitespace-pre-wrap tracking-wide py-5 leading-8 capitalize  w-[100%]"
              />
              <div className="mt-10 flex justify-center mb-10">
                <img src="/image/advert1.jpg" alt="googleAd" />
              </div>
            </div>
          </div>
          {/* <div>
            <h2 className="font-semibold text-xl py-4 mt-10">3 Comments</h2>
            <div className="space-y-5 mt-5 bg-slate-50 w-full p-5">
              <div className="flex gap-5 items-center ">
                <img
                  src="/image/avatar.webp"
                  alt="user"
                  className="object-cover flex-shrink-0 w-[40px] h-[40px] rounded-full"
                />
                <span className="space-y-2">
                  <span className="flex gap-4 items-center">
                    <h3 className="text-sky-500 font-medium">Mark stan</h3>
                    <p className="text-sm text-stone-400">20 mins ago</p>
                  </span>
                  <p className="text-stone-500 text-sm">ok</p>
                </span>
              </div>
              <div className="flex gap-5 items-center ">
                <img
                  src="/image/avatar.webp"
                  alt="user"
                  className="object-cover flex-shrink-0 w-[40px] h-[40px] rounded-full"
                />
                <span className="space-y-2">
                  <span className="flex gap-4 items-center">
                    <h3 className="text-sky-500 font-medium">Martins obi</h3>
                    <p className="text-sm text-stone-400">10 mins ago</p>
                  </span>
                  <p className="text-stone-500 text-sm">great work</p>
                </span>
              </div>
              <div className="flex gap-5 items-center ">
                <img
                  src="/image/avatar.webp"
                  alt="user"
                  className="object-cover flex-shrink-0 w-[40px] h-[40px] rounded-full"
                />
                <span className="space-y-2">
                  <span className="flex gap-4 items-center">
                    <h3 className="text-sky-500 font-medium">John mark</h3>
                    <p className="text-sm text-stone-400">5 mins ago</p>
                  </span>
                  <p className="text-stone-500 text-sm">Good one</p>
                </span>
              </div>
            </div>
          </div> */}
          <div className="mt-10">
            <h3 className="font-semibold text-xl mt-5 py-4">Leave a Comment</h3>
            <p className="mb-5 bg-red-300 p-4 w-full text-white text-sm rounded-md">
              Your email address will not be published. Your comment will be
              reviewed by the administrator before published.
            </p>
            <form onSubmit={handleSubmit(onSuccess)}>
              <FormRow label={"Name"} error={errors?.name?.message}>
                <input
                  type="text"
                  name="username"
                  {...register("name", {
                    required: "Name field is required",
                    minLength: {
                      value: 3,
                      message: "Name should be atleast 3 character or more",
                    },
                    validate: () => {
                      const nameRegx = /^[a-zA-Z\s]*$/;
                      const nameValidate =
                        nameRegx.test(getValues().name) ||
                        "Name field should not contain special character or a number";
                      return nameValidate;
                    },
                  })}
                  className="disabled:opacity-50  disabled:bg-gray-100 disabled:cursor-wait disabled:border focus:border-2 disabled:border-gray-200 focus:outline-none border h-[45px] text-sm border-gray-300 rounded-md p-3 mt-1 w-full focus:border-sky-400"
                />
              </FormRow>
              <FormRow label={"Email address"} error={errors?.email?.message}>
                <input
                  type="email"
                  name="email"
                  {...register("email", {
                    required: "Email address field is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,4}$/,
                      message: "Email Adress is incorrect check and try again",
                    },
                  })}
                  className="disabled:opacity-50  disabled:bg-gray-100 disabled:cursor-wait disabled:border focus:border-2 disabled:border-gray-200 focus:outline-none border h-[45px] text-sm border-gray-300 rounded-md p-3 mt-1 w-full focus:border-sky-400"
                />
              </FormRow>
              <FormRow label="Message" error={errors?.message?.message}>
                <textarea
                  height="150px"
                  type="text"
                  name="message"
                  {...register("message", {
                    required: "Message field is required",
                    minLength: {
                      value: 3,
                      message: "Message should be atleast 3 character or more",
                    },
                  })}
                  className={`disabled:opacity-50 disabled:bg-gray-100 disabled:cursor-wait disabled:border focus:border-2 disabled:border-gray-200  focus:outline-none border h-[150px] text-sm border-stone-300 rounded-md p-3 mt-1 w-full focus:border-sky-400`}
                />
              </FormRow>
              <Button
                name={"Post comment"}
                backgroundColor="bg-sky-500"
                borderColor={"border-sky-500"}
                width={"w-[150px]"}
                padding="py-3 px-3"
                marginBottom="mb-0"
                color="text-white"
                hover="hover:bg-sky-600"
              />
            </form>
          </div>
        </section>
      </div>
      <section>
        <span className="space-y-5 flex flex-col xl:mt-0 w-3/4 xl:w-full mx-auto">
          <img src="/image/advert3.png" alt="googleAd" />
          <img src="/image/advert4.png" alt="googleAd" />
          <img src="/image/advert3.png" alt="googleAd" />
          <img src="/image/advert-image.jpg" alt="googleAd" />
          <img src="/image/advert4.png" alt="googleAd" />
          <img src="/image/advert3.png" alt="googleAd" />
        </span>
      </section>
    </div>
  );
};

export default ArticlePage;
