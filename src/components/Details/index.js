import './style.css'

const Details = (props) => {
   return (
    
        <>        
        <h1 className="title">{props.name}</h1>
          <div className="detail-container">
        <div className="detail-image">
        <img src={props.photo} alt=""/>
        </div>
        <div className="details">
          <h1>Dados</h1>
          <p> calorias: {props.calories}</p>
          <p> proteinas: {props.protein}</p>
          <p> carboidratos: {props.carbohydrates} </p>
          <p> Fibra: {props.fiber}</p>
          <p> Gordura: {props.blubber}</p>
          <p> Porção: {props.portion}</p>        
        </div> 
      </div> 
     
      </>
      
  )
}  
         
export default Details