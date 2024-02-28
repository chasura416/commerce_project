import { ModalType } from "./ModalType";

const Wrapper = ({ children, onClickEffect }: ModalType) => {
  return (
    <>
      {/* Layout */}
      <div className="w-[600px] m-auto overflow-x-hidden overflow-y-auto fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 outline-none focus:outline-none">
        <div className="flex justify-center items-center my-6 bg-white">
          {/* content */}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {children}
          </div>
        </div>
      </div>
      {/* 배경화면 어둡게 */}
      <div
        onClick={onClickEffect}
        className="opacity-30 fixed inset-0 z-40 bg-black"
      ></div>
    </>
  );
};

export default Wrapper;

// {/* Layout */}
// <div
//   className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
// >
//   <div className="relative w-[600px] my-6 mx-auto max-w-3xl">
//     {/* content */}
//     <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
//       {children}
//     </div>
//   </div>
// </div>
//   {/* 배경화면 어둡게 */}
//   <div
//     onClick={() => {
//       console.log("check");
//     }}
//     className="opacity-30 fixed inset-0 z-40 bg-black"></div>
