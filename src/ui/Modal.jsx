import React, {
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { OverLay } from "./OverLay";
import { createPortal } from "react-dom";
import useOutsideClick from "../hook/useOutsideClick";
import { useUserDropdown } from "../context/UserDropdownContextApi";
const modalContext = createContext();
const Modal = ({ children }) => {
  const [isOpenName, setIsOpenName] = useState("");
  const close = () => setIsOpenName("");
  const open = setIsOpenName;

  return (
    <modalContext.Provider value={{ open, close, isOpenName }}>
      {children}
    </modalContext.Provider>
  );
};
const Open = ({ children, opens: openWindowName }) => {
  const { dispatch } = useUserDropdown();
  const { open } = useContext(modalContext);
  return cloneElement(children, {
    onClick: () => {
      open(openWindowName);
      dispatch({ type: "closeUserDropdown", payload: false });
    },
  });
};

const Window = ({ children, name }) => {
  const { isOpenName, close } = useContext(modalContext);
  const { ref } = useOutsideClick(close);
  if (isOpenName !== name) return null;
  return createPortal(
    <OverLay>
      <div
        ref={ref}
        className="bg-white w-[80%] sm:w-auto dark:bg-[#1A202C] rounded-md py-4 px-6 fixed top-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md z-50 transistion duration-300 ease-in-out"
      >
        <div>{cloneElement(children, { closeModal: close })}</div>
      </div>
    </OverLay>,
    document.body
  );
};

Modal.Open = Open;
Modal.Window = Window;
export default Modal;
