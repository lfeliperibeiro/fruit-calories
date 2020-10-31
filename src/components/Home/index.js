import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../api'
import Card from '../Card/ index'
import Footer from '../Footer'
import Header from '../Header'
import './style.css'


const Home = () => {
  const [fruit, setFruit] = useState([])
  
  useEffect(() => {
    api.get("fruits.json")
  .then((res) => setFruit(res.data))
  .catch((err) => {
    console.error(err);
  });
  }, [])     
  
  return (
    <>
   <Header />
    <div className="title">
      <h1>Frutas</h1>
    </div>
    <div className="fruitContainer">
      
        { fruit.map(fruit => {
        return (
         <Link className="link-home" to='/fruit'>
          <Card 
            key={fruit.name}
            name={fruit.name}
            image={fruit.photo}
            alt={fruit.name}
          /> 
        </Link>      
        )
      })}         
    </div>
    <Footer />
    </>
   )   
  }

  export default Home


