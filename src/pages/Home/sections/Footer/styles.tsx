import { styled } from "styled-components";
import { colors, sizings } from "../../../../styles/vars";
import { sectionBackgroundColors } from "../../vars";



export const Footer = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 1rem;
  background-color: ${sectionBackgroundColors.footer};
  border-top: 1.4px solid #ffffff1c;
  .content{
    width: ${sizings.content};
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    #rights-reserved{
      margin-top: 2rem;
      font-size: .8rem;
      color: #ffffffa1;
    }
    .title{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      img{
        display: none;
      }
      h1{
        font-weight: 100;
        font-size: 1.5rem;
        margin-top: .5rem;
        span{
          color: ${colors.third};
          font-weight: bold;
        }
      }
      p{
        margin-top: -.3rem;
        font-size: .8rem;
        color: #ffffff9d;
      }
    }
    .redes{
      margin-top: 2rem;
      h3{
        text-align: center;
        font-size: .85rem;
        text-transform: uppercase;
        color: ${colors.third};
        font-weight: 100;
      }
      ul{
        margin-top: .6rem;
        width: 100%;
        height: 140px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;
        @media (max-width: 900px) {
          height: auto;
        }
        li{
          flex: none;
          background-color: #181d49;
          width: 120px;
          height: 90%;
          
          border-radius: .3rem;
          border: 1.5px solid #ffffff42;
          transition: .2s ease;
          opacity: .6;
          @media (max-width: 900px) {
            height: auto;
          }
          &:hover{
            opacity: 1;
            border: 1.5px solid #ffffffb8;
            height: 100%;
            transform: scale(1.03);
          }
          a{
            display: flex;
            width: 100%;
            height: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: ${colors.light};
            gap: .7rem;
            padding: 1.5rem 0;
            i{
              font-size: 2rem;
              color: ${colors.third}
            }
            h4{
              text-transform: uppercase;
              text-align: center;
              line-height: .9rem;
              font-size: .8rem;
              font-weight: 100;
              strong{
                font-size: .9rem;
              }
            }
          }
        }
      }
      
    }
  }
`