import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import api from "../../api"
import Details from "../Details"

import './style.css'
const { default: Footer } = require("../Footer")
const { default: Header } = require("../Header")

const FruitPage = () => {
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
    <Header/>
    <div className="title-detail">
       <Link to="/">
        ⬅ Voltar
      </Link>
      </div>
    { fruit.map((fruit, index) => {
      return (
        <Details 
        key={index}
        name={fruit.name}
        photo={fruit.photo}
        calories={fruit.calories}
        protein={fruit.protein}
        carbohydrates={fruit.carbohydrates}
        fiber={fruit.fiber}
        blubber={fruit.blubber}
        portion={fruit.portion}
        />
      
        )
      }
    )
  }         
      
      
    <Footer/>
    </>
  )
}

export default FruitPage