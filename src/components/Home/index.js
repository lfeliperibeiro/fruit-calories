import Card from '../Card/ index'
import Header from '../Header'
import './style.css'

const Home = () => {
  return (
    <>
   <Header />
   <div className="title">
     <h1>Frutas</h1>
   </div>
    <div className="fruitContainer">
      <Card 
      name="Abacaxi"
      image="http://pocs.digitalpages.com.br/mock/api/fruits-api/fruits/abacaxi.jpg"
      alt="Abacaxi"
      />      
      <Card 
      name="Abacaxi"
      image="http://pocs.digitalpages.com.br/mock/api/fruits-api/fruits/abacaxi.jpg"
      alt="Abacaxi"
      />      
      <Card 
      name="Abacaxi"
      image="http://pocs.digitalpages.com.br/mock/api/fruits-api/fruits/abacaxi.jpg"
      alt="Abacaxi"
      />      
      <Card 
      name="Abacaxi"
      image="http://pocs.digitalpages.com.br/mock/api/fruits-api/fruits/abacaxi.jpg"
      alt="Abacaxi"
      />      
         
    </div>
    </>
   
  )
}

export default Home