import Button from './Button.jsx'

function Card({ titulo, imagem, descricao, preco, categoria }) {
  return (
    <article className="card">
      <img src={imagem} alt={titulo} />
      <div className="card-corpo">
        <span className="categoria">{categoria}</span>
        <h3>{titulo}</h3>
        <p>{descricao}</p>
        <p className="preco">{preco}</p>
        <Button
          texto="Reservar"
          onClick={() => alert(`Reserva de "${titulo}" registrada!`)}
        />
      </div>
    </article>
  )
}

export default Card
