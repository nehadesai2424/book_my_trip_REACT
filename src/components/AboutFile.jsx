import React from 'react'

function AboutFile() {
  return (
    <div class="bg-light py-5">
      <div className="container animate__animated animate__fadeInLeft">
        <div className='border bg-dark text-white shadow p-4 mb-5'>
          <h2>Book My Trip <i class="fa-solid fa-suitcase-rolling"></i></h2>
          <hr />
          <h5>Explore The World With Us !!</h5>
          <p>Welcome to <a href="">Book My Trip </a>, where your journey begins! We are passionate about bringing the world closer to you by offering unforgettable travel experiences. Whether you are looking for adventure, relaxation, cultural exploration, or luxury vacations, we are here to make your dream trip a reality.</p>
          <img src={require("../assets/images/travel.jpg")} style={{ width: "500px" }} className='mb-3 img-fluid rounded' alt="footwear_about" />

        </div>

        <h3>Offers</h3>
        <h6>Promotions, deals, and special offers for you !!</h6>
        <hr /><br />
        <div className="row">
          <div className="col-lg-6">
            <div class="card mb-3 shadow" style={{ maxWidth: "600px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src={require("../assets/images/flight.jpg")}
                    alt="flight"
                    class="img-fluid rounded-start"
                    style={{ height: "150px" }}
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Fly away to your dream vacation</h5>
                    <p class="card-text">
                      Get inspired – compare and book flights with flexibility
                    </p>
                    <button class="btn  btn-dark">Search for flights</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div class="card mb-3 shadow" >
              <div class="row g-0">
                <div class="col-md-4">
                  <br />
                  <img
                    src={require("../assets/images/rafting.jpg")}
                    alt="flight"
                    class="img-fluid rounded"
                    style={{ height: "110px", width: "160px" }}
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Save on stays worldwide</h5>
                    <p class="card-text">
                      Start your year with an adventure, saving 15% or more with Early 2025 Deals.
                    </p>
                    <button class="btn btn-dark">Save 15% or more</button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>



        {/* ------------- */}
        <div class="text-center mt-5">
          <h3>Our Mission Vision</h3>
          <h6>What we do?</h6>
        <hr /><br />

          {/* <!-- Mission Section --> */}
          <div class="row">
            <div class="col-md-9">
              <div class="card border-0 bg-dark shadow">
                <img src={require("../assets/images/about-mission.jpg")} style={{ width: "500px", height: "280px" }} class="card-img-top" alt="Mission" />
                <div class="card-body bg-white p-4 mx-auto" style={{ maxWidth: "500px", marginTop: "-50px" }}>
                  <h6 class="text-primary">WHAT WE DO?</h6>
                  <h4 class="fw-bold">OUR MISSION</h4>
                  <p>To create a community of happy and satisfied travellers through professionally planned Holiday Membership with a personal touch.</p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Vision Section --> */}
          <div class="row mt-5">
            <div className="col-md-3"></div>
            <div class="col-md-9">
              <div class="card border-0 bg-dark shadow">
                <img src={require("../assets/images/about-vision.jpg")} style={{ width: "500px", height: "280px" }} class="card-img-top" alt="Vision" />
                <div class="card-body bg-white p-4 mx-auto" style={{ maxWidth: "500px", marginTop: "-50px" }}>
                  <h6 class="text-primary">WHAT WE DO?</h6>
                  <h4 class="fw-bold">OUR VISION</h4>
                  <p>To become India's most admired Travel Management Company with a family of versatile travellers from all over the country.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default AboutFile