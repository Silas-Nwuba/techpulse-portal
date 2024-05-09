import { useEffect, useRef } from "react";
import { useUserDropdown } from "../context/UserDropdownContextApi";

const useOutsideClick = (close, listenCapture = true) => {
  const { dispatch, isUserDropdown } = useUserDropdown();
  const ref = useRef();
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        close();
      }
<<<<<<< HEAD
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
=======
      console.log(dropdownRef.current);
      if (!dropdownRef.current.contains(e.target)) {
>>>>>>> 2240043135df3e38123bbfa092520827935184bb
        dispatch({ type: "closeUserDropdown", payload: false });
      }
    };
    document.addEventListener("mousedown", handleOutsideClick, listenCapture);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [dispatch, close, listenCapture, isUserDropdown]);

  return { ref, dropdownRef };
};
export default useOutsideClick;
