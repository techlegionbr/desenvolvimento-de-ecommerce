import * as S from "../styles"

type PropsCard = {
  image: string,
  icon: React.ReactNode,
  title: React.ReactNode,
  description: string,
  redirect: string
}

const Card = ({ image, icon, title, description, redirect }: PropsCard) => {
  return (
    <S.Card>
      <div className="title-card">
        {icon}
        {title}
      </div>
      <div className="image-card">
        <img src={image} width={300} height={400} />
        <div className="description-service">
          <p>{description}</p>
          <a href={redirect}>Saiba mais</a>
        </div>
      </div>
    </S.Card>
  )
}


export default Card