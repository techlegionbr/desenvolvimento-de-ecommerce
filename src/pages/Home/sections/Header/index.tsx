
import * as S from "./styles"
import imageLion from "../../../../assets/images/lion_blue.png"

const Header = () => {
  return (
    <S.Header>
      <div className="content">
        <div className="logo">
          <img src={imageLion} width={38} />
          <div className="title">
            <h1>Tech <span>Legion</span></h1>
            <p>Uma Legião ao seu lado</p>
          </div>
        </div>
        <a href="#faq-section" id="button-info">
          <i className='bx bxs-info-circle'></i>
        </a>
      </div>
    </S.Header>
  )
}

export default Header