import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ErrorToast(errorText) {
  const notify = () => toast({errorText});

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
}
