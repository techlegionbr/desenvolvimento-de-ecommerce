
import * as S from "../styles"
import React, { useState, useRef, useCallback } from "react"

type TypeItemCarousel = {
  technologie: string,
  icon: React.ReactNode,
  description: string
}
type PropsCarousel = {
  items: TypeItemCarousel[],
  label: {
    icon: React.ReactNode,
    text: React.ReactNode
  }
}

interface IBlockButtons {
  left: boolean,
  right: boolean
}

const Carousel = ({ items, label }: PropsCarousel) => {
  const [current, setCurrent] = useState(0)
  const [blockButtons, setBlockButtons] = useState<IBlockButtons>({
    left: false, right: false
  })

  const carouselRef = useRef<HTMLUListElement | null>(null)

  const handleClickCurrentController = useCallback((position: number) => {
    const carouselCurrent = carouselRef.current
    if (!carouselCurrent) return

    const { offsetWidth, scrollLeft } = carouselCurrent
    carouselCurrent.scrollLeft = position < current ? scrollLeft - offsetWidth : scrollLeft + offsetWidth
    setCurrent(position)
  }, [current])

  const handleClickController = (direction: "left" | "right") => {
    const { current: carouselElement } = carouselRef;
    if (!carouselElement) return;
    const offsetWidth = carouselElement.offsetWidth;
    const { left: leftBlock, right: rightBlock } = blockButtons;

    const setBlockButtonsState = (left: boolean, right: boolean): void => {
      setBlockButtons(prevBlock => ({
        ...prevBlock,
        left,
        right
      }));
    };

    if (direction === "left" && !leftBlock) {
      carouselElement.scrollLeft -= offsetWidth;
      setCurrent(prevCurrent => prevCurrent !== 0 ? prevCurrent - 1 : prevCurrent)
      setBlockButtonsState(true, false);
      setTimeout(() => { setBlockButtonsState(false, false); }, 1000);
    } else if (direction === "right" && !rightBlock) {
      carouselElement.scrollLeft += offsetWidth;
      setCurrent(prevCurrent => prevCurrent !== items.length - 1 ? prevCurrent + 1 : prevCurrent)
      setBlockButtonsState(false, true);
      setTimeout(() => { setBlockButtonsState(false, false); }, 1000);
    }
  }
  return (
    <S.Carousel>
      <div className="title-card">
        {label.icon}
        <h3>{label.text}</h3>
      </div>
      <div className="card">
        <button className="controller controller-left" onClick={() => handleClickController("left")} ><i className='bx bx-chevron-left'></i></button>
        <button className="controller controller-rigth" onClick={() => handleClickController("right")} ><i className='bx bx-chevron-right'></i></button>
        <ul className="carousel-list-content" ref={carouselRef}>
          {
            items.map(({ description, icon, technologie }, index) => (
              <li key={index}>
                {icon}
                <h4>{technologie}</h4>
                <p>{description}</p>
              </li>
            ))
          }
        </ul>
        <div className="controller-current">
          {
            items.map((_item, index) => (
              <button key={index} onClick={() => handleClickCurrentController(index)} className={index === current ? "mark-current" : ""}></button>
            ))
          }
        </div>
      </div>
    </S.Carousel>
  )
}


export default Carousel