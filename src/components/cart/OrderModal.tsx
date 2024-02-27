import Modal from "../modal/Modal"
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const OrderModal = ({props}: any) => {
  const {ShowModalHandler} = props;

  return (
    <>
      <Modal.Wrapper>
        <Modal.Header onClickEffect={ShowModalHandler}>
          주문 / 결제
        </Modal.Header>
        <Modal.Body>
          <Modal.Title>
            구매자 정보
          </Modal.Title>
          <Label>이름</Label>
          <Input 
            className=""
            type="text"/>
          <Label>이메일</Label>
          <Input 
            className=""
            type="text"/>
          <Label>휴대폰 번호</Label>
          <Input 
            className=""
            type="text"/>
        </Modal.Body>
        <Modal.Body>
          <Modal.Title>
            받는사람 정보
          </Modal.Title>
          <Label>받는 사람</Label>
          <Input 
            className=""
            type="text"/>
          <Label>배송 주소</Label>
          <Input 
            className=""
            type="text"/>
          <Label>연락처</Label>
          <Input 
            className=""
            type="text"/>
          <Label>배송 요청사항</Label>
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