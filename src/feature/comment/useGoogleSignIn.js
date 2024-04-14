import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGoogleSignIn = () => {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user) {
          const res = await fetch(
            `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
            {
              headers: {
                Authorization: `Bearer ${user.access_token}`,
                Accept: "application/json",
              },
            }
          );
          const data = await res.json();
          setProfile(data);
        }
      } catch (err) {
        toast.error("No network connection", {
          id: "networkErr",
        });
      }
    };
    fetchData();
  }, [user]);
  return { setUser, profile };
};

export default useGoogleSignIn;
