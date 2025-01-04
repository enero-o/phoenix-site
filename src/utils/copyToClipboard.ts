import toast from "react-hot-toast";

export const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success('Address copied successfully');
      })
      .catch((error) => {
        toast.error(error);
      });
  };