import Header from '../Header'

import './index.css'

window.scrollTo(0, 0)

const NotFound = props => {
  const {history} = props

  const notFoundHomePage = () => {
    history.replace('/')
  }

  return (
    <>
      <Header />
      <div className="not-found-container">
        <div className="not-found-card-container">
          <img
            src="https://res.cloudinary.com/dbcjaxxjm/image/upload/v1626253691/Tasty%20Kitchens%20App%20Assests/Layer_1_bjex5f.png"
            alt="error logo"
            className="not-found-image"
          />
          <h1 className="not-found-heading">PAGE NOT FOUND</h1>
          <p className="not-found-description">
            we're sorry, the page you requested could not be found Please go
            back to Homepage
          </p>
          <button
            type="button"
            className="not-found-custom-button"
            onClick={notFoundHomePage}
          >
            Home Page
          </button>
        </div>
      </div>
    </>
  )
}

export default NotFound
