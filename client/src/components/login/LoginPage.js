import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router'
import LoginForm from './LoginForm'

class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      redirectToReferrer: false
    }
    this.loginToApi = this.loginToApi.bind(this)
  }

  loginToApi(username, password) {
    return this.props.login(username, password)
      .then(() => this.setState({ redirectToReferrer: true }))
  }

  render() {
    const { from } = this.props.location.state || '/'
    const { redirectToReferrer } = this.state

    return (
      <div>
        {redirectToReferrer && (
          <Redirect to={from || '/'} />
        )}
        
        {this.context.auth.loggedIn ? (
          <div><h2>Você já está logado.</h2><img alt='' width='200px' src='https://3.bp.blogspot.com/-FgRdK5HNLcg/VvwBCOq-aQI/AAAAAAABAnk/G69Lu_w_n4k1XHSIbCFrMhKdZPccShcBg/s1600/455px-DK_Confused.png'></img></div>
        ) : (
          <LoginForm login={this.loginToApi} />
        )}
      </div>
    )
  };
}

LoginPage.contextTypes = {
  auth: PropTypes.object
}

LoginPage.propTypes = {
  login: PropTypes.func
}

export default LoginPage
