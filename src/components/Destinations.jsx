import React, { useState } from 'react';

function Destinations() {

    const [isHovered, setIsHovered] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        passengers: "",
        tripDate: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(
            `Data Submitted\n\nName: ${formData.name}\nEmail: ${formData.email}\nMobile: ${formData.mobile}\nPassengers: ${formData.passengers}\nTrip Date: ${formData.tripDate}\n \nWe will contact you soon !!`
        );
        setShowModal(false);
        setFormData({ name: "", email: "", mobile: "", passengers: "", tripDate: "" });
    };

    return (
        <>
            <div className='bg-light py-5'>

                {/* Cards */}

                <div class="container animate__animated animate__fadeInLeft">
                    <div>
                        <h3>Explore India</h3>
                        <h6>These popular destinations have a lot to offer</h6>
                    </div>
                    <hr /><br />
                    {/* row1 */}
                    <div class="row g-4">
                        {/* <!-- Card 1 --> */}
                        <div class="col-lg-3 col-md-6">
                            {/* <div class="card h-100"> */}
                            <div className="card h-100 shadow card-hover-effect">
                                <img src={require("../assets/images/cards/udaipur.jpg")} class="card-img-top" alt="Destination 1" />
                                <div class="card-body">
                                    <h5 class="card-title">Udaipur</h5>
                                    {/* <p class="card-text">Snuggled up beside the tranquil Lake Pichola, Udaipur is a city which stands true to the heritage of being a royal counterpart of Rajasthan</p> */}
                                </div>
                                <div class="card-footer bg-white"><button onClick={() => setShowModal(true)} class=" btn btn-sm btn-dark my-1">Book Now</button></div>
                            </div>
                        </div>
                        {/* <!-- Card 2 --> */}
                        <div class="col-lg-3 col-md-6">
                            <div class="card h-100 card-hover-effect">
                                <img src={require("../assets/images/cards/munnar.jpg")} class="card-img-top" alt="Destination 2" />
                                <div class="card-body">
                                    <h5 class="card-title">Munnar</h5>
                                    {/* <p class="card-text">Munnar is the queen of hill stations located at the confluence of three mountain streams namely, Mudrapuzha, Nallathanni and Kundala.</p> */}
                                </div>
                                <div class="card-footer bg-white"><button onClick={() => setShowModal(true)} class=" btn btn-sm btn-dark my-1">Book Now</button></div>
                            </div>
                        </div>
                        {/* <!-- Card 3 --> */}
                        <div class="col-lg-3 col-md-6">
                            <div class="card h-100 card-hover-effect">
                                <img src={require("../assets/images/cards/gulmarg.jpg")} class="card-img-top" alt="Destination 3" />
                                <div class="card-body">
                                    <h5 class="card-title">Gulmarg</h5>
                                    {/* <p class="card-text">A beautiful meadow nestled among the mountains of Kashmir is 50 km (30 miles) from Srinagar, at an altitude of 2730 meters (9000 feet).</p> */}
                                </div>
                                <div class="card-footer bg-white"><button onClick={() => setShowModal(true)} class=" btn btn-sm btn-dark my-1">Book Now</button></div>
                            </div>
                        </div>
                        {/* <!-- Card 4 --> */}
                        <div class="col-lg-3 col-md-6">
                            <div class="card h-100 card-hover-effect">
                                <img src={require("../assets/images/cards/kochi.jpg")} class="card-img-top" alt="Destination 4" />
                                <div class="card-body">
                                    <h5 class="card-title">Kochi</h5>
                                    {/* <p class="card-text">Formerly, Cochin, was the centre of Indian spice trade for many centuries, and was known to the Yavanas (Greeks) as well as Romans</p> */}
                                </div>
                                <div class="card-footer bg-white"><button onClick={() => setShowModal(true)} class=" btn btn-sm btn-dark my-1">Book Now</button></div>
                            </div>
                        </div>
                    </div>

                    <br /><br />
                    {/* row-2 */}
                    <div class="row g-4">
                        {/* <!-- Card 1 --> */}
                        <div class="col-lg-3 col-md-6">
                            <div class="card h-100 card-hover-effect">
                                <img src={require("../assets/images/cards/lakshadweep.jpg")} class="card-img-top" alt="Destination 1" />
                                <div class="card-body">
                                    <h5 class="card-title">Lakshadweep</h5>
                                    <p class="card-text">Lakshadweep is an Indian union territory with 36 islands in the Laccadive Sea in the Arabian Sea.</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Card 2 --> */}
                        <div class="col-lg-3 col-md-6">
                            <div class="card h-100 card-hover-effect">
                                <img src={require("../assets/images/cards/jaipur.jpg")} class="card-img-top" alt="Destination 2" />
                                <div class="card-body">
                                    <h5 class="card-title">Jaipur</h5>
                                    <p class="card-text">Built by the warrior-astronomer Raja Sawai Jai Singh II in 1727. Jaipur is a charming place, which dazzles the eye of tourist</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Card 3 --> */}
                        <div class="col-lg-3 col-md-6">
                            <div class="card h-100 card-hover-effect">
                                <img src={require("../assets/images/cards/agra.jpg")} class="card-img-top" alt="Destination 3" />
                                <div class="card-body">
                                    <h5 class="card-title">Agra</h5>
                                    <p class="card-text">Agra is home to the beautiful Taj Mahal. On your visit to Agra, also visit Agra Fort, Fatehpur Sikri and Sikandra.</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Card 4 --> */}
                        <div class="col-lg-3 col-md-6">
                            <div class="card h-100 card-hover-effect">
                                <img src={require("../assets/images/cards/amritsar.jpg")} class="card-img-top" alt="Destination 4" />
                                <div class="card-body">
                                    <h5 class="card-title">Amritsar</h5>
                                    <p class="card-text">Amritsar, Punjab’s biggest city was the center of celebrations of the 400th anniversary (Parkash Utsav) of the installation of the Guru Granth Sahib</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br /><br />
                    {/* row-3 */}
                    <div class="row g-4">
                        {/* <!-- Card 1 --> */}
                        <div class="col-lg-3 col-md-6">
                            <div class="card h-100 card-hover-effect">
                                <img src={require("../assets/images/cards/gangtok.jpg")} class="card-img-top" alt="Destination 1" />
                                <div class="card-body">
                                    <h5 class="card-title">Gangtok</h5>
                                    <p class="card-text">Gangtok is the beautiful capital city of Sikkim. A Buddhist haven, Gangtok is wreathed with fluffy clouds and surrounded by majestic snow-capped mountains.</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Card 2 --> */}
                        <div class="col-lg-3 col-md-6">
                            <div class="card h-100 card-hover-effect">
                                <img src={require("../assets/images/cards/goa.jpg")} class="card-img-top" alt="Destination 2" />
                                <div class="card-body">
                                    <h5 class="card-title">Goa</h5>
                                    <p class="card-text">Goa is popular world-over for its beach trance parties, especially on the Anjuna beach. The beach is a major attraction for vacationers</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Card 3 --> */}
                        <div class="col-lg-3 col-md-6">
                            <div class="card h-100 card-hover-effect">
                                <img src={require("../assets/images/cards/rameshwaram.jpg")} class="card-img-top" alt="Destination 3" />
                                <div class="card-body">
                                    <h5 class="card-title">Rameshwaram</h5>
                                    <p class="card-text">Rameswaram is a town in the South Indian state of Tamil Nadu, a major pilgrimage centre. It is believed that those who go to Varanasi</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Card 4 --> */}
                        <div class="col-lg-3 col-md-6">
                            <div class="card h-100 card-hover-effect">
                                <img src={require("../assets/images/cards/darjeeling.jpg")} class="card-img-top" alt="Destination 4" />
                                <div class="card-body">
                                    <h5 class="card-title">Darjeeling</h5>
                                    <p class="card-text">Explore the enchanting beauty of Darjeeling with its breathtaking views, iconic toy train rides, lush tea gardens, and vibrant local culture.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal */}
                <div className={`modal fade ${showModal ? "show d-block" : ""}`} tabIndex="-1" role="dialog" style={{ background: showModal ? "rgba(0,0,0,0.5)" : "transparent" }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content border shadow p-3">
                            <div className="modal-header">
                                <h5 className="modal-title">Fill Your Details for Trip</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">Full Name</label>
                                        <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Mobile</label>
                                        <input type="tel" className="form-control" name="mobile" value={formData.mobile} onChange={handleChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Number of Passengers</label>
                                        <input type="number" className="form-control" name="passengers" value={formData.passengers} onChange={handleChange} min="1" required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Date for Trip</label>
                                        <input type="date" className="form-control" name="tripDate" value={formData.tripDate} onChange={handleChange} required />
                                    </div>
                                    <button type="submit" className="btn btn-dark">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal Background Close */}
                {showModal && <div className="modal-backdrop fade show" onClick={() => setShowModal(false)}></div>}

            </div>

        </>
    )
}

export default Destinations