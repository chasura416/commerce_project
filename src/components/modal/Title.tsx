import { ModalTitle } from "./ModalType";
import { useModalContext } from "./useModalContext";

const Title = ({ children }: ModalTitle) => {
  const value = useModalContext();
  value;
  return (
    <>
      <div className="pb-2 border-b border-solid border-blueGray-200">
        <div className="text-xl font-semibold">{children}</div>
      </div>
    </>
  );
};

export default Title;
