import { styled } from "styled-components";
import { colors } from "../../styles/vars";


type PropsSelect = {
  active: boolean,
  show: boolean
}

export const Select = styled.div<PropsSelect>`
  width: 100%;
  cursor: pointer;
  position: relative;
  &:hover #button-open-options{
    color: #fff;
  }
  #button-open-options{
    all: unset;
    position: absolute;
    right: 1rem;
    top: 0;
    bottom: 0;
    font-size: .8rem;
    color: #ffffff99;
    pointer-events: none;
    transition: .2s;
  }
  input{
    border: 1.4px solid ${({ show }) => show ? "#ffffffd5" : "#ffffff1d"};;
    width: 100%;
    color: ${colors.light};
    font-size: 1rem;
    padding: .8rem 1rem;
    border-radius: .3rem;
    color: ${({ active }) => active ? "#fff" : "#ffffff9e"};
    cursor: pointer;


    background-color: #73c2ff4a;
    z-index: 4;
  }
  .options{
    top: calc(100% + .4rem);
    position: absolute;
    z-index: 1;
    width: 100%;
    background-color: #1d1c52;
    border-radius: .3rem;
    border: 1.4px solid #ffffff26;
    padding: 1rem 0;
    @keyframes translateDown {
      0%{ transform: translateY(-30%); opacity: 0 }
      100%{ transform: translateY(0%); opacity: 1  }
    }
    animation: translateDown .3s;
    li{
      padding: .2rem 1rem;
      transition: .2s ease-in;
      color: #ffffffd5;
      &:hover{
        border-left: 5px solid ${colors.secondary};
        color: #fff;
        background-color: #201e79;
      }
    }
    .mark-option{
      background-color: ${colors.secondary};
      color: #fff;
      &:hover{
        border-left: none;
        background-color: ${colors.secondary};
      }
    }
  }
`