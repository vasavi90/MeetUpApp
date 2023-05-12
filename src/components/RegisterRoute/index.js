import './index.css'

const RegisterRoute = () => (
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
      <div className="input-container">
        <h1 className="input-heading">Let us join</h1>
        <label className="label" htmlFor="name">
          NAME
        </label>
        <input type="text" className="input" id="name" />
        <label className="label" htmlFor="topic">
          TOPICS
        </label>
        <select className="input">
          <option value="vasavi">vasavi</option>
        </select>
        <button type="button" className="button">
          Register Now
        </button>
      </div>
    </div>
  </div>
)
export default RegisterRoute
