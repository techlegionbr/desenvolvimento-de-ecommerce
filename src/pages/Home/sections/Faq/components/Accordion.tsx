import { AccordionsContext } from "../contexts/AccordionContext"
import * as S from "../styles"
import { useContext } from "react"

type PropsAccordion = {
  question: string,
  response: string,
  number: number,
}

const Accordion = ({ question, response, number }: PropsAccordion) => {
  const { accordions, onClickAccordion } = useContext(AccordionsContext)
  const show = accordions[number.toString()]

  return (
    <S.Accordion onClick={() => onClickAccordion(number, show)} show={show}>
      <div className={`question-container`}>
        <div className={`question`}>
          <span className="number-question">{number}.</span>
          <p>{question}</p>
          <button style={{
            transform: `rotate(${show ? "180deg" : "0deg"})`
          }} className="arrow-response"><i className={`bx bxs-down-arrow`}></i></button>
        </div>
        <div className="response">
          <p>{response}</p>
        </div>
      </div>
    </S.Accordion>
  )
}

export default Accordion