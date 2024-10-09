import { useEffect } from "react";

const useOutsideClick = (iconRef, excludeSelector, callback) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        !event.target.closest(`${excludeSelector}`) &&
        !iconRef.current.contains(event.target)
      ) {
        callback();
      }
    };
    const handleScroll = () => {
      callback();
    };
    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [iconRef, excludeSelector, callback]);
};
export default useOutsideClick;
