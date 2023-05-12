import './index.css'

const HomeRoute = () => (
  <div className="app-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
      alt="website logo"
      className="logo"
    />
    <h1 className="heading">Meet up</h1>
    <p className="topic">your topic</p>
    <button type="button" className="button">
      register
    </button>
    <img
      src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
      alt="meetup"
      className="image"
    />
  </div>
)

export default HomeRoute
