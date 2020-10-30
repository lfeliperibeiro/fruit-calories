import { Link } from "react-router-dom"

import './style.css'
const { default: Footer } = require("../Footer")
const { default: Header } = require("../Header")

const Details = () => {
  return (
    <>
    <Header/>
    <div className="title-detail">
       <Link to="/">
        ⬅ Voltar
      </Link>
      <h1>Abacaxi</h1>

    </div>
      
      <div className="detail-container">
        <div className="detail-image">
        <img src="http://pocs.digitalpages.com.br/mock/api/fruits-api/fruits/abacaxi.jpg" alt=""/>
        </div>
        <div className="details">
          <h1>Dados</h1>
          <p> calorias: 48</p>
          <p> proteinas: 0,54 g</p>
          <p> carboidratos :12,63 g</p>
          <p> Fibra: 1,4 g</p>
          <p> Gordura: 0,12 g</p>
          <p> Porção: 1,2 fatias</p>        
        </div> 
      </div> 
    
    <Footer/>
    </>
  )
}

export default Details