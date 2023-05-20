import { styled } from "styled-components";
import { colors } from "../../styles/vars";



export const Input = styled.div`
width: 100%;
        input{
          border: 1.4px solid ${colors.light_weak_border};
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

`