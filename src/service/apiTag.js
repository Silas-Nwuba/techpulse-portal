import supabase from "./supabase";
export const createTag = async (newTag) => {
  const { data, error } = await supabase.from("tag").insert([newTag]).select();
  if (error) {
    throw new Error(error.message);
  }
  return data;
};
export const getTag = async () => {
  const { data, error } = await supabase.from("tag").select("*");
  console.log(data);
  if (error) throw new Error(error.message);
  return data;
};
