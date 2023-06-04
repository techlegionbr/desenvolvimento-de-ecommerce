
import * as S from "./styles"
import imageLion from "../../../../assets/images/Logo_Tech_Legion_H_02_Blue.png"

const Header = () => {
  return (
    <S.Header>
      <div className="content">
        <img className="logo" src={imageLion} width={170} />
        <a href="#faq-section" id="button-info">
          <i className='bx bxs-info-circle'></i>
        </a>
      </div>
    </S.Header>
  )
}

export default Header