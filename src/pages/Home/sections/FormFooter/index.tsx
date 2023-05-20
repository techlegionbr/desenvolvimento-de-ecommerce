import * as S from "./styles"
import imageFormSup from "../../../../assets/images/textura-de-parede-com-detalhes-em-branc.webp"
import Input from "../../../../components/Input"
import Select from "../../../../components/Select"

const FormFooter = () => {
  return (
    <S.FormFooter>
      <div className="content">
        <div className="image-sup">
          <img src={imageFormSup} />
        </div>
        <div className="legend-form">
          <div className="title-form-footer">
            <i className='bx bxs-megaphone'></i>
            <div className="title-text">
              <h1>Vamos fazer o seu <span>{"Ecommerce?"}</span></h1>
              <p>Preencha esse formulario preencha esse formulario</p>
            </div>
          </div>
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
            <button id="button-form-footer">Quero transformar minha loja</button>
          </form>
        </div>
      </div>
    </S.FormFooter>
  )
}


export default FormFooter