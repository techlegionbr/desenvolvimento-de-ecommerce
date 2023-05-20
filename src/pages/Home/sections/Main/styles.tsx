import { styled } from "styled-components";
import { colors, fonts, sizings } from "../../../../styles/vars";

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 200px 2rem;

  @media (max-width: 1300px) { min-height: 100vh; }

  background: ${colors.primary};
  .content{
    width: ${sizings.content};
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 830px) {
      flex-direction: column;
    }
    main{
      width: 55%;
      @media (max-width: 830px) {
        width: 100%;
        text-align: center;
      }
      h1{
        text-transform: uppercase;
        font-family: ${fonts.Poppins};
        .mark-gold{
          color:  ${colors.third};
          display: inline-flex;
          align-items: center;
          gap: .4rem;
          i{ color: ${colors.third}; }
        }
      }
      p{
        margin-top: 1rem;
        color: ${colors.light_weak_text};
        strong{
          color: ${colors.light_weak_text};
        }
      }
      ul{
        display: inline-flex;
        align-items: center;
        justify-content: flex-start;
        margin-top: 2rem;
        gap: 1rem;
        li{
          display: flex;
          align-items: center;
          border: 1.3px solid ${colors.light_weak_border};
          background-color: #625ff61e;
          padding: 1.2rem;
          border-radius: .3rem;
          flex-direction: column;
          justify-content: center;
          cursor: default;
          transition: .2s;
          &:hover{
            transform: scale(1.1);
          }
          .icon-description{
            display: flex;
            align-items: center;
            font-size: 1.4rem;
            i, span{
              color: ${colors.third};
            }
          }
          small{
            text-transform: uppercase;
            font-weight: bold;
            font-size: .7rem;
            color: #ffffffd0;
          }
        }
      }
    }
    form{
      width: 45%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: .5rem;
      padding-left: 2rem;
      @media (max-width: 830px) {
        width: 90%;
        padding-left: 0;
        padding-top: 2rem;
      }
      @media (max-width: 540px) {
        width: 100%;
      }
      
      #button-submit-form{
        all: unset;
        font-size: .9rem;
        width: calc(100%);
        background-color: ${colors.secondary};
        padding: .9rem 0;
        text-align: center;
        font-weight: bold;
        border-radius: .3rem;
        text-transform: uppercase;
        cursor: pointer;

        transition: .2s;
        opacity: .8;
        &:hover{
          opacity: 1;
        }
      }
    }
  }
`
