import logoCorre from '../assets/logo-corre.png'

function Login({ onLogin }) {
  return (
    <main className="login-page">
      <section className="login-container">
        <img
          src={logoCorre}
          alt="Logo Corre"
          className="login-logo"
        />

        <form className="login-form">
          <input
            type="email"
            placeholder="Digite seu e-mail"
          />

          <input
            type="password"
            placeholder="Digite sua senha"
          />

          <button type="button" onClick={onLogin}>
            Entrar
          </button>
        </form>
      </section>
    </main>
  )
}

export default Login