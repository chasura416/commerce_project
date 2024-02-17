import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import mainImage01 from "@/assets/mainImage01.jpeg"
import mainImage02 from "@/assets/mainImage02.jpeg"
import mainImage03 from "@/assets/mainImage03.jpeg"
import mainImage04 from "@/assets/mainImage04.jpeg"
import mainImage05 from "@/assets/mainImage05.jpeg"

const HomeCarousel = () => {
  const images = [
    "src/assets/mainImage01.jpeg",
    "src/assets/mainImage02.jpeg",
    "src/assets/mainImage03.jpeg",
    "src/assets/mainImage04.jpeg",
    "src/assets/mainImage05.jpeg",
    "src/assets/mainImage01.webp",
    "src/assets/mainImage06.webp",
    "src/assets/mainImage03.avif",
    "src/assets/mainImage05.avif",
  ]

  return (
    <Carousel className="w-full max-w-2xl">
      <CarouselContent>
        {Array.from({ length: 8 }).map((_, index) => (
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
