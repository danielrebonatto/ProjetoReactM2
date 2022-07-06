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
          Usuário:<br />
          <input onChange={this.onInputChange} placeholder='Seu usuário' name='username' value={this.state.fields.username} type='text' />
          Senha:<br />
          <input onChange={this.onInputChange} placeholder='Sua senha' name='password' value={this.state.fields.password} type='password' />
          <input type='submit' value='Entrar' />
        </form>

        {this.state.loginFailed && <h3>Usuário ou Senha incorretos.</h3>}

        <h4>Usuário para teste</h4>
        <ul>
          <li>Convidado:  convidado/convidado</li>
          <li>Admin: admin/password</li>
        </ul>
      </div>
    )
  };
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
}

export default LoginForm
