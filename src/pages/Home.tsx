import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Home = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-between">
        <div>로고</div>
        <div>검색 창</div>
        <div className="flex gap-3">
          <div>로그인</div>
          <div>마이페이지</div>
        </div>
      </div>
      <div className="flex">
        <div className="w-100 border-b">사이드 카테고리</div>
        <div className="w-700 border-b">
          <Carousel>
            <CarouselContent>
              <CarouselItem>...</CarouselItem>
              <CarouselItem>...</CarouselItem>
              <CarouselItem>...</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div>상품목록</div>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>

      <h1>Home</h1>
      <p>가장 먼저 보여야함</p>
      <Alert>
        <AlertTitle>안녕하세요 수강생 여러분 반갑습니다.</AlertTitle>
        <AlertDescription>항해99 취업 리부트 프로그램에 오신걸 환영합니다.</AlertDescription>
      </Alert>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline" className="mt-5">
            버튼을 눌러주세요.
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>프로젝트 셋팅을 완료하셨습니다.</AlertDialogTitle>
            <AlertDialogDescription>
              이제 1주차 기능 구현 과제들을 구현해주세요. 화이팅입니다!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>취소</AlertDialogCancel>
            <AlertDialogAction>완료</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Home;
