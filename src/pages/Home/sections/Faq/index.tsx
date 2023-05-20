import * as S from "./styles"


import imageFaq from "../../../../assets/images/top-view-multiedhnic-team-working-computers_19_11zon.webp"
import Accordions from "./components/Accordions"



const Faq = () => {

  return (
    <S.Faq id="faq-section">
      <div className="content">
        <div className="title-section">
          <h1> Perguntas Frequentes sobre <br /><span>Desenvolvimento de E-commerce</span></h1>
          <p>Respostas para as suas <strong>dúvidas mais comuns</strong> antes de contratar nossos serviços</p>
        </div>
        <div className="faq-container">
          <Accordions
            accordions={[
              {
                question: "Quais são os benefícios de contratar um serviço de desenvolvimento de ecommerce?",
                response: "Ao contratar um serviço de desenvolvimento de e-commerce, você pode se beneficiar de profissionais especializados que têm experiência em projetar e construir lojas online eficientes e atraentes. Isso pode economizar tempo e esforço, garantindo que sua loja seja configurada corretamente desde o início. Além disso, um bom serviço de desenvolvimento de e-commerce."
              },
              {
                question: "Quanto tempo leva para desenvolver um ecommerce?",
                response: "O tempo necessário para desenvolver um e-commerce pode variar dependendo da complexidade do projeto. Projetos mais simples podem levar algumas semanas, enquanto projetos mais complexos podem levar vários meses. É importante discutir os requisitos específicos do seu projeto com a equipe de desenvolvimento para obter uma estimativa mais precisa."
              },
              {
                question: "Quanto custa o desenvolvimento de um ecommerce?",
                response: "O custo do desenvolvimento de um e-commerce também depende de vários fatores, como a funcionalidade desejada, o design personalizado, a integração com sistemas de pagamento e outras necessidades específicas do seu negócio. É melhor entrar em contato com empresas de desenvolvimento de e-commerce para discutir seus requisitos e obter orçamentos personalizados."
              },
              {
                question: "Posso atualizar e gerenciar meu ecommerce após o lançamento?",
                response: "Sim, a maioria dos serviços de desenvolvimento de e-commerce oferece opções para que você atualize e gerencie sua loja online depois que ela for lançada. Geralmente, você receberá um painel de administração intuitivo que permite adicionar e atualizar produtos, controlar estoque, gerenciar pedidos e realizar outras tarefas relacionadas à manutenção do seu e-commerce."
              },
              {
                question: "O serviço de desenvolvimento de ecommerce inclui suporte técnico?",
                response: "Sim, muitas empresas de desenvolvimento de e-commerce oferecem suporte técnico para ajudar a resolver quaisquer problemas ou responder a perguntas relacionadas à sua loja online. O suporte técnico pode variar de acordo com a empresa, então é importante esclarecer os detalhes sobre o suporte oferecido antes de contratar um serviço de desenvolvimento de e-commerce."
              }
            ]}
          />
          <div className="image-faq">
            <img src={imageFaq} />
          </div>
        </div>
      </div>
    </S.Faq>
  )
}

export default Faq