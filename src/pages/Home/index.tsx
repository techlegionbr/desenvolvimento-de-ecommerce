import Benefits from "./sections/Benefits"
import Faq from "./sections/Faq"
import Footer from "./sections/Footer"
import FormFooter from "./sections/FormFooter"
import Header from "./sections/Header"
import Main from "./sections/Main"
import SocialImpact from "./sections/SocialImpact"
import StepBy from "./sections/StepBy"
import Technologies from "./sections/Technologies"


const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <Benefits />
      <Technologies />
      <StepBy />
      <SocialImpact />
      <Faq />
      <FormFooter />
      <Footer />
    </>
  )
}

export default Home