import React, { useState, createContext, ReactNode, useContext } from "react";

interface ContextType {
  token: string ;
  setToken?: React.Dispatch<React.SetStateAction<string >>;
}

const Context = createContext<ContextType | null>(null);

const UseUserContext = () => {
  const context = useContext(Context);
  if (context) return context;
  return null;
};

const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string>("test-token"); //default value

  // const login = async (user) => {
  //   // fetch user
  //   // res.data.obj.token
  //   // set token
  // };

  // const register = async (user) => {
  //   // register user
  // };

  return (
    <Context.Provider value={ {token, setToken }}>{children}</Context.Provider>
  );
};


export { Context, ContextProvider, UseUserContext };
