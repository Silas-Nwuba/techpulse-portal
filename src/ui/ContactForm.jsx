import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Button from "./Button";

const ContactForm = () => {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;
  const onsubmit = () => {
    toast.success("Message sent successfully", {
      id: "successId",
    });
    reset();
  };
  const onerror = (error) => {};

  return (
    <div className="bg-white rounded-md py-5 px-6 w-[100%] self-start col-span-2  mt-3">
      <h2 className="text-stone-600 font-semibold mb-5 text-2xl">Contact</h2>
      <form onSubmit={handleSubmit(onsubmit, onerror)}>
        <div className="mb-3">
          <label htmlFor="fullname">Fullname:</label>
          <input
            type="text"
            className="text-sm focus:outline-none border border-stone-300 rounded-md p-2 mt-1 w-full"
            name="name"
            {...register("name", {
              required: "Name field is required",
              validate: () => {
                const nameRegx = /^[a-zA-Z\s]*$/;
                const nameValidate =
                  nameRegx.test(getValues().name) ||
                  "Name field should not contain special character or a number";
                return nameValidate;
              },
              minLength: {
                value: 3,
                message: "Please name should not be less than 3 charater",
              },
              maxLength: {
                value: 50,
                message: "Please name should not be greater than 50 character",
              },
            })}
          />
          <small className="text-red-500 text-sm">
            {getValues().name !== "" ? "" : errors?.name?.message}
          </small>
        </div>
        <div className="mt-3">
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            type="text"
            className="text-sm focus:outline-none border border-stone-300 rounded-md p-2 mt-1 w-full"
            {...register("email", {
              required: "Email field is required",
              pattern: {
                value: /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,4}$/,
                message: "Email is incorrect check and try again",
              },
            })}
          />
          <small className="text-red-500 text-sm">
            {getValues().email !== "" ? "" : errors?.email?.message}
          </small>
        </div>
        <div className="mt-3">
          <label htmlFor="fullname">Message</label>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            className="text-sm h-[150px] focus:outline-none border overflow-hidden  border-stone-300 rounded-md p-2 mt-2 w-full"
            {...register("message", {
              required: "Message field is required",
            })}
          ></textarea>
          <small className="text-red-500 text-sm">
            {errors?.message?.message}
          </small>
        </div>
        <Button name="Submit" />
      </form>
    </div>
  );
};

export default ContactForm;
