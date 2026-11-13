import Card from '../components/Card.jsx'

// Para adicionar um novo Card, basta incluir um objeto neste array
const produtos = [
  {
    id: 1,
    titulo: 'PC Gamer Básico',
    imagem: '/img/pc-basico.svg',
    descricao: 'Ideal para jogos leves e navegação. 16 GB de RAM e SSD.',
    preco: 'R$ 6,00/hora',
    categoria: 'Computador',
  },
  {
    id: 2,
    titulo: 'PC Gamer Pro',
    imagem: '/img/pc-pro.svg',
    descricao: 'Placa de vídeo dedicada e monitor de 144 Hz para jogos pesados.',
    preco: 'R$ 10,00/hora',
    categoria: 'Computador',
  },
  {
    id: 3,
    titulo: 'PC Streamer',
    imagem: '/img/pc-streamer.svg',
    descricao: 'Equipado com microfone e webcam para transmissões ao vivo.',
    preco: 'R$ 14,00/hora',
    categoria: 'Computador',
  },
  {
    id: 4,
    titulo: 'Console',
    imagem: '/img/console.svg',
    descricao: 'Console com TV de 50 polegadas e dois controles.',
    preco: 'R$ 12,00/hora',
    categoria: 'Console',
  },
  {
    id: 5,
    titulo: 'Sala VIP',
    imagem: '/img/sala-vip.svg',
    descricao: 'Sala reservada com ar-condicionado para até 5 jogadores.',
    preco: 'R$ 45,00/hora',
    categoria: 'Espaço',
  },
  {
    id: 6,
    titulo: 'Pacote 10 horas',
    imagem: '/img/pacote.svg',
    descricao: 'Dez horas em qualquer computador comum, válidas por 30 dias.',
    preco: 'R$ 50,00',
    categoria: 'Pacote',
  },
]

function Produtos() {
  return (
    <section>
      <h1>Nossos produtos</h1>
      <div className="grade">
        {produtos.map((item) => (
          <Card
            key={item.id}
            titulo={item.titulo}
            imagem={item.imagem}
            descricao={item.descricao}
            preco={item.preco}
            categoria={item.categoria}
          />
        ))}
      </div>
    </section>
  )
}

export default Produtos
