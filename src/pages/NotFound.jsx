import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="texto">
      <h1>Página não encontrada (404)</h1>
      <p>O endereço que você acessou não existe.</p>
      <Link to="/">Voltar ao início</Link>
    </section>
  )
}

export default NotFound
