import { styled } from "styled-components";
import { sectionBackgroundColors } from "../../vars";
import { colors, sizings } from "../../../../styles/vars";


export const FormFooter = styled.div`
  background-color: ${sectionBackgroundColors.formFooter};
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: ${sizings.padding_section};
  border-top: 1.4px solid #ffffff1c;
  .content{
    width: ${sizings.content};
    height: 400px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    @media (max-width: 1000px) {
      flex-direction: column;
      height: auto;
    }
    .image-sup{
      width: 40%;
      height: 100%;
      overflow: hidden;
      border-radius: .6rem;
      border: 1.5px solid ${colors.light_weak_border};
      @media (max-width: 1000px) {
        width: 100%;
        height: 200px;
      }
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .legend-form{
      width: 60%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      padding: 1rem 0 1rem 2rem;
      @media (max-width: 1000px) {
        padding: 3rem 5rem;
        width: 100%;
      }
      @media (max-width: 670px) {
        padding: 3rem 0;
        width: 100%;
      }
      .title-form-footer{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;
        margin-bottom: 2rem;
        i{
          font-size: 2.2rem;
          color: ${colors.third}
        }
        .title-text{
          h1{
            font-size: 1.6rem;
            text-transform: uppercase;
            line-height: 1.7rem;
            span{
              color: ${colors.third}
            }
          }
          p{
            font-size: .9rem;
            font-weight: bold;
            color: #ffffffcd;
          }
        }
      }
      form{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: .7rem;
        @media (max-width: 1000px) {
        }
        #button-form-footer{
          all: unset;
          width: 100%;
          background: ${colors.secondary};
          padding: .9rem 0;
          text-align: center;
          border-radius: .4rem;
          font-weight: bold;
          text-transform: uppercase;
          font-size: .9rem;
          opacity: .7;
          cursor: pointer;
          transition: .2s;
          @media (max-width: 400px) {
            font-size: .8rem;
          }
          &:hover{
            opacity: 1;
          }

        }
      }
    }
  }
`