import * as S from "./styles"
import { useState, useRef, useEffect, useCallback } from "react"

type TypeOptions = {
  value: string,
  label: string
}

type PropsSelect = {
  options: TypeOptions[],
  selectLabel: string
}

const Select = ({ options, selectLabel }: PropsSelect) => {

  const [showOptions, setShowOptions] = useState(false)
  const [optionSelected, setOptionSelected] = useState({
    label: selectLabel,
    value: ""
  })

  const selectRef = useRef<HTMLDivElement | null>(null)
  const optionListRef = useRef<HTMLUListElement | null>(null)


  useEffect(() => {
    document.addEventListener("click", eventClickWindow)

    return () => document.removeEventListener("click", eventClickWindow)
  }, [showOptions])


  const eventClickWindow = useCallback((ev: MouseEvent) => {
    const elementClicked = ev.target as Node

    const { current: elementSelect } = selectRef
    const { current: elementOptionListRef } = optionListRef

    if (elementSelect?.contains(elementClicked) && !elementOptionListRef?.contains(elementClicked)) {
      setShowOptions(prevShow => !prevShow)
    }
    if (!elementSelect?.contains(elementClicked)) {
      setShowOptions(false)
    }
  }, [])

  const handleClickOption = useCallback((value: string, label: string) => {
    if (value === optionSelected.value) {
      setOptionSelected({
        value: "",
        label: selectLabel
      })
    } else {
      setOptionSelected({ value, label })
      setShowOptions(false)
    }
  }, [optionSelected])



  return (
    <S.Select
      active={!!optionSelected.value}
      show={showOptions}
      ref={selectRef}
    >
      <input disabled value={optionSelected.label} />
      <button
        id="button-open-options"
        style={{ transform: `rotate(${showOptions ? "180deg" : "0deg"})` }}
      >
        <i className='bx bxs-down-arrow'></i>
      </button>
      {
        showOptions && (
          <ul className="options" ref={optionListRef}>
            {
              options.map(({ label, value }) => (
                <li
                  className={optionSelected.value === value ? "mark-option" : ""}
                  onClick={() => handleClickOption(value, label)}
                  key={value}
                >{label}</li>
              ))
            }
          </ul>
        )
      }
    </S.Select>
  )
}

export default Select