import { styled } from "styled-components";
import { colors, sizings } from "../../../../styles/vars";
import { sectionBackgroundColors } from "../../vars";



export const StepBy = styled.div`
  background-color: ${sectionBackgroundColors.stepBy};
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: ${sizings.padding_section};
  border-top: 1.4px solid #ffffff1c;
  .content{
    width: ${sizings.content};
    text-align: center;
  }
`


export const Carousel = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: ${sizings.spacing_top_title_section};
  @media (max-width: 470px) {
    margin-top: 2rem;
  }
  .button-controller{
    all: unset;
    position: absolute;
    width: 34px;
    height: 34px;
    background-color: ${colors.third};
    backdrop-filter: blur(5px);
    color: ${colors.dark};
    font-size: 1.7rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: .2s;
    opacity: .7;
    z-index: 3;
    &:hover{
      opacity: 1;
    }
    @media (min-width: 470px) {
      top: 0;
      bottom: 0;
      margin: auto;
    }
    @media (max-width: 470px) {
      bottom: -4rem;
    }

  }
  .button-controller-left{
    left: -.2rem;
    @media (max-width: 470px) {
      left: calc(50% - 3rem);;
    }
  }
  .button-controller-right{
    right: -.2rem;
    @media (max-width: 470px) {
      right: calc(50% - 3rem);
    }
  }
  .carousel-list{
      width: calc((270px * 3) + 2rem);
      height: 270px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      overflow: hidden;
      scroll-behavior: smooth;
      gap: 1rem;
      @media (max-width: 930px) {
        width: calc((270px * 2) + 1rem);
      }
      @media (max-width: 645px) {
        width: calc((270px));
      }
      
      li{
        flex: none;
        border: 1.5px solid #ffffff21;
        border-radius: .5rem;
        width: 270px;
        height: 100%;
        background-color: #1a1a52;
        padding: 2rem 1rem;
        position: relative;
        i{
          font-size: 2.6rem;
          color: ${colors.third}
        }
        h4{
          margin-top: 1rem;
          font-size: 1.2rem;
          text-transform: uppercase;
        }
        p{
          font-size: .9rem;
          margin-top: .5rem;
        }
        .stand-number{
          position: absolute;
          top: .6rem;
          left: .6rem;
          width: 40px;
          height: 40px;
          background-color: #161646a0;
          border: 1.3px solid ${colors.light_weak_border};
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${colors.third};
          font-weight: bold;
          font-size: 1rem;
          pointer-events: none;
        }
      }
  }
`