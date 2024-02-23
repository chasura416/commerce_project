import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const NotFound = () => {
  const navigate = useNavigate();

  const back = () => {
    navigate("/");
  }

  return (
    <div className="flex justify-center mt-96">
      <div className="flex flex-col gap-5">
        <p className="text-3xl">Not Found</p>
        <p className="text-lg">잘못된 페이지 입니다.</p>
        <Button onClick={back}>홈으로 가기</Button>
      </div>
    </div>
  )
}

export default NotFound