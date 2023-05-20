import * as S from "./styles"

import imgDesignResponsivo from "../../../../assets/images/pessoa-que-paga-com-seu-aplicativo-de-carteira-para-smartphone.webp"
import imgDesignCartPay from "../../../../assets/images/maos-trabalhando-no-laptop-e-segurando-um-cartao-no-chao.webp"
import imgPaymantVariant from "../../../../assets/images/jovem-empresario-negro-usando-cartao-de-credito-e-telefone-inteligente-enquanto-fazia-compras-online.webp"
import imgAvaliationClient from "../../../../assets/images/colagem-do-conceito-de-experiencia-do-cliente.webp"
import imgSearchAvanced from "../../../../assets/images/mao-tocando-com-o-icone-de-pesquisa-para-search-engine-optimization-ou-conceito-de-seo-para-encontra.webp"
import imgDesconto from "../../../../assets/images/retrato-mulher-feliz-olhando-para-mini-presente.webp"

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
            icon={<i className='bx bxs-devices'></i>}
            image={imgDesignResponsivo}
            title={<h4>Design <span>atraente<br /> e responsivo</span></h4>}
            description="O serviço de desenvolvimento de e-commerce deve oferecer design moderno, limpo e responsivo, adaptável a smartphones, tablets e computadores. Garanta experiência de compra agradável e consistente em todos os dispositivos."
            redirect="/"
          />
          <Card
            icon={<i className='bx bxs-cart-alt' ></i>}
            image={imgDesignCartPay}
            title={<h4>Carrinho de <br /><span>compras intuitivo</span></h4>}
            redirect="/"
            description="Otimizar o carrinho de compras para facilidade e intuição dos clientes é crucial. Permita adicionar/remover itens, ver resumo do pedido e aplicar cupons. Um processo de compra simples e conveniente aumenta a chance de finalização de transações."
          />
          <Card
            icon={<i className='bx bxs-credit-card-alt'></i>}
            image={imgPaymantVariant}
            title={<h4>Opções de <br /><span>pagamento variadas</span></h4>}
            redirect="/"
            description="Ofereça diversas opções de pagamento: cartões de crédito, PayPal, transferência bancária e carteiras digitais. Mais flexibilidade resulta em maior chance de conclusão da compra pelo cliente."
          />
          <Card
            icon={<i className='bx bxs-message'></i>}
            image={imgAvaliationClient}
            title={<h4>Feedback <br /> <span> dos clientes</span></h4>}
            redirect="/"
            description="Adicione avaliações e comentários de clientes aos produtos para construir confiança e credibilidade. Potenciais clientes poderão ler as experiências de outros compradores, promovendo uma decisão de compra informada."
          />
          <Card
            icon={<i className='bx bxs-search-alt-2' ></i>}
            image={imgSearchAvanced}
            title={<h4>Recursos de <br /> <span>busca avançada</span></h4>}
            redirect="/"
            description="Implemente uma pesquisa avançada que permita aos clientes filtrar produtos com base em categorias, preço, marca ou outros critérios relevantes. Isso torna mais fácil para os clientes encontrarem exatamente o que estão procurando e aumenta a satisfação do usuário."
          />
          <Card
            icon={<i className='bx bxs-offer'></i>}
            image={imgDesconto}
            title={<h4>Programa de <span><br /> descontos exclusivos</span></h4>}
            redirect="/"
            description="Crie um programa de fidelidade que recompense os clientes frequentes com descontos exclusivos, promoções especiais ou pontos que possam ser trocados por recompensas. Isso incentiva a fidelidade do cliente e o retorno às compras em sua loja virtual."
          />
        </ul>
      </div>
    </S.Benefits>
  )
}

export default Benefits