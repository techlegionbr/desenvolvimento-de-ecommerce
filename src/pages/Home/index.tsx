import Benefits from "./sections/Benefits"
import Faq from "./sections/Faq"
import Footer from "./sections/Footer"
import Header from "./sections/Header"
import Main from "./sections/Main"
import SocialImpact from "./sections/SocialImpact"
import Technologies from "./sections/Technologies"


const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <Benefits />
      <Technologies />
      <SocialImpact />
      <Faq />
      <Footer />
    </>
  )
}

export default Home