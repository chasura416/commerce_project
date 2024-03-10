import { createContext, useContext } from "react";
const ModalContext = createContext(false);

const useModalContext = () => {
  const value = useContext(ModalContext);

  if (!value) {
    throw new Error("Modal.* should asdas~~~");
  }

  return value;
};

export { ModalContext, useModalContext };
