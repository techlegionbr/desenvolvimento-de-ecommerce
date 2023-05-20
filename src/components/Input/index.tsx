import { ChangeEvent } from "react"
import * as S from "./styles"
import InputMark from "the-mask-input"

type PropsInput = {
  className: string,
  placeholder: string,
  type?: "text" | "email",
  required: boolean,
  mask?: string,
  autoComplete?: "on" | "off",
  spellCheck?: boolean,
  onChange?: (ev: ChangeEvent) => void
}

const Input = (propsInput: PropsInput) => {
  return (
    <S.Input>
      <InputMark {...propsInput} />
    </S.Input>
  )
}


export default Input