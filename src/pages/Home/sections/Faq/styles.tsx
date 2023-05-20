import { styled } from "styled-components";
import { colors, sizings } from "../../../../styles/vars";
import { sectionBackgroundColors } from "../../vars";




export const Faq = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${sizings.padding_section};
  background: ${sectionBackgroundColors.faq};
  border-top: 1.4px solid #ffffff1c;
  @media (max-width: 1300px) { min-height: 100vh; }
  .content{
    width: ${sizings.content};
    .faq-container{
      width: 100%;
      margin-top: ${sizings.spacing_top_title_section};
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
        height: 550px;
        overflow: hidden;
        border-radius: .8rem;
        border: 1.4px solid ${colors.light_weak_border};
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
  gap: 1rem;
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
  background-color: #221b51;
  padding: 1.7rem;
  cursor: pointer;
  border: 1.5px solid ${colors.light_weak_border};
  border-radius: .4rem;
  overflow: hidden;
  @media (max-width: 500px) {
    padding: 1.2rem;
  }
  &:hover .question{
    opacity: 1;
  }
  .question{
    width: 100%;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    position: relative;
    padding: 0 2.4rem;
    opacity: ${({ show }) => show ? "1" : ".6"};
    transition: .2s;
    @media (max-width: 500px) {
      padding: 0 1.7rem;
    }
    .arrow-button{
      all: unset;
      position: absolute;
      right: 0;
      margin: auto;
      top: 0;
      bottom: 0;
      color: ${colors.third};
      transition: .2s;
      @media (max-width: 500px) {
        font-size: .8rem;
      }
    }

    p{
      font-size: 1rem;
      font-weight: bold;
      text-transform: uppercase;
      user-select: none;
      @media (max-width: 500px) {
        font-size: .8rem;
      }
    }

    .number-question{
      display: inline-flex;
      left: 0;
      position: absolute;
      margin: auto;
      font-weight: bold;
      color: ${colors.third};
      font-size: 1.5rem;
      @media (max-width: 500px) {
        font-size: 1.2rem;
      }
    }
  }
  .response{
    height: ${({ show }) => show ? "220px" : "0px"};
    transition: .2s;
    overflow: hidden;
    padding: 0 2.4rem;
    @media (max-width: 1000px) {
      height: ${({ show }) => show ? "150px" : "0px"};
    }
    @media (max-width: 870px) {
      height: ${({ show }) => show ? "220px" : "0px"};
    }
    @media (max-width: 660px) {
      height: ${({ show }) => show ? "280px" : "0px"};
    }
    @media (max-width: 500px) {
      padding: 0 1.7rem;
      height: ${({ show }) => show ? "280px" : "0px"};
    }
    p{
      padding-top: 1rem;
      font-size: 1rem;
      @media (max-width: 500px) {
        padding-top: .6rem;
        font-size: .8rem;
      }
    }
  }
  
  
`