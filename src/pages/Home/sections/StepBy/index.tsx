import Carousel from "./components/Carousel"
import * as S from "./styles"

const StepBy = () => {
  return (
    <S.StepBy>
      <div className="content">
        <div className="title-section">
          <h1>Etapas para <br /><span>desenvolver seu E-commerce</span></h1>
          <p>Todo o processo pensado no melhor resultado do seu e-commerce</p>
        </div>
        <Carousel items={[
          {
            title: "Especificação",
            icon: <i className='bx bxs-notepad'></i>,
            description: "Levantamento e documentação das necessidades do cliente para atender o escopo do projeto."
          },
          {
            title: "UX/UI Design",
            icon: <i className='bx bxs-pen'></i>,
            description: "Entendimento e criação da interface de um software, sistema ou mobile validando a usabilidade a essência de sua marca."
          },
          {
            title: "Planejamento",
            icon: <i className='bx bxs-objects-horizontal-left'></i>,
            description: "Preparação para iniciar a construção do projeto, estabelecendo métricas e planos que serão acompanhados ao longo do desenvolvimento."
          },
          {
            title: "Construção",
            icon: <i className='bx bxs-terminal'></i>,
            description: "Etapa onde a equipe de codificação executa as demandas utilizando métodos ágeis, que aumentam o foco e a produtividade ao longo do projeto."
          },
          {
            title: "Qualidade",
            icon: <i className='bx bxs-check-circle'></i>,
            description: "Testes integrados e automatizados, além de dupla checagem para aprovação e subida de pull requests, garantindo qualidade a seu sistema."
          },
          {
            title: "Homologação",
            icon: <i className='bx bxs-search-alt-2'></i>,
            description: "Etapa ocorre durante e ao final do desenvolvimento de todo o projeto, de forma a garantir que todos os requisitos foram validados."
          },

          {
            title: "Implantação",
            icon: <i className='bx bxs-devices'></i>,
            description: "As funcionalidades desenvolvidas e aprovadas pelo cliente na fase de homologação, serão colocados em produção efetiva."
          },
          {
            title: "Qualidade",
            icon: <i className='bx bxs-check-circle'></i>,
            description: "Testes integrados e automatizados, além de dupla checagem para aprovação e subida de pull requests, garantindo qualidade a seu sistema."
          },
          {
            title: "Homologação",
            icon: <i className='bx bxs-search-alt-2'></i>,
            description: "Etapa ocorre durante e ao final do desenvolvimento de todo o projeto, de forma a garantir que todos os requisitos foram validados."
          },
        ]} />
      </div>
    </S.StepBy>
  )
}

export default StepBy