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

import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
import Login from "./Login";
import Todo from "./Todo";
import FileUpload from "./FileUpload";
import Header from "@/layout/Header";

const Home = () => {

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", user);
    });
  },[]);



  return (
    <div className="w-full flex flex-col m-5">
      <Header />
      <div className="flex justify-between m-5">
        <div>
          <img src="/src/assets/pslogo.png" alt="logo" width={64} height={1}/>
        </div>
        <form className="mt-2">   
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
              </div>
              <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
              <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">검색</button>
          </div>    
        </form>
        <ul className="flex space-x-5 mt-4">
          <li>로그인</li>
          <li>마이페이지</li>
        </ul>
      hea</div>
      <div className="flex justify-around">
        <div className="w-100 border-b">사이드 카테고리</div>
        <div className="w-100">
          <Carousel>
            <CarouselContent>
              <CarouselItem>...1</CarouselItem>
              <CarouselItem>...2</CarouselItem>
              <CarouselItem>...3</CarouselItem>
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


      <Login />
      <br />
      <hr />
      <Todo />
      <br />
      <hr />
      <FileUpload />

      <br />
      <hr />
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
