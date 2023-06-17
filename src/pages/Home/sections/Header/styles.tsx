import { styled } from "styled-components";
import { colors, sizings } from "../../../../styles/vars";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 80px;

  background: ${colors.primary};
  backdrop-filter: blur(5px);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  padding: 2rem 1rem;
  border-bottom: 1.6px solid #ffffff15;
  .content{
    width: ${sizings.content};
    display: flex;
    align-items: center;
    justify-content: space-between;
    #button-info{
      all: unset;
      font-size: 1.3rem;
      cursor: pointer;
      transition: .2s;
      i{ color: ${colors.third}; }
      &:hover{
        transform: scale(1.2);
      }
    }
  }
`