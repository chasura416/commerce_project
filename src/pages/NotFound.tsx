import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const NotFound = () => {
  const navigate = useNavigate();

  const back = () => {
    navigate("/");
  }

  return (
    <div>
      <p>NotFound</p>
      <p>잘못된 페이지 입니다.</p>
      <Button onClick={back}>뒤로</Button>
    </div>
  )
}

export default NotFound