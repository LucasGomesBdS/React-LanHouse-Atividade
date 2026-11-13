function Button({ texto, onClick, type = 'button' }) {
  return (
    <button className="botao" type={type} onClick={onClick}>
      {texto}
    </button>
  )
}

export default Button
