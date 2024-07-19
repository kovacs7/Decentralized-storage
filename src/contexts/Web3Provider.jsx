import { useState } from "react";
import { createContext } from "react";

export const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
  const [web3Sate, setWeb3State] = useState({
    contractInstance: null,
    selectedAccounts: null,
  });

  const updatedWeb3State = (newState) => {
    setWeb3State((prevState) => ({ ...prevState, ...newState }));
  };

  return (
    <Web3Context.Provider value={{ web3Sate, updatedWeb3State }}>
      {children}
    </Web3Context.Provider>
  );
};
