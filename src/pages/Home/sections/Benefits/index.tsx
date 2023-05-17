import * as S from "./styles"

import imageCardDesign from "../../../../assets/images/card-services/homem-de-vista-lateral-trabalhando-na-mesa.jpg"
import imageCardRedesSociais from "../../../../assets/images/card-services/conceito-de-marketing-de-midia-social-para-marketing-com-aplicativos.jpg"
import imageCardLucros from "../../../../assets/images/card-services/imagem-recortada-da-mulher-que-fornece-informacoes-sobre-cartoes-e-chave-no-telefone-ou-laptop-enquanto-faz-compras-on-line.jpg"
import imageCardEstoque from "../../../../assets/images/card-services/medium-shot-woman-typing-laptop.jpg"
import Card from "./components/Card"

const Benefits = () => {
  return (
    <S.Benefits>
      <div className="content">
        <div className="title-section">
          <h1>Descubra um <span>mundo de possibilidades</span> com nosso serviço de desenvolvimento de e-commerce</h1>
          <p>Repleto de recursos e <strong>funcionalidades exclusivas</strong> que irão <strong>impulsionar o sucesso do seu <br /> negócio online</strong>.</p>
        </div>
        <ul className="card-list">
          <Card
            icon={<i className='bx bxs-palette'></i>}
            image={imageCardDesign}
            title={<h4>Design <br /><span>Personalizado</span></h4>}
            description="Transforme sua marca em uma potência online com nosso serviço de ecommerce. Personalização de design impecável para uma loja virtual única e irresistível, garantindo destaque absoluto diante da concorrência."
            redirect="/"
          />
          <Card
            icon={<i className='bx bxs-network-chart'></i>}
            image={imageCardRedesSociais}
            title={<h4>Integração com <br /><span>Redes Sociais</span></h4>}
            redirect="/"
            description="Alcance mais, venda mais. Conecte sua loja online às redes sociais mais populares. Aumente suas vendas com nossa integração perfeita entre e-commerce e Facebook, Instagram e Twitter."
          />
          <Card
            icon={<i className='bx bxs-cog'></i>}
            image={imageCardLucros}
            title={<h4>Recomendações <br /><span>Inteligentes</span></h4>}
            redirect="/"
            description="Aumente sua lucratividade com nossa solução de e-commerce! Recomendações inteligentes analisam o comportamento do cliente, fornecendo sugestões personalizadas. A satisfação aumenta, as compras extras são incentivadas e a taxa de conversão melhora. O sucesso está ao seu alcance!"
          />
          <Card
            icon={<i className='bx bxs-store'></i>}
            image={imageCardEstoque}
            title={<h4>Gestão completa <br />do <span>seu negócio</span></h4>}
            redirect="/"
            description="Controle total do seu e-commerce com facilidade! Recursos avançados simplificam a gestão do seu negócio: painel completo para gerenciar estoques, pedidos, pagamentos e envios. Apenas alguns cliques separam você de uma tarefa eficiente e poderosa."
          />
          <Card
            icon={<i className='bx bxs-store'></i>}
            image={imageCardLucros}
            title={<h4>Gestão completa <br />do <span>seu negócio</span></h4>}
            redirect="/"
            description="Aumente sua taxa de conversão com funcionalidades exclusivas para uma experiência de compra excepcional. Pagamentos seguros e convenientes, recomendações inteligentes e personalização de produtos. Potencialize suas vendas agora!"
          />
          <Card
            icon={<i className='bx bxs-store'></i>}
            image={imageCardLucros}
            title={<h4>Gestão completa <br />do <span>seu negócio</span></h4>}
            redirect="/"
            description="Aumente sua lucratividade com nossa solução de e-commerce! Recomendações inteligentes analisam o comportamento do cliente, fornecendo sugestões personalizadas. A satisfação aumenta, as compras extras são incentivadas e a taxa de conversão melhora. O sucesso está ao seu alcance!"
          />
        </ul>
      </div>
    </S.Benefits>
  )
}

export default Benefits