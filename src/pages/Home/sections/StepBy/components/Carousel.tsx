import { useRef, useState } from "react"
import * as S from "../styles"

type TypeItemsCarousel = {
  icon: React.ReactNode,
  title: string,
  description: string
}

type PropsCarousel = {
  items: TypeItemsCarousel[]
}

type TypeBlockButtons = {
  left: boolean,
  right: boolean
}

const Carousel = ({ items }: PropsCarousel) => {
  const carouselRef = useRef<HTMLUListElement | null>(null)
  const [blockButtons, setBlockButtons] = useState<TypeBlockButtons>({
    left: false,
    right: false
  })
  const gapCarousel = 16

  const handleClickButtonScroller = (direction: "left" | "right") => {
    const { current: carouselElement } = carouselRef;
    if (!carouselElement) return;
    const offsetWidth = carouselElement.offsetWidth + gapCarousel;
    const { left: leftBlock, right: rightBlock } = blockButtons;

    const setBlockButtonsState = (left: boolean, right: boolean) => {
      setBlockButtons(prevBlock => ({
        ...prevBlock,
        left,
        right
      }));
    };

    if (direction === "left" && !leftBlock) {
      carouselElement.scrollLeft -= offsetWidth;
      setBlockButtonsState(true, false);
      setTimeout(() => setBlockButtonsState(false, false), 1000);
    } else if (direction === "right" && !rightBlock) {
      carouselElement.scrollLeft += offsetWidth;
      setBlockButtonsState(false, true);
      setTimeout(() => setBlockButtonsState(false, false), 1000);
    }

  }




  return (
    <S.Carousel>
      {

      }
      {

      }
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