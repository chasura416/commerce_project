import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// import { ref, getDownloadURL } from "firebase/storage"
// import { storage } from "@/firebase";



// const fetchLevelTestImgFromFireStorage = async (img) => {
//   const storage = getStorage();
//   try{
//     const newURL = "leveltestImage/" + `${img}`;
//     const url = await getDownloadURL(ref(storage, newURL));

//     const response = await fetch(url);
//     const blob = await response.blob();
//     const imageURL = URL.createObjectURL(blob);
//     return imageURL;

//   } catch (error) {
//     console.error("Error loading image:", error);
//   }
// }


const HomeCarousel = () => {
  const images = [
    "",
    "img/main.png",
    "img/mainImage01.webp",
    "img/mainImage02.jpeg",
    "img/mainImage01.jpeg",
    "imgmainImage03.jpeg",
    "img/mainImage04.jpeg",
    "img/mainImage05.jpeg",
    "img/mainImage06.webp",
    "img/mainImage03.avif",
    "img/mainImage05.avif",
  ]

  return (
    <Carousel className="w-full max-w-2xl">
      <CarouselContent>
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img src={images[index + 1]} alt="mainpage Image" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
};

export default HomeCarousel;
