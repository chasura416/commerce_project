import {ModalFooter } from "./ModalType";

const Footer = ({ cancel, confirm, onClickCancel, onClickConfirm }: ModalFooter) => {
  return (
    <>
      <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
        <button
          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={onClickCancel}
        >
          {cancel}
        </button>
        <button
          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={onClickConfirm}
        >
          {confirm}
        </button>
      </div>
    </>
  );
};

export default Footer;
