import { useEffect, useState } from "react";
export const useLocalStorageGoogleSignIn = (initalState, LOCAL_KEY, data) => {
  const [userData, setUserData] = useState(() => {
    const item = localStorage.getItem(LOCAL_KEY);
    return item ? JSON.parse(item) : initalState;
  });
  localStorage.setItem(LOCAL_KEY, JSON.stringify(userData));

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
  }, [LOCAL_KEY, data]);

  return { userData, setUserData };
};
