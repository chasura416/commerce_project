import { useState } from "react"
import Modal from "../modal/Modal"


const OrderModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div>OrderModal</div>
      <Modal.Wrapper>
        <Modal.Body>
          일단 너가 되야함
        </Modal.Body>
      </Modal.Wrapper>
    </>
  )
}

export default OrderModal