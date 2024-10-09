import supabase from "./supabase";

export const getCookie = async () => {
  const { data, error } = await supabase.from("cookie").select();
  if (error) {
    throw new Error(error.message);
  }
  return data;
};
export const getCookieByDate = async () => {
  const { data: cookies, error } = await supabase.from("cookie").select();
  console.log(cookies);
  if (error) {
    console.error(error);
    // } else {
    //   // Perform grouping in JavaScript
    //   const groupedByDate = cookies.reduce((acc, cookie) => {
    //     const date = new Date(cookie.created_date).toISOString().split("T")[0];
    //     if (!acc[date]) {
    //       acc[date] = [];
    //     }
    //     acc[date].push(cookie);
    //     return acc;
    // }, {});
  }
  return cookies;
};
