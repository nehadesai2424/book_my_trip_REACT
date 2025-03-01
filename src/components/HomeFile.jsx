import React from 'react'

function HomeFile() {
  return (
    <>
      <div class="bg-light">
        {/* Carousel */}
        <div id="carouselExampleIndicators" class="carousel slide">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={require("../assets/images/carousel1.jpg")} class="d-block w-100" alt="..." style={{ height: "500px" }} />
            </div>
            <div class="carousel-item">
              <img src={require("../assets/images/carousel2.jpg")} class="d-block w-100" alt="..." style={{ height: "500px" }} />
            </div>
            <div class="carousel-item">
              <img src={require("../assets/images/carousel3.jpg")} class="d-block w-100" alt="..." style={{ height: "500px" }} />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        {/* Gallery */}
        <div className="container py-5">
          <div>
            <h3>Trending destinations</h3>
            <h6> Most popular choices for travelers from India</h6>
            <hr /><br />
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <div className='card-hover-effect'><h5 class="bg-dark text-light ">Kashmir</h5>
                <img
                  src={require("../assets/images/kashmir.jpg")}
                  style={{ height: "250px" }}
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                /></div>

              <div className="card-hover-effect">
                <h5 class="bg-dark text-light">Shimla</h5>
                <img
                  src={require("../assets/images/shimla.jpg")}
                  style={{ height: "510px" }}
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Kashmir img"
                />
              </div>

            </div>

            <div class="col-lg-4 mb-4 mb-lg-0">

              <div className="card-hover-effect">
                <h5 class="bg-dark text-light">Rajasthan</h5>
                <img
                  src={require("../assets/images/rajasthan.jpg")}
                  style={{ height: "510px" }}
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Shimla img"
                />
              </div>



              <div className="card-hover-effect">
                <h5 class="bg-dark text-light">Kanyakumari</h5>
                <img
                  src={require("../assets/images/kanyakumari.jpg")}
                  style={{ height: "250px" }}
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="kanyakumari img"
                />
              </div>
            </div>

            <div class="col-lg-4 mb-4 mb-lg-0">

              <div className="card-hover-effect">
                <h5 class="bg-dark text-light">Darjeeling</h5>
                <img
                  src={require("../assets/images/darjeeling.jpg")}
                  style={{ height: "250px" }}
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Waves at Sea"
                />
              </div>

              <div className="card-hover-effect">
                <h5 class="bg-dark text-light">Goa</h5>
                <img
                  src={require("../assets/images/goa.jpg")}
                  style={{ height: "510px" }}
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Yosemite National Park"
                />
              </div>
            </div>
          </div>

          <a href="/destinations"><button class="btn btn-dark">View more trips</button></a>

        </div>
      </div>
    </>
  )
}

export default HomeFile