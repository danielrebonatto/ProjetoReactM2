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
        <form className='form-line' onSubmit={this.handleSubmit}>
          Novo jogo:<br />
          <input className='form-input' onChange={this.onInputChange} placeholder='Nome' name='name' value={this.state.fields.name} type='text' />
          <input className='button adicionar' type='submit' value='Adicionar' />
        </form>
      </div>
    )
  }
}

export default AddGameForm
