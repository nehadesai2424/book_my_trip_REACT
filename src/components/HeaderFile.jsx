import React from 'react'
import { Link } from 'react-router-dom'

function HeaderFile() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        {/* <a class="navbar-brand" href="#">Navbar</a> */}
        <Link to={"/"}>
          <a class="navbar-brand">
            <img style={{ width: "170px" }} src={require("../assets/images/logo.jpg")} alt="" />
          </a>
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link"><h6>Home</h6></Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link"><h6>About</h6></Link>
            </li>
            <li className="nav-item">
              <Link to="/destinations" className="nav-link"><h6>Destinations</h6></Link>
            </li>
            <li className="nav-item">
              <Link to="/packages" className="nav-link"><h6>Packages</h6></Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link"><h6>Contact</h6></Link>
            </li>
            <li className="nav-item">
              <Link to="/reviews" className="nav-link"><h6>Reviews</h6></Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default HeaderFile