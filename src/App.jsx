
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Principal } from './components/Principal'
import { Faqs } from './components/Faqs'
import {dataFaqs,dataQuestionComponent,imgUrl1,carouselData,colors}  from './mocks/listOfFaqs.js'
import { Benefits } from './components/Benefits.jsx'
import { QuestionComponent } from './components/QuestionComponent.jsx'
import { styled } from '@mui/material'
import { Second } from './components/Second.jsx'
// import { imgUrl1,imgUrl2,imgUrl3,imgUrl4} from '../mocks/listOfFaqs';

const Container = styled('div')({color:colors.fontColor,fontSize:'1em' ,margin:'0 auto',display:'flex',flexDirection:'column',gap:'3em',marginTop:'2em',width:'95%'})

function App() {

  return (
    <>
      <Header/>
      <Principal/>
      <Container>
        <QuestionComponent data={{...dataQuestionComponent[0], imgUrl: imgUrl1}}/>
        <Benefits carouselData={carouselData}/>
        <QuestionComponent data={{...dataQuestionComponent[1], imgUrl: imgUrl1}}/>
        <QuestionComponent data={{...dataQuestionComponent[2], imgUrl: imgUrl1}}/>
        <Faqs listOfFaqs={dataFaqs}/>
      </Container> 
      <Second/>
      <Footer/>
    </>
  )
}

export default App
