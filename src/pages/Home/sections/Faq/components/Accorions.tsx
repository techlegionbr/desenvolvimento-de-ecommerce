import * as S from "../styles"
import { useState } from "react"
import Accordion from "./Accordion"
import { AccordionsContext } from "../contexts/AccordionContext"
type TypeAccordion = {
  question: string,
  response: string,
}

type PropsAccordions = {
  accordions: TypeAccordion[]
}


const Accordions = ({ accordions }: PropsAccordions) => {

  const accodionMap = Object.fromEntries(accordions.map((_accordion, index) => [(index + 1).toString(), false]))

  const [accordionsState, setAccordionsState] = useState(accodionMap)

  const handleClickAccordion = (number: number, show: boolean) => {
    setAccordionsState(prevAccordionsState => {
      const accordionsClosed = Object.fromEntries(Object.entries(prevAccordionsState).map(([key]) => [key, false]))
      return {
        ...accordionsClosed,
        [number]: !show
      }
    })
  }

  return (
    <AccordionsContext.Provider value={{ accordions: accordionsState, onClickAccordion: handleClickAccordion }}>
      <S.Accordions>
        {
          accordions.map((accordion, index) => <Accordion key={index} {...accordion} number={index + 1} />)
        }
      </S.Accordions>
    </AccordionsContext.Provider>
  )
}

export default Accordions