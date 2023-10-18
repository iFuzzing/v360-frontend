import './App.css'
import SecCompanies from './Sections/SecCompanies'
import SecForm from './Sections/SecForm'
import SecHelpYou from './Sections/SecHelpYou'
import SecHero from './Sections/SecHero'
import SecProblems from './Sections/SecProblems'
import SecSucess from './Sections/SecSucess'
import SecVideo from './Sections/SecVideo'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header></Header>
      <SecHero></SecHero>
      <SecVideo></SecVideo>
      <SecCompanies></SecCompanies>
      <SecProblems></SecProblems>
      <SecHelpYou></SecHelpYou>
      <SecSucess></SecSucess>
      <SecForm></SecForm>
      <Footer></Footer>
    </>
  )
}

export default App
