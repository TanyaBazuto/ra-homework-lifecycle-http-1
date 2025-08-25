import { Component } from 'react'
import PropTypes from 'prop-types';
import '../App.css'

export default class Clock extends Component {
  constructor(props) {
    super(props)
    this.title = props.title;
    this.zone = props.zone
  }
  
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(new Date())
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getTime(zone) {
    const date = new Date(new Date().getTime() + zone * 3600000);
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  }

  render() {
    return (
      <div className='clock'>
        <div className='title'>{this.title}</div>
        <div className='time'>{this.getTime(this.zone)}</div>
        {this.props.children}
      </div>
    )
  }
}

Clock.propTypes = {
  title: PropTypes.string.isRequired,
  zone: PropTypes.number.isRequired,
  children: PropTypes.array.isRequired,
};