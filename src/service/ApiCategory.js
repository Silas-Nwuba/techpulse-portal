import supabase from "./supabase";

export const getCategory = async () => {
  const { data, error } = await supabase.from("category").select("*");
  if (error) {
    throw new Error(error.message);
  }
  const categoryiesWithPost = await Promise.all(
    data.map(async (data) => {
      let query = supabase.from("post").select("*");
      query.eq("category", data.category);
      const { data: postData, error: postError } = await query;

      if (postError) {
        return { ...data, post: [] };
      }
      return { ...data, post: postData };
    })
  );
  return categoryiesWithPost;
};

export const createCategory = async ({ data: newCategory }) => {
  const { data, error } = await supabase
    .from("category")
    .insert([newCategory])
    .select();
  if (error) {
    throw new Error(error.message);
  }
  return data;
};
export const editCategory = async (updatedData) => {
  const { data, error } = await supabase
    .from("category")
    .update(updatedData)
    .eq("id", updatedData.id)
    .select();

  if (error) {
    throw new Error(error);
  }
  return data;
};

export const deleteCategory = async (id) => {
  console.log(id);
  const { data, error } = await supabase.from("category").delete().eq("id", id);
  if (error) {
    throw new Error(
      "Delete operation failed due to existing references from other records."
    );
  }
  return data;
};
