import { Component } from 'react'
import '../App.css'
import PropTypes from 'prop-types';


export default class Form extends Component {
  timeForm = {title: '', zone: ''}
  state = this.timeForm;

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.zone < -12 || this.state.zone > 12 || this.state.title.length > 12) return
    this.props.addClock(this.state);
    this.setState(this.timeForm);
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  clearForm = () => {
    this.setState(this.timeForm)
  }

  render() {
    return (
      <>
      <div className='container'>
      <form className='form' onSubmit={this.handleSubmit}>
        <div className='capital_form'>
          <label className='label_form'>Название</label>
          <input           
            className='input_form'
            type='text'
            name='title'
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Название города"
            required
          />
        </div>
        <div className='timezone_form'>
          <label className='label_form'>Временная зона</label>
          <input           
            className='input_form'
            type='number'
            name='zone'
            value={this.state.zone}
            onChange={this.handleChange}
            placeholder="от -12 до +12"
            required
          />
        </div>
        <div className="button_add">
          <button>Добавить</button>
        </div>
      </form>
      </div>
      </>
    )
  }
}

Form.propTypes = {
  title: PropTypes.string.isRequired,
  zone: PropTypes.number.isRequired,
  addClock: PropTypes.func.isRequired,
};