import { ReactNode } from "react";

interface layout {
  children: ReactNode;
}

const GlobalLayout = ({children}: layout) => {
  return (
    <>
      <div className="max-w-[1280px] m-auto">
        {children}
      </div>
    </>
  )
}

export default GlobalLayout