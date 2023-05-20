import { styled } from "styled-components";
import { sectionBackgroundColors } from "../../vars";
import { colors, sizings } from "../../../../styles/vars";



export const SocialImpact = styled.div`
  background-color: ${sectionBackgroundColors.socialInpact};
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: ${sizings.padding_section};
  border-top: 1.4px solid #ffffff1c;
  @media (max-width: 1300px) {
    padding: 100px 0;
  }
  .content{
    width: ${sizings.content};
    @media (max-width: 1300px) {
      width: 100%;
    }
    .title-section{
      padding: 0 2rem;
    }
    .banner-direct-left{
      justify-content: flex-start;
      text-align: start;
      @media (max-width: 1000px) {
        flex-direction: column;
      }
      .image-banner{
        border-top-right-radius: 200px;
        border-bottom-right-radius: 200px;
      }
    }
    .banner-direct-right{
      justify-content: flex-end;
      text-align: end;
      @media (max-width: 1000px) {
        flex-direction: column-reverse;
      }
      .image-banner{
        border-top-left-radius: 200px;
        border-bottom-left-radius: 200px;
      }
    }
    .banner-social{
      display: flex;
      width: 100%;
      height: 250px;
      margin-top: 4rem;
      align-items: center;
      justify-content: space-between;
      @media (max-width: 1000px) {
        height: auto;
      }
      .image-banner{
        width: 40%;
        height: 100%;
        overflow: hidden;
        @media (max-width: 1300px) {
          width: 50%;
        }
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
      .description{
        width: 60%;
        padding: 0 2rem;
        @media (max-width: 1300px) {
          width: 50%;
        }
        @media (max-width: 1000px) {
          width: 100%;
          height: 60%;
          padding: 2rem 2rem;
        }
        .title-description{
          display: inline-flex;
          align-items: center;
          margin-bottom: 1rem;
          gap: .4rem;
          i{
            color: ${colors.third};
            font-size: 2.3rem;
            display: none;
          }
          h2{
            text-transform: uppercase;
            span{
              color: ${colors.third}
            }
          }
        }
        p{
          color: ${colors.light_weak_text};
          line-height: 1.2rem;
          margin-bottom: .6rem;
          a{
            color: ${colors.third};
            font-weight: bold;
          }
        }
      }
    }
  }
`