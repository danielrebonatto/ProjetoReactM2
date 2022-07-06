import React from 'react'
import PropTypes from 'prop-types'

const SignOutButton = ({ logout }, context) => (
  context.auth.loggedIn ? (
    <button className='button' onClick={() => {
      logout().then(() => context.router.transitionTo('/'))
    }}>Sair</button>
  ) : null
)

SignOutButton.contextTypes = {
  router: PropTypes.object,
  auth: PropTypes.object
}

SignOutButton.propTypes = {
  logout: PropTypes.func.isRequired
}

export default SignOutButton
