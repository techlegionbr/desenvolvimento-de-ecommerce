import { styled } from "styled-components";
import { colors, sizings } from "../../../../styles/vars";
import { sectionBackgroundColors } from "../../vars";




export const Faq = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 2rem;
  background: ${sectionBackgroundColors.faq};
  @media (max-width: 1300px) { min-height: 100vh; }
  .content{
    width: ${sizings.content};
    .faq-container{
      width: 100%;
      margin-top: 5rem;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      @media (max-width: 1000px) {
        flex-direction: column;
        height: auto;
        gap: 2rem;
      }
      .image-faq{
        width: 40%;
        height: 500px;
        overflow: hidden;
        border-radius: .8rem;
        border: 1.4px solid #ffffff2c;
        @media (max-width: 1000px) {
          width: 100%;
          height: 400px;
        }
        img{
          width: 100%;
          object-fit: cover;
          height: 100%;
        }
      }
    }
  }
`

export const Accordions = styled.ul`
  width: 70%;
  height: 100%;
  padding-right: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: .6rem;
  @media (max-width: 1000px) {
    width: 100%;
    padding-right: 0;
  }
`

type PropsAccordion = {
  show: boolean
}

export const Accordion = styled.li<PropsAccordion>`
  flex: none;
  width: 100%;
  height: ${({ show }) => show ? "300px" : "85px"};
  background-color: #151b43df;
  border-radius: .5rem;
  padding: 1.4rem;
  border: 1.3px solid #ffffff34;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  gap: 1rem;
  overflow: hidden;
  opacity: ${({ show }) => show ? "1" : ".8"};
  transition: .2s;
  @media (max-width: 1000px) {
    height: ${({ show }) => show ? "250px" : "85px"};
  }
  &:hover .question{
    opacity: 1;
  }
  .question-container{
    width: 100%;
    height: ${({ show }) => show ? "85px" : "100%"};
    transition: .2s;
    padding: 0 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
      .question{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;
        font-weight: bold;
        transition: .2s;
        position: relative;
        p{
          user-select: none;
          @media (max-width: 1000px) {
            max-width: 60%;
          }
        }
        .number-question{
          position: absolute;
          left: -2.5rem;
          top: 0;
          bottom: 0;
          margin: auto;
          align-items: flex-start;
          font-size: 1.5rem;
          color: ${colors.third};
          font-weight: bold;
          width: 30px;
          height: 30px;

        }
      .arrow-response{
        all: unset;
        margin-left: 1rem;
        color: ${colors.third};
        transition: .2s;
        font-size: 1rem;
        margin: auto;
        position: absolute;
        right: -2.5rem;
      }
    }
    .response{
        margin-top: 1.3rem;
        @keyframes translateY {
          0%{ opacity: 0; }
          100%{ opacity: 1 }
        }
        animation: translateY .4s;
        p{
          font-size: .9rem;
        }
      }
  }
  
  
`