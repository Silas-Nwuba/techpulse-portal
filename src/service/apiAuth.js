import supabase, {supabaseUrl} from "./supabase";
export const signup = async (email, password, fullname, role, avatar) => {
  const fileName = `avatar-${Math.random()}-${avatar.name}`;
  const avaterPath = `${supabaseUrl}/storage/v1/object/public/avatar/${fileName}`;
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullname,
        role,
        avater: avaterPath,
      },
    },
  });
  if (error) {
    throw new Error(error.message);
  }
  const { error: storageError } = await supabase.storage
    .from("avatar")
    .upload(fileName, avatar, {
      contentType: avatar.type,
    });

  if (storageError) throw new Error(storageError.message);
  return data;
};
export const login = async (email, password) => {
  let { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) {
    throw new Error(error.message);
  }
  return data;
};
export const getCurrentUser = async () => {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    throw new Error(error.message);
  }
  return data?.user;
};
export const updateCurrentUserData = async ({ fullname, avatar }) => {
  const fileName = `avatar-${avatar.name}-${Math.random()}`;
  const { data: data1, error: error1 } = await supabase.auth.updateUser({
    data: {
      fullname: fullname,
    },
  });
  if (error1) throw new Error(error1.message);

  if (!avatar) return data1;

  const { error: storageError } = await supabase.storage
    .from("avatar")
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  const { data: data2, error: error2 } = await supabase.auth.updateUser({
    data: {
      avater: `${supabaseUrl}/storage/v1/object/public/avatar/${fileName}`,
    },
  });
  if (error2) throw new Error(error2.message);
  return data2;
};
export const updateCurrentUserPassword = async ({ password }) => {
  const { data, error } = await supabase.auth.updateUser({
    password: password,
  });
  if (error) throw new Error(error.message);
  return data;
};
export const logout = async () => {
  let { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
};

export const resetPassword = async ({ email }) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email);
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const updatePassword = async ({ password }) => {
  const { data, error } = await supabase.auth.updateUser({
    password: password,
  });
  if (error) throw new Error(error.message);
  return data;
};
