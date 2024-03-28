import { useEffect, useRef } from "react";
import { useUserDropdown } from "../context/UserDropdownContextApi";

const useOutsideClick = (close, listenCapture = true) => {
  const { dispatch, isUserDropdown } = useUserDropdown();
  const ref = useRef();
  const dropdownRef = useRef();
  const userIcon = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        close();
      }
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        dispatch({ type: "closeUserDropdown", payload: false });
      }
      // dispatch({ type: "closeUserDropdown", payload: false });
    };
    document.addEventListener("click", handleOutsideClick, listenCapture);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [dispatch, close, listenCapture, isUserDropdown]);

  return { ref, dropdownRef, userIcon };
};
export default useOutsideClick;
