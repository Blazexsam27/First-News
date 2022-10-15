import React from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={"context value"}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
