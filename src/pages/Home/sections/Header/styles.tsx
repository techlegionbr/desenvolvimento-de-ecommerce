import { styled } from "styled-components";
import { colors, sizings } from "../../../../styles/vars";
import { sectionBackgroundColors } from "../../vars";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 80px;

  background: ${sectionBackgroundColors.header};
  backdrop-filter: blur(5px);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  padding: 2rem;
  border-bottom: 1.6px solid #ffffff15;
  .content{
    width: ${sizings.content};
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo{
      display: flex;
      align-items: center;
      gap: .5rem;
      .title{
        line-height: 1.3rem;
        h1{
          text-transform: uppercase;
          font-size: 1.5rem;
          font-weight: 100;
          span{
            font-weight: bold;
            color: ${colors.third}
          }
        }
        p{
          text-transform: uppercase;
          font-size: .76rem;
          color: #b1e1fcb9;
        }
      }
    }
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