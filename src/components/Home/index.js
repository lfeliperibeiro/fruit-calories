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
      <Card />      
      <Card />      
      <Card />      
      <Card />      
    </div>
    </>
   
  )
}

export default Home