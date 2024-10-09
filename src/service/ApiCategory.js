import toast from "react-hot-toast";
import supabase from "./supabase";

export const createCategory = async ({ data: newCategory }) => {
  const { data, error } = await supabase
    .from("category")
    .select()
    .eq("category", newCategory.category)
    .single();
  if (error) {
    toast.error(error);
    return;
  }
  if (!data) {
    const { error: insertError } = await supabase
      .from("category")
      .insert([newCategory])
      .select();
    if (insertError) throw new Error(insertError.message);
  }
};
