import { useState } from "react"
import Modal from "../modal/Modal"
import { Input } from "../ui/input";

const OrderModal = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {ShowModalHandler} = props;
  return (
    <>
      <div>OrderModal</div>
      <Modal.Wrapper>
        <Modal.Header onClickEffect={ShowModalHandler}>
          일단 모달 타이틀
        </Modal.Header>
        <Modal.Body>
          일단 너가 되야함sadfasdfasl;dfjaslkd;f
          asdl;kfjasdl;fasjdkl;fjaskdlf;as;dlf
          askdlfjl;asdfkjasdl;fkjasdlfkjasdlkf;s
          asdfjklas;dfasdfl;asdjkfl;asdjfl;asdfsa
          <Input 
            className=""
            type="text"/>
        </Modal.Body>
        <Modal.Footer 
          cancel="취소" 
          confirm="주문하기" 
          onClickCancel={ShowModalHandler}
          onClickConfirm={ShowModalHandler} 
        />
      </Modal.Wrapper>
    </>
  )
}

export default OrderModal