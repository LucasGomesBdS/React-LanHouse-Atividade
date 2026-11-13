import { useNavigate } from 'react-router-dom'
import Button from '../components/Button.jsx'

function Home() {
  const navigate = useNavigate()

  return (
    <section className="hero">
      <h1>Lan House Web</h1>
      <p>
        Sistema para organizar os computadores, consoles e pacotes de horas da
        sua lan house em um só lugar.
      </p>
      <Button texto="Ver máquinas" onClick={() => navigate('/produtos')} />
    </section>
  )
}

export default Home
