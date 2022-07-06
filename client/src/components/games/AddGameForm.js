import React, { Component } from 'react'

class AddGameForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fields: {
        name: ''
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
    this.props.addGame({ name: this.state.fields.name })
    this.setState({
      fields: {
        name: ''
      }
    })
    event.preventDefault()
  }

  render() {
    return (
      <div className='addGameForm'>
        <form onSubmit={this.handleSubmit}>
          Novo jogo:<br />
          <input onChange={this.onInputChange} placeholder='Nome' name='name' value={this.state.fields.name} type='text' />
          <input type='submit' value='Adicionar' />
        </form>
      </div>
    )
  }
}

export default AddGameForm
