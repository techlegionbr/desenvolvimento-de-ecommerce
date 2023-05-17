
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

const Carousel = ({ items, label }: PropsCarousel) => {
  const [current, setCurrent] = useState(0)

  const carouselRef = useRef<HTMLUListElement | null>(null)

  const handleClickCurrentController = useCallback((position: number) => {
    const carouselCurrent = carouselRef.current
    if (!carouselCurrent) return

    const { offsetWidth, scrollLeft } = carouselCurrent
    carouselCurrent.scrollLeft = position < current ? scrollLeft - offsetWidth : scrollLeft + offsetWidth
    setCurrent(position)
  }, [current])

  const handleClickController = useCallback((direction: "left" | "right") => {
    const carouselCurrent = carouselRef.current
    if (!carouselCurrent) return

    const { offsetWidth } = carouselCurrent

    if (direction === "left") {
      carouselCurrent.scrollLeft -= offsetWidth
      setCurrent(prevCurrent => prevCurrent !== 0 ? prevCurrent - 1 : prevCurrent)
    }
    if (direction === "right") {
      carouselCurrent.scrollLeft += offsetWidth
      setCurrent(prevCurrent => prevCurrent !== items.length - 1 ? prevCurrent + 1 : prevCurrent)
    }
  }, [items])

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