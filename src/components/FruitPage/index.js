import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import './style.css'
import api from "../../api"
import Details from "../Details"
import Footer from '../Footer'
import Header from '../Header'

const FruitPage = () => {
  let { id }  = useParams()
   
  const [fruit, setFruit] = useState([])
  

  useEffect(() => {
    api.get("fruits.json")
  .then((res) => setFruit(res.data[id]))
  .catch((err) => {
    console.error(err);
  });
  }, [id])     
  
  return (
    <>
    <Header/>
    <div className="title-detail">
       <Link className="back" to="/">
        ⬅ Voltar
      </Link>
      </div>  
     
        <Details        
        name={fruit.name}
        photo={fruit.photo}
        calories={fruit.calories}
        protein={fruit.protein}
        carbohydrates={fruit.carbohydrates}
        fiber={fruit.fiber}
        blubber={fruit.blubber}
        portion={fruit.portion}
        />    
      
    <Footer/>
    </>
  )
}

export default FruitPage