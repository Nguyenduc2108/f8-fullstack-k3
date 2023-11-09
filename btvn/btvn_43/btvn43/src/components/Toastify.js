import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const showToast = (type, message) => {
  switch (type) {
    case "success":
      toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
      break;
    case "warn":
      toast.warn(message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
      break;
    case "error":
      toast.error(message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
      break;
    case "info":
      toast.info(message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
      break;
    default:
      toast(message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
      break;
  }
};

export default showToast;
