import { toast } from "react-toastify";

export default function errorHandler(err) {
  if (err) {
    let message;
    if (err.response) {
      message =
        err.response.status === 500
          ? "Something went terribly wrong"
          : err.response.data.message;

      if (typeof message === "string") toast.error(message);

      return Promise.reject(err);
    }
  }
}
