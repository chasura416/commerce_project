import { ModalType } from "./ModalType";

const Body = ({ children }: ModalType) => {
  return (
    <>
      <div className="relative p-6 flex-auto">
        <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
          {children}
        </p>
      </div>
    </>
  );
};

export default Body;
