import Carousel from "./components/Carousel"
import * as S from "./styles"

const Technologies = () => {
  return (
    <S.Techologies>
      <div className="content">
        <div className="title-section">
          <h1>Ferramentas incríveis para criar um <br /> <span>e-commerce único</span></h1>
          <p>No desenvolvimento do nosso <strong>serviço de e-commerce</strong>, utilizamos uma variedade de <strong>tecnologias modernas</strong> para garantir uma experiência de compra segura, rápida e intuitiva.</p>
        </div>
        <ul className="carousel-list">
          <Carousel
            label={{
              icon: <i className='bx bxs-basket'></i>,
              text: <span>Plataformas de <br /> E-Commerce</span>
            }}
            items={[
              {
                icon: <i className='bx bxl-shopify'></i>,
                description: "O Shopify é a plataforma de comércio eletrônico líder no mercado, conhecida por sua facilidade de uso e recursos poderosos. Com uma interface intuitiva e personalizável.",
                technologie: "shopify"
              },
              {
                icon: <i className='bx bxl-wordpress'></i>,
                description: "Transforme sua loja virtual em um sucesso com o WooCommerce! Uma poderosa plataforma de comércio eletrônico que oferece flexibilidade, simplicidade e resultados surpreendentes!",
                technologie: "WooCommerce"
              },
              {
                icon: <i className='bx bxl-magento' ></i>,
                description: "A plataforma poderosa e flexível para seu ecommerce. Crie uma loja online incrível, personalizada e de alto desempenho. Conquiste seus clientes e impulsione suas vendas!",
                technologie: "Magento"
              }
            ]} />
          <Carousel
            label={{
              icon: <i className='bx bxs-basket'></i>,
              text: <span>Integração com <br />sistemas de pagamento</span>
            }}
            items={[
              {
                icon: <i className='bx bxl-paypal'></i>,
                description: "Integre o PayPal ao seu ecommerce e ofereça pagamentos rápidos, seguros e confiáveis. Amplie suas vendas e conquiste a confiança dos seus clientes!",
                technologie: "paypal"
              },
              {
                icon: <i className='bx bxl-stripe' ></i>,
                description: "Experimente o poder do Stripe: Pagamentos online seguros, rápidos e confiáveis para impulsionar seu e-commerce. Aumente suas vendas agora!",
                technologie: "Stripe"
              },
              {
                icon: <i className='bx bxs-wallet'></i>,
                description: "Potencialize seus negócios online com o PagSeguro, a solução de pagamento mais segura e eficiente. Simplifique suas transações e garanta a confiança dos seus clientes. Contrate agora e venda mais!",
                technologie: "PagSeguro"
              }
            ]} />
          <Carousel
            label={{
              icon: <i className='bx bxs-basket'></i>,
              text: <span>Plataformas de <br /> E-Commerce</span>
            }}
            items={[
              {
                icon: <i className='bx bxl-javascript'></i>,
                description: "JavaScript descrição",
                technologie: "JavaScript"
              },
              {
                icon: <i className='bx bxl-javascript'></i>,
                description: "JavaScript descrição",
                technologie: "JavaScript"
              },
              {
                icon: <i className='bx bxl-javascript'></i>,
                description: "JavaScript descrição",
                technologie: "JavaScript"
              }
            ]} />
        </ul>
      </div>
    </S.Techologies>
  )
}


export default Technologies