import './index.css'

const NotFoundRoute = () => (
  <div className="note-found-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
      className="img"
    />
    <h1 className="main-heading">Page Not Found</h1>
    <p className="text">
      We are sorry, the page you requested could not be found
    </p>
  </div>
)
export default NotFoundRoute
