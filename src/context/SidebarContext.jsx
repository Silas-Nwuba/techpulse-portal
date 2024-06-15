import React, { useContext, useReducer } from "react";
import { createContext } from "react";

const initialState = {
  sidebar: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "openSidebarMenu":
      return {
        ...state,
        sidebar: action.payload,
      };
    case "closeSidebarMenu":
      return {
        ...state,
        sidebar: action.payload,
      };

    default:
      throw new Error("unknown data passed");
  }
};
const SidebarContext = createContext();
const SidebarContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { sidebar } = state;
  return (
    <SidebarContext.Provider value={{ sidebar, dispatch }}>
      {children}
    </SidebarContext.Provider>
  );
};

const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (context === "undefined")
    throw new Error("Error accessing context outside the provider");
  return context;
};
export { SidebarContextProvider, useSidebarContext };
