import React, {
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { OverLay } from "./OverLay";
import { createPortal } from "react-dom";
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
  const { open } = useContext(modalContext);
  return cloneElement(children, {
    onClick: () => {
      open(openWindowName);
    },
  });
};
const Window = ({ children, name, setOpenDropdownIndex }) => {
  const { isOpenName, close } = useContext(modalContext);
  if (isOpenName === name) {
    setOpenDropdownIndex(null);
  }
  // const { ref } = useOutsideClick(close);
  if (isOpenName !== name) return null;
  return createPortal(
    <OverLay>
      <div
        // ref={ref}
        className="bg-white w-[35%] h-[220px] dark:border-[#172340] border dark:bg-[#2D3748] rounded-[10px] px-6 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-xl z-50 transistion duration-300 ease-in-out"
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
