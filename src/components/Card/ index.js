import './style.css'

const Card = () => {
  return (
    <div className="card">
        <div className="image">
          <img src="http://pocs.digitalpages.com.br/mock/api/fruits-api/fruits/abacaxi.jpg" alt="abacaxi"/>
        </div>
        <div className="info">
          <h1>Abacaxi</h1>
          <p>Detalhes sobre a fruta</p>
        </div>
      </div>
  )
}

export default Card