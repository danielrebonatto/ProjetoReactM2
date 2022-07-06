import React from 'react'
import PropTypes from 'prop-types'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loginFailed: false,
      fields: {
        username: '',
        password: ''
      }
    }
    this.onInputChange = this.onInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onInputChange(event) {
    const fields = this.state.fields
    fields[event.target.name] = event.target.value
    this.setState({ fields })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.login(this.state.fields.username, this.state.fields.password)
      .catch(err => {
        console.log(err)
        this.loginFailed()
      })
  }

  loginFailed() {
    this.setState({
      loginFailed: true,
      fields: {
        username: '',
        password: ''
      }
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Usuario:<br />
          <input className='input-login' onChange={this.onInputChange} placeholder='Usuario' name='username' value={this.state.fields.username} type='text' />
          Senha:<br />
          <input className='input-login' onChange={this.onInputChange} placeholder='Senha' name='password' value={this.state.fields.password} type='password' />
          <input className='button' type='submit' value='Login' />
        </form>

        {this.state.loginFailed && <div><img width='200px' src='https://lojasaraiva.vteximg.com.br/arquivos/ids/228127/1002532925.jpg?v=636965983173130000'></img> <h3>Usuario ou senha incorretos, verifique e tente novamente.</h3></div>}

        <h4>Usuarios para exemplo</h4>
        <ul>
          <li>Convidado:  convidado/convidado</li>
          <li>Admin: mestre/dosmagos</li>
        </ul>
      </div>
    )
  };
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
}

export default LoginForm
