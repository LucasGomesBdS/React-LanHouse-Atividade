import Button from '../components/Button.jsx'

function Contato() {
  function enviar(evento) {
    evento.preventDefault()
    alert('Mensagem enviada!')
    evento.target.reset()
  }

  return (
    <section className="texto">
      <h1>Contato</h1>
      <form className="formulario" onSubmit={enviar}>
        <label htmlFor="nome">Nome</label>
        <input id="nome" type="text" placeholder="Seu nome" required />

        <label htmlFor="email">E-mail</label>
        <input id="email" type="email" placeholder="seu@email.com" required />

        <label htmlFor="mensagem">Mensagem</label>
        <textarea id="mensagem" rows="5" placeholder="Escreva sua mensagem" required />

        <Button texto="Enviar mensagem" type="submit" />
      </form>
    </section>
  )
}

export default Contato
