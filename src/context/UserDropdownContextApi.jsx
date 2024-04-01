import React, { createContext, useContext, useReducer } from "react";
const initialState = {
  isUserDropdown: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "openUserDropdown":
      return {
        ...state,
        isUserDropdown: action.payload,
      };
    case "closeUserDropdown":
      return {
        ...state,
        isUserDropdown: action.payload,
      };
    default:
      throw new Error("unknown data passed");
  }
};
const UserContext = createContext();
const UserDropdownProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isUserDropdown } = state;

  return (
    <UserContext.Provider
      value={{
        isUserDropdown,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
const useUserDropdown = () => {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error("Error accessing context outside the provider");
  return context;
};

export { UserDropdownProvider, useUserDropdown };
