import { useState } from "react"
import Modal from "../modal/Modal"


const OrderModal = (Open, setOpen) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div>OrderModal</div>
      <Modal.Wrapper>
        <Modal.Header onClickEffect={()=>{
          setOpen(!Open)
        }}>
          일단 모달 타이틀
        </Modal.Header>
        <Modal.Body>
          일단 너가 되야함
        </Modal.Body>
      </Modal.Wrapper>
    </>
  )
}

export default OrderModal