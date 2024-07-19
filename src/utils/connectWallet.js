import { Slide, toast } from "react-toastify";
import {ethers} from "ethers"

export const connectWallet = async () => {
  if (!window.ethereum) {
    return toast.warning(
      "Metamask is not installed on your machine. Please install Metamask at https://metamask.io/",
      {
        position: "bottom-left",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
        className: "toast-message",
      },
    );
  }

  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });

  const selectedAccounts = accounts[0];
  const provider = ethers.BrowserProvider(window.ethereum); // read smart contracts
  const signer = provider.getSigner(); // write smart contracts
  const contractAddress = ""
  const contractAbi = "" //remove
  const contractInstance = new ethers.Contract(contractAddress, contractAbi, signer)

  return {contractInstance, selectedAccounts}
};
