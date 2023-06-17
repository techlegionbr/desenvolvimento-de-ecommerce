import { styled } from "styled-components";
import { colors, sizings } from "../../../../styles/vars";


export const Techologies = styled.div`
  background-color: ${colors.primary};
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: ${sizings.padding_section};
  border-top: 1.4px solid #ffffff1c;
  .content{
    width: ${sizings.content};
    text-align: center;
    .carousel-list{
      margin-top: ${sizings.spacing_top_title_section};
      display: grid;
      gap: 3rem;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }
`


export const Carousel = styled.li`
  width: 100%;
  .title-card{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .4rem;
    background-color: #021d49;
    border: 1.4px solid ${colors.light_weak_border};
    padding: 1rem;
    border-top-left-radius: .5rem;
    border-top-right-radius: .5rem;
    margin-bottom: .5rem;
    position: relative;
    h3{
      text-align: center;
      line-height: 1.2rem;
      text-transform: uppercase;
      font-size: 1rem;
      color: ${colors.light_weak_text};
    }
    i{
      font-size:2rem;
      display: none;
    }
  }
  .card{
    width: 100%;
    height: 400px;
    background-color: #082759;
    border: 1.4px solid ${colors.light_weak_border};
    padding: 1rem;
    position: relative;
    border-bottom-left-radius: .5rem;
    border-bottom-right-radius: .5rem;
    .controller{
      all: unset;
      position: absolute;
      bottom: 1rem;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background-color: ${colors.third};
      color: ${colors.primary};
      font-size: 1.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: .2s;
      opacity: .7;
      &:hover{
        opacity: 1;
      }

    }
    .controller-left{
      left: 4rem;
    }
    .controller-rigth{
      right: 4rem;
    }
    .carousel-list-content{
      width: 100%;
      height: 90%;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding-bottom: 1rem;
      scroll-snap-type: x mandatory;
      scroll-behavior: smooth;
      li{
        scroll-snap-align: start;
        flex: none;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        padding: 1rem 1.5rem;
        i{
          font-size: 4rem;
          color: ${colors.third}
        }
        h4{
          margin-top: 1rem;
          font-size: 1.2rem;
          text-transform: uppercase;
          margin-bottom: .4rem;
          width: 100%;
        }
        p{
          width: 100%;
          font-size: .87rem;
          line-height: calc(.87rem * .5rem);
          word-break: keep-all;
          height: 80%;
          text-align: center;
        }
      }
    }
    .controller-current{
      height: 25px;
      position: absolute;
      bottom: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: .3rem;
      left: 50%;
      transform: translateX(-50%);
      .mark-current{
        background-color: ${colors.third};
      }
      button{
        all: unset;
        background-color: ${colors.primary};
        width: 12px;
        height: 12px;
        border-radius: 50%;
        cursor: pointer;
        border: 1px solid ${colors.light_weak_border};
        transition: .2s;
      }
    }
  }
  
`