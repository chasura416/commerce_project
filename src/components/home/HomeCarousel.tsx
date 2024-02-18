import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HomeCarousel = () => {
  const images = [
    "",
    "src/assets/mainImage01.webp",
    "src/assets/mainImage02.jpeg",
    "src/assets/mainImage01.jpeg",
    "src/assets/mainImage03.jpeg",
    "src/assets/mainImage04.jpeg",
    "src/assets/mainImage05.jpeg",
    "src/assets/mainImage06.webp",
    "src/assets/mainImage03.avif",
    "src/assets/mainImage05.avif",
  ]

  return (
    <Carousel className="w-full max-w-2xl">
      <CarouselContent>
        {Array.from({ length: 9 }).map((_, index) => (
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
