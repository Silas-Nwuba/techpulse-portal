import { Page_Size } from "../utils/constant";
import supabase from "./supabase";

export const getComment = async () => {
  let { data, error } = await supabase.from("comment").select("*,post(id)");
  if (error) {
    throw new Error("Comment fail to approve");
  }
  return data;
};
export const getCommentByPagination = async ({ filter, page }) => {
  let query = supabase
    .from("comment")
    .select("*, post(title, category)", { count: "exact" });
  //FILTER
  if (filter) query = query.eq(filter.field, filter.value);
  //Pagination
  if (page) {
    const from = (page - 1) * Page_Size;
    const to = from + Page_Size - 1;
    query = query.range(from, to);
  }
  //QUERY
  let { data, error, count } = await query;
  if (error) {
    throw new Error(error.message);
  }
  return { data, count };
};
export const getCommentId = async (commentId) => {
  const { data, error } = await supabase
    .from("comment")
    .select("*, post(*)")
    .eq("id", commentId)
    .single();
  if (error) {
    throw new Error("Comment cannot be found");
  }
  return data;
};

export const editComment = async (id, obj) => {
  const { data, error } = await supabase
    .from("comment")
    .update(obj)
    .eq("id", id)
    .select()
    .single();
  if (error) {
    throw new Error("Comment fail to approve");
  }
  return { data, error };
};
export const deleteComment = async (commentId) => {
  const { data, error } = await supabase
    .from("comment")
    .delete()
    .eq("id", commentId)
    .select()
    .single();

  if (error) {
    throw new Error("comment fail to delete");
  }
  return data;
};
