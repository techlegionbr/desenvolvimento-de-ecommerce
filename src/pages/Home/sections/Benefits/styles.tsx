import { styled } from "styled-components";
import { sectionBackgroundColors } from "../../vars";
import { colors, sizings } from "../../../../styles/vars";



export const Benefits = styled.div`
  background-color: ${sectionBackgroundColors.benefits};
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: ${sizings.padding_section};
  border-top: 1.4px solid #ffffff1c;

  @media (max-width: 1300px) { min-height: 100vh; }
  .content{
    width: ${sizings.content};
    text-align: center;
    .card-list{
      margin-top: ${sizings.spacing_top_title_section};
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
  }
`

export const Card = styled.li`
        width: 100%;
        height: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        
        .title-card{
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 1rem;
          i{
            font-size: 2rem;
          }
          h4{
            text-align: start;
            font-size: 1.2rem;
            text-transform: uppercase;
            line-height: 1.2rem;
            span{
              color: ${colors.third}
            }
          }
        }
        .image-card{
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: .8rem;
          position: relative;
          cursor: default;
          transition: .2s ease-in-out;
          border: 1.5px solid ${colors.light_weak_border};
          
          &:hover{
            .description-service{
              transform: translateX(0%);
              opacity: 1;
            }
            img{
              transform: scale(1.2);
            }
          }
          img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: .2s ease-out;
          }
          .description-service{
            width: 100%;
            height: 100%;
            position: absolute;
            background-color: #08357dce;
            top: 0;
            bottom: 0rem;
            padding: 2rem 1rem;
            transition: .3s;
            opacity: 0;
            transform: translateX(-100%);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            p{
              font-size: 1.1rem;
              font-weight: bold;
              text-align: start;
              color: #ffffffec;
            }
            a{
              display: inline-block;
              color: ${colors.light};
              background-color: ${colors.secondary};
              padding: .5rem 0;
              font-weight: bold;
              border-radius: .5rem;
              width: 100%;
              cursor: pointer;
              opacity: .7;
              transition: .2s;
              &:hover{
                opacity: 1;
              }
            }
          }
        }
`