import './style.css'

const Card = (props) => {
  return (
    <div className="card">
        <div className="image">
          <img src={props.image} alt={props.alt}/>
        </div>
        <div className="info">
          <h1>{props.name}</h1>
          <p>Detalhes sobre a fruta</p>
        </div>
      </div>
  )
}

export default Card