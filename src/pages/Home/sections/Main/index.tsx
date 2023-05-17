import Input from "the-mask-input"
import * as S from "./styles"
import Select from "./components/Select"


const Main = () => {
  return (
    <S.Main>
      <div className="content">
        <main>
          <h1>Tenha um comércio eletrônico de <span className="mark-gold">excelência<i className='bx bxs-crown'></i></span></h1>
          <p>Transforme sua loja em um <strong>e-commerce</strong> de sucesso com a ajuda da nossa <strong>legião de profissionais</strong>.</p>
          <ul>
            <li>
              <div className="icon-description">
                <span>+</span>
                <i className='bx bxs-user'></i>
              </div>
              <small>Clientes</small>
            </li>
            <li>
              <div className="icon-description">
                <span>+</span>
                <i className='bx bxs-user'></i>
              </div>
              <small>Clientes</small>
            </li>
            <li>
              <div className="icon-description">
                <span>+</span>
                <i className='bx bxs-user'></i>
              </div>
              <small>Clientes</small>
            </li>
          </ul>
        </main>
        <form>
          <Input className="input-form" placeholder="Nome" required autoComplete="off" spellCheck={false} />
          <Input className="input-form" placeholder="Email" type="email" required />
          <Input className="input-form" mask={"(dd) ddddd-dddd"} placeholder="WhatsApp" required autoComplete="off" />
          <Select
            selectLabel="Qual o seu seguimento?"
            options={[
              {
                label: "Serviço",
                value: "service"
              },
              {
                label: "Varejo",
                value: "retail"
              },
              {
                label: "Indústria",
                value: "industry"
              },
              {
                label: "E-commerce",
                value: "e-commerce"
              },
              {
                label: "SAAS",
                value: "saas"
              },
              {
                label: "Educação",
                value: "education"
              },
              {
                label: "Outros",
                value: "others"
              },
            ]} />
          <button id="button-submit-form" type="submit">Quero transformar minha loja</button>
        </form>
      </div>
    </S.Main>
  )
}

export default Main