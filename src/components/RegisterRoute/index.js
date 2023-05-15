import {Component} from 'react'

import Context from '../Context'
import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class RegisterRoute extends Component {
  state = {
    input: '',
    topic: topicsList[0].id,
  }

  onChangeInput = event => {
    this.setState({
      input: event.target.value,
    })
  }

  onChangeTopic = event => {
    this.setState({
      topic: event.target.value,
    })
  }

  render() {
    const {input, topic} = this.state
    return (
      <Context.Consumer>
        {value => {
          const {onChangeInput, onChangeTopic, onChangeStatus} = value
          const submitUserDetails = () => {
            if (input.length > 0) {
              onChangeInput(input)
              onChangeTopic(topic)
              onChangeStatus()
              const {history} = this.props
              history.replace('/')
            }
          }

          const FindLength = input.length < 1

          return (
            <div className="register-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                alt="website logo"
                className="logo"
              />
              <div className="container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                  className="website"
                />
                <form className="input-container" onSubmit={submitUserDetails}>
                  <h1 className="input-heading">Let us join</h1>
                  <label className="label" htmlFor="name">
                    NAME
                  </label>
                  <input
                    type="text"
                    className="input"
                    id="name"
                    onChange={this.onChangeInput}
                    value={input}
                  />
                  <label className="label" htmlFor="topic">
                    TOPICS
                  </label>
                  <select
                    className="input"
                    onChange={this.onChangeTopic}
                    value={topic}
                    id="select"
                  >
                    {topicsList.map(eachTopic => (
                      <option id={eachTopic.id} value={eachTopic.id}>
                        {eachTopic.displayText}
                      </option>
                    ))}
                  </select>
                  <button type="submit" className="button">
                    Register Now
                  </button>
                  {FindLength && (
                    <p className="err-msg">Please enter your name</p>
                  )}
                </form>
              </div>
            </div>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default RegisterRoute
