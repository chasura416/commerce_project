import { Button } from '../ui/button'
import { ModalClose } from './ModalType'

const Close = ({onClickEffect}: ModalClose) => {

  return (
    <>
      {/* <Button onClick={onClickEffect}>{children}</Button> */}
      <button
          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
          onClick={onClickEffect}
        >
          {/* <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span> */}
          ×
        </button>
    </>
  )
}

export default Close