import * as S from "./styles"
import imageSocial01 from "../../../../assets/images/two-happy-coworkers-working-computer_2_11zon.webp"
import imageSocial02 from "../../../../assets/images/mesa-developer-interessados-ambiente_9_11zon.webp"
import imageSocial03 from "../../../../assets/images/multiethinics-technologie_13_11zon.webp"

const SocialImpact = () => {
  return (
    <S.SocialImpact>
      <div className="content">
        <div className="title-section">
          <h1>Impacto Social <span>positivo</span></h1>
          <p>Potencializando <strong>talentos</strong> e transformando <strong>vidas</strong> através da <strong>tecnologia</strong></p>
        </div>
        <div className="banner-social banner-direct-left">
          <div className="image-banner">
            <img src={imageSocial01} />
          </div>
          <div className="description">
            <div className="title-description">
              <i className='bx bxs-pyramid'></i>
              <h2><span>Impacto social e econômico positivo</span><br /> através da Tech Legion</h2>
            </div>
            <p>
              Ao escolher a <strong>Tech Legion</strong>, nossos clientes não estão apenas contratando <strong>serviços sob demanda</strong> na
              área da tecnologia, mas também estão contribuindo no <strong>desenvolvimento de profissionais em início de carreira</strong>.
            </p>
            <p>
              Isso ocorre porque a Tech Legion é composta por uma legião de <strong>profissionais apaixonados por tecnologia</strong>, que estão cheios de energia
              e motivação.
            </p>
          </div>
        </div>
        <div className="banner-social banner-direct-right">
          <div className="description">
            <div className="title-description">
              <h2><span>A legião</span> por trás dos serviços<br />juntos em um único propósito</h2>
              <i className='bx bxs-shield-alt-2'></i>
            </div>
            <p>A <strong>Tech Legion</strong>: uma <strong>legião de profissionais apaixonados por tecnologia</strong>, unidos para <strong>impactar vidas</strong>. Nossa comunidade
              Primeiravaga.Tech é repleta de talentos enérgicos e motivados.</p>
          </div>
          <div className="image-banner">
            <img src={imageSocial02} />
          </div>
        </div>
        <div className="banner-social banner-direct-left">
          <div className="image-banner">
            <img src={imageSocial03} />
          </div>
          <div className="description">
            <div className="title-description">
              <i className='bx bxs-briefcase'></i>
              <h2>Construindo um futuro <br /> melhor para <span>todos</span></h2>
            </div>
            <p>A Tech Legion oferece serviços de tecnologia e promove um futuro melhor através de sua comunidade de talentos em início de carreira.
              Ao proporcionar oportunidades práticas e ajudar esses talentos a construírem uma base sólida na área, a empresa capacita-os a se destacar
              e alcançar o sucesso.</p>
          </div>
        </div>
      </div>
    </S.SocialImpact>
  )
}

export default SocialImpact