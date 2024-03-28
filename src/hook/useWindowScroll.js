import useEffect from "react";
const useWindowScroll = (handler) => {
  useEffect(() => {
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [handler]);
};

export default useWindowScroll;
