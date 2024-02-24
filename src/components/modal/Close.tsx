import { Button } from '../ui/button'
import { ModalType } from './ModalType'

const Close = ({children, onClickEffect}: ModalType) => {

  return (
    <Button onClick={onClickEffect}>{children}</Button>
  )
}

export default Close