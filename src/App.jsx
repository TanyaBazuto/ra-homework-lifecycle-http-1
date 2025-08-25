import './App.css'
import { Component } from 'react'
import Form from './WorldTime/Form';
import { nanoid } from 'nanoid';
import Clock from './WorldTime/Clock';
import PropTypes from 'prop-types';

export default class App extends Component {

  state = {clocks: []}
   
  addClock = ({ title, zone }) => {
    this.setState((prevState) => ({
      clocks: [...prevState.clocks, { id: nanoid(), title, zone }],
    }));
  }

  deleteClock = (id) => {
    return() => {
      this.setState((prevState) => ({
        clocks: prevState.clocks.filter((clock) => clock.id !== id),
      }));
    }
  }

  render() {
    return (
      <div className='wrapper'>
        <Form addClock={this.addClock}/>
        <div className='clock-wrapper'>
          {this.state.clocks.map((clock) => (
            <Clock
              key={clock.id}
              title={clock.title}
              zone={clock.zone}
              > 
                <button 
                  className='clock_delete_btn'
                  onClick={this.deleteClock(clock.id)}
                  >
                    Удалить
                </button>
            </Clock>  
          ))}
        </div>
      </div>
    )
  }
}

App.propTypes = {
  addClock: PropTypes.func.isRequired,
};
