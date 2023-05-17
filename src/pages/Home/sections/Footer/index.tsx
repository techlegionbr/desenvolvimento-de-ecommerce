import * as S from "./styles"
import imageLion from "../../../../assets/images/lion_blue.png"

const Footer = () => {
  return (
    <S.Footer>
      <div className="content">
        <div className="title">
          <img src={imageLion} width={50} />
          <h1>TECH <span>LEGION</span></h1>
          <p>UMA LEGIÃO AO SEU LADO</p>
        </div>
        <div className="redes">
          <h3>Nossas<br /> <strong>Redes Sociais</strong></h3>
          <ul>
            <li>
              <a
                href="/"
                title="Entre em contato pelo nosso Whatsapp"
                target="_blank"
              >
                <i className='bx bxl-whatsapp'></i>
                <h4>Nosso<br /> <strong>Whatsapp</strong></h4>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/techlegionbr"
                title="Entre em contato pelo nosso Whatsapp"
                target="_blank"
              >
                <i className='bx bxl-twitter'></i>
                <h4>Nosso<br /> <strong>Twitter</strong></h4>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/techlegionbr/"
                title="Entre em contato pelo nosso Instagram"
                target="_blank"
              >
                <i className='bx bxl-instagram' ></i>
                <h4>Nosso<br /> <strong>Instagram</strong></h4>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/techlegionbr"
                title="Entre em contato pelo nosso Facebook"
                target="_blank"
              >
                <i className='bx bxl-facebook-square' ></i>
                <h4>Nosso<br /> <strong>Facebook</strong></h4>
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@techlegionbr"
                title="Entre em contato pelo nosso TikTok"
                target="_blank"
              >
                <i className='bx bxl-tiktok' ></i>
                <h4>Nosso<br /> <strong>TikTok</strong></h4>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/techlegionbr/"
                title="Entre em contato pelo nosso Linkedin"
                target="_blank"
              >
                <i className='bx bxl-linkedin-square'></i>
                <h4>Nosso<br /> <strong>Linkedin</strong></h4>
              </a>
            </li>
          </ul>
        </div>
        <p id="rights-reserved">© Tech Legion, 2023. All Rights Reserved</p>
      </div>
    </S.Footer>
  )
}


export default Footer