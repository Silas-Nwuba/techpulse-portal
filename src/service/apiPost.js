import { Post_Per_page } from "../utils/constant";
import supabase, { supabaseUrl } from "./supabase";
export const getPost = async ({ pageParam = 1 }) => {
  const { data, error, count } = await supabase
    .from("post")
    .select("*", { count: "exact" })
    .order("createdDate", { ascending: false })
    .range((pageParam - 1) * Post_Per_page, pageParam * Post_Per_page - 1);
  if (error) {
    throw new Error("Please check internet connection");
  }
  return { data, count };
};
export const getAllPost = async () => {
  const { data, error } = await supabase
    .from("post")
    .select("*")
    .order("createdDate", { ascending: false });
  if (error) {
    throw new Error("Please check internet connection");
  }
  return data;
};
export const createPost = async (newPostData) => {
  const imageName = `${Math.random()}-${newPostData.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/image/${imageName}`;
  const { data, error } = await supabase
    .from("post")
    .insert([
      {
        ...newPostData,
        image: imagePath,
        category: newPostData.category.value,
      },
    ])
    .select();
  if (error) {
    throw new Error("Post could not be publish");
  }
  const { error: storageError } = await supabase.storage
    .from("image")
    .upload(imageName, newPostData.image, {
      contentType: newPostData.image.type,
    });
  if (storageError) {
    await supabase.from("post").delete().eq("id", data.id);
    throw new Error(
      "Post image could not be uploaded and the post was not published"
    );
  }
  return data;
};

export const getEditPostById = async (id) => {
  const { data, error } = await supabase
    .from("post")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    throw new Error("Post data was not found");
  }
  return data;
};
export const editPost = async (newPostData, id) => {
  const hasImagePath = newPostData.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newPostData.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newPostData.image
    : `${supabaseUrl}/storage/v1/object/public/image/${imageName}`;
  const { data, error } = await supabase
    .from("post")
    .update({ ...newPostData, image: imagePath })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw new Error("Post can not be edited error occur");
  }
  if (hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("image")
    .upload(imageName, newPostData.image, {
      contentType: newPostData.image.type,
    });

  if (storageError) {
    await supabase.from("post").delete().eq("id", data.id);
    throw new Error(
      "Post image could not be uploaded and the post was not published"
    );
  }
  return data;
};

export const deletePost = async (id) => {
  const { data, error } = await supabase.from("post").delete().eq("id", id);
  if (error) {
    throw new Error(
      "Delete operation failed due to existing references from other records."
    );
  }
  return data;
};
