import {Link} from 'react-router-dom'
import Context from '../Context'
import './index.css'

const HomeRoute = () => (
  <Context.Consumer>
    {value => {
      const {inputValue, topic, textStatus} = value
      const textColor = textStatus ? 'before-text' : 'heading'

      return (
        <div className="app-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
            className="logo"
          />
          {textStatus ? (
            <h1 className={textColor}>Welcome to Meetup</h1>
          ) : (
            <h1 className={textColor}>{`Hello ${inputValue}`}</h1>
          )}
          {textStatus ? (
            <p className="topic">Please register for the topic</p>
          ) : (
            <p className="topic">{topic}</p>
          )}
          {textStatus && (
            <Link to="/register">
              <button type="button" className="button">
                Register
              </button>
            </Link>
          )}

          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
            className="image"
          />
        </div>
      )
    }}
  </Context.Consumer>
)

export default HomeRoute
