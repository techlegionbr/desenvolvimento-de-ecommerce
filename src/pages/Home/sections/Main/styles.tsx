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
        color: #fffffff2;
        strong{
          color: #fffffff2;
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
          border: 1.3px solid #ffffff2e;
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
      .input-form{
        border: 1.4px solid #ffffff1d;
        width: 100%;
        color: ${colors.light};
        font-size: 1rem;
        padding: .8rem 1rem;
        border-radius: .3rem;

        background-color: #73c2ff4a;

        outline: none;
        transition: .2s;
        &::placeholder{
          color: #ffffff9e;
        }
        &:focus{
          border: 1.4px solid #ffffffd5;
        }

      }
      #button-submit-form{
        all: unset;
        font-size: .9rem;
        width: 100%;
        background-color: ${colors.secondary};
        padding: .8rem 0;
        text-align: center;
        font-weight: bold;
        border-radius: .3rem;
        text-transform: uppercase;
        cursor: pointer;
        border: 1.4px solid ${colors.secondary};
        transition: .2s;
        opacity: .8;
        &:hover{
          opacity: 1;
        }
      }
    }
  }
`


export const Select = styled.div`
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
    border: 1.4px solid #ffffff1d;
    width: 100%;
    color: ${colors.light};
    font-size: 1rem;
    padding: .8rem 1rem;
    border-radius: .3rem;
    color: #ffffff9e;
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