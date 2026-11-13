import { Link } from 'react-router-dom'

// Para criar uma nova rota no menu, basta adicionar uma linha aqui
const links = [
  { to: '/', texto: 'Início' },
  { to: '/produtos', texto: 'Produtos' },
  { to: '/sobre', texto: 'Sobre' },
  { to: '/contato', texto: 'Contato' },
]

function Menu() {
  return (
    <nav className="menu">
      {links.map((link) => (
        <Link key={link.to} to={link.to}>
          {link.texto}
        </Link>
      ))}
    </nav>
  )
}

export default Menu
