import { useEffect, useRef } from "react"
import * as S from "../styles"

type TypeItemsCarousel = {
  icon: React.ReactNode,
  title: string,
  description: string
}

type PropsCarousel = {
  items: TypeItemsCarousel[]
}

const Carousel = ({ items }: PropsCarousel) => {
  const carouselRef = useRef<HTMLUListElement | null>(null)
  const gapCarousel = 16

  const handleClickButtonScroller = (direction: "left" | "right") => {
    const carouselElement = carouselRef.current
    if (!carouselElement) return
    const offsetWidth = carouselElement.offsetWidth + gapCarousel
    if (direction === "left") {
      carouselElement.scrollLeft -= offsetWidth
    } else {
      carouselElement.scrollLeft += offsetWidth
    }
  }

  useEffect(() => {
    const carouselElement = carouselRef.current
    if (carouselElement) {
      const offsetWidth = carouselElement.offsetWidth + gapCarousel
      setInterval(() => {
        if (carouselElement.scrollLeft > offsetWidth) {
          carouselElement.scrollLeft = 0
        } else {
          carouselElement.scrollLeft += offsetWidth
        }
      }, 15 * 1000)
    }
  }, [])



  return (
    <S.Carousel>
      <button className="button-controller button-controller-left" onClick={() => handleClickButtonScroller("left")}><i className='bx bx-chevron-left'></i></button>
      <button className="button-controller button-controller-right" onClick={() => handleClickButtonScroller("right")}><i className='bx bx-chevron-right'></i></button>
      <ul className="carousel-list" ref={carouselRef}>
        {
          items.map(({ description, icon, title }, index) => (
            <li key={index}>
              <span className="stand-number">{index + 1}°</span>
              {icon}
              <h4>{title}</h4>
              <p>{description}</p>
            </li>
          ))
        }
      </ul>
    </S.Carousel>
  )
}


export default Carousel