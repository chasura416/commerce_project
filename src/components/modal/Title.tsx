import { ModalTitle } from './ModalType'


const Title = ({children}: ModalTitle) => {
  return (
    <>
      <div className="pb-2 border-b border-solid border-blueGray-200">
        <div className='text-xl font-semibold'>{children}</div>
      </div>
    </>
  )
}

export default Title;