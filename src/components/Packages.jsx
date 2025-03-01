import React, { useState } from 'react';
import { motion } from "framer-motion";

function Packages() {
    // States for the input fields
    const [textInput1, setTextInput1] = useState("");
    const [textInput2, setTextInput2] = useState("");

    // Function to handle dropdown selection
    const handleDropdownSelect = (setInputValue) => (value) => {
        setInputValue(value);
    };

    const [formData, setFormData] = useState({
        name: '',
        city: '',
        email: '',
        mobile: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = () => {
        const successModal = new window.bootstrap.Modal(document.getElementById('successModal'));
        successModal.show();
    };

    return (
        <>
            <div className='bg-light py-5'>
                <div className=" container animate__animated animate__fadeInLeft">
                    <div className='border bg-white p-5 shadow'>
                        <h3>Search deals on hotels, homes, and much more...</h3>
                        <hr /><br />
                        <div className="row g-3">
                            {/* First Column: Input Text with Dropdown */}
                            <div className="col-md-4">
                                <h6 htmlFor="textWithDropdown1" className="form-label">
                                    Select Destination
                                </h6>
                                <div className="input-group">
                                    <button
                                        className="btn btn-outline-secondary dropdown-toggle"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Where are you going ?
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <button
                                                className="dropdown-item"
                                                onClick={() => handleDropdownSelect(setTextInput1)("Udaipur")}
                                            >
                                                Udaipur
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                className="dropdown-item"
                                                onClick={() => handleDropdownSelect(setTextInput1)("Munnar")}
                                            >
                                                Munnar
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                className="dropdown-item"
                                                onClick={() => handleDropdownSelect(setTextInput1)("Darjeeling")}
                                            >
                                                Darjeeling
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                className="dropdown-item"
                                                onClick={() => handleDropdownSelect(setTextInput1)("Agra")}
                                            >
                                                Agra
                                            </button>
                                        </li>
                                    </ul>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="textWithDropdown1"
                                        value={textInput1}
                                        onChange={(e) => setTextInput1(e.target.value)}
                                        placeholder="Enter text"
                                    />
                                </div>
                            </div>

                            {/* Second Column: Input Date */}
                            <div className="col-md-4">
                                <h6 htmlFor="dateInput" className="form-label">
                                    Select Date
                                </h6>
                                <input type="date" className="form-control" id="dateInput" />
                            </div>

                            {/* Third Column: Input with Dropdown */}
                            <div className="col-md-4">
                                <h6 htmlFor="textWithDropdown2" className="form-label">
                                    Travellers and flight class
                                </h6>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="textWithDropdown2"
                                        value={textInput2}
                                        onChange={(e) => setTextInput2(e.target.value)}
                                        placeholder="Enter value"
                                    />
                                    <button
                                        className="btn btn-outline-secondary dropdown-toggle"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Options
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li>
                                            <button
                                                className="dropdown-item"
                                                onClick={() => handleDropdownSelect(setTextInput2)("Economy")}
                                            >
                                                Economy
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                className="dropdown-item"
                                                onClick={() => handleDropdownSelect(setTextInput2)("Business")}
                                            >
                                                Business
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                className="dropdown-item"
                                                onClick={() => handleDropdownSelect(setTextInput2)("First class")}
                                            >
                                                First class
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <br />
                        <button class="btn btn-dark px-5">Search</button>

                    </div>

                    <div class=" pt-5">
                        <h2 class="text-center"></h2>
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            {/* <!-- Card 1 --> */}
                            <div class="col">
                                <div class="card shadow-sm h-100">
                                    <img src={require("../assets/images/travel-plannig.jpg")} style={{ height: "150px" }} class="card-img-top" alt="Quality" />
                                    <div class="card-body">
                                        <h5 class="card-title">Expert Travel Planning</h5>
                                        <p class="card-text"> Our team of travel specialists helps craft the perfect itinerary, ensuring you make the most of your trip.</p>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Card 2 --> */}
                            <div class="col">
                                <div class="card shadow-sm h-100">
                                    <img src={require("../assets/images/package.jpg")} style={{ height: "150px" }} class="card-img-top" alt="Support" />
                                    <div class="card-body">
                                        <h5 class="card-title">Affordable Packages</h5>
                                        <p class="card-text">We offer budget-friendly options without compromising on quality.</p>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Card 3 --> */}
                            <div class="col">
                                <div class="card shadow-sm h-100">
                                    <img src={require("../assets/images/offer.jpg")} style={{ height: "150px" }} class="card-img-top" alt="Innovation" />
                                    <div class="card-body">
                                        <h5 class="card-title"> Exclusive Deals</h5>
                                        <p class="card-text">We provide exclusive discounts and special offers on hotels, flights, and holiday packages.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hotels */}
                    <div class="border shadow mt-5 p-5 bg-dark text-white">
                        <h2 class="text-center mb-4">Luxury Resorts</h2><hr />
                        <div class="row g-4 justify-content-center">
                            {/* <!-- Card 1 --> */}
                            <div class="col-6 col-md-4 col-lg-3 text-center">
                                <div class="rounded-circle overflow-hidden border card-hover-effect" style={{ width: "200px", height: "200px" }}>
                                    <img src={require("../assets/images/resort1.jpg")} class="img-fluid" alt="Carnoustie Ayurveda" />
                                </div>
                                <div class="mt-2 fw-bold">Carnoustie Ayurveda & Wellness Resort</div>
                            </div>
                            {/* <!-- Card 2 --> */}
                            <div class="col-6 col-md-4 col-lg-3 text-center">
                                <div class="rounded-circle overflow-hidden border card-hover-effect" style={{ width: "200px", height: "200px" }}>
                                    <img src={require("../assets/images/resort2.jpg")} class="img-fluid" alt="Stok Palace" />
                                </div>
                                <div class="mt-2 fw-bold">Stok Palace</div>
                            </div>
                            {/* <!-- Card 3 --> */}
                            <div class="col-6 col-md-4 col-lg-3 text-center">
                                <div class="rounded-circle overflow-hidden border card-hover-effect" style={{ width: "200px", height: "200px" }}>
                                    <img src={require("../assets/images/resort3.jpg")} class="img-fluid" alt="Taj Lake Palace" />
                                </div>
                                <div class="mt-2 fw-bold">Taj Lake Palace</div>
                            </div>
                            {/* <!-- Card 4 --> */}
                            <div class="col-6 col-md-4 col-lg-3 text-center">
                                <div class="rounded-circle overflow-hidden border card-hover-effect" style={{ width: "200px", height: "200px" }}>
                                    <img src={require("../assets/images/resort4.jpg")} class="img-fluid" alt="Umaid Bhawan" />
                                </div>
                                <div class="mt-2 fw-bold">Umaid Bhawan</div>
                            </div>
                            {/* <!-- Card 5 --> */}
                            <div class="col-6 col-md-4 col-lg-3 text-center">
                                <div class="rounded-circle overflow-hidden border card-hover-effect" style={{ width: "200px", height: "200px" }}>
                                    <img src={require("../assets/images/resort5.jpg")} class="img-fluid" alt="Khyber Himalayan Resort" />
                                </div>
                                <div class="mt-2 fw-bold">Khyber Himalayan Resort & Spa, Gulmarg</div>
                            </div>
                            {/* <!-- Card 6 --> */}
                            <div class="col-6 col-md-4 col-lg-3 text-center">
                                <div class="rounded-circle overflow-hidden border card-hover-effect" style={{ width: "200px", height: "200px" }}>
                                    <img src={require("../assets/images/resort6.jpg")} class="img-fluid" alt="Sujan The Serai" />
                                </div>
                                <div class="mt-2 fw-bold">Sujan The Serai, Jaisalmer</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



        </>
    )
}

export default Packages