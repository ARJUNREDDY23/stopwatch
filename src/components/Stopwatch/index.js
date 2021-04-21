// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {min: 0, count: 0}

  tick = () => {
    const {count} = this.state
    if (count === 60) {
      this.setState(prevState => ({min: prevState.min + 1, count: 0}))
    } else {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
  }

  onStart = () => {
    this.timerId = setInterval(this.tick, 1000)
  }

  onStop = () => {
    clearInterval(this.timerId)
  }

  onReset = () => {
    clearInterval(this.timerId)
    this.setState({count: 0})
  }

  render() {
    const {count} = this.state
    const {min} = this.state
    const minutes = min >= 10 ? `${min}` : `0${min}`
    const seconds = count >= 10 ? `${count}` : `0${count}`

    return (
      <div className="main-container">
        <div className="normal-container">
          <h1 className="main-heading">Stopwatch</h1>
          <div className="timer-card">
            <div className="avatar-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="clock"
                className="clock-image"
              />
              <p>Timer</p>
            </div>
            <h1 testId="timer">
              {minutes}:{seconds}
            </h1>
            <div className="buttons-container">
              <button
                className="start-btn"
                onClick={this.onStart}
                type="button"
              >
                Start
              </button>
              <button className="stop-btn" onClick={this.onStop} type="button">
                Stop
              </button>
              <button
                className="reset-btn"
                onClick={this.onReset}
                type="button"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
