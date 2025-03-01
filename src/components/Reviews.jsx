import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Reviews() {

    //Validation

    const [error, setError] = useState({
        nameError: "",
        emailError: "",
        ratingError: "",
        reviewError: ""
    });


    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    //CRUD Operation
    const [data, setData] = useState({
        name: "",
        email: "",
        // package: "",
        rating: "",
        review: "",
    })

    const [newData, setNewData] = useState([]);
    const [id, setId] = useState(undefined);

    function handleChange(e) {
        // console.log(e.target.value)
        setData({ ...data, [e.target.id]: e.target.value })
        // console.log(data)
    };

    //----------------------------------------------------------------------------------------------------------


    function handleSubmit(e) {
        e.preventDefault();

        const objError = {
            nameError: "",
            emailError: "",
            ratingError: "",
            reviewError: ""
        };


        //Validation
        if (data.name.trim() === "") {
            objError.nameError = "Name is Required !!!";
        } else if (data.name.trim().length < 2) {
            objError.nameError = "Minimum 2 Characters are Required !!!";
        }

        if (data.email.trim() === "") {
            objError.emailError = "Email is Required !!!";
        } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(data.email)) {
            objError.emailError = "Email Is Invalid !!!";
        }

        if (data.rating.trim() === "") {
            objError.ratingError = "Rating is Required !!!";
        }

        if (data.review.trim() === "") {
            objError.reviewError = "Review is Required !!!";
        }


        setError(objError);

        //For Review 
        if (!objError.nameError && !objError.emailError && !objError.ratingError && !objError.reviewError) {

            //For Date of Review
            // const newReview = {
            //     ...data,
            //     date: new Date().toISOString() // Add timestamp
            // };
            const newReview = {
                ...data,
                date: new Date().toLocaleDateString('en-GB') // Format as DD/MM/YYYY
            };



            //Create reviews
            axios.post("https://67a8a3636e9548e44fc196b3.mockapi.io/bookMyTrip-reviews", newReview)
                .then((res) => {
                    console.log(res.data);
                    loadData();
                });

            setData({
                name: "",
                email: "",
                rating: "",
                review: "",
                photo: ""
            });
        }
    }

    function loadData() {
        //USING AXIOs
        axios.get("https://67a8a3636e9548e44fc196b3.mockapi.io/bookMyTrip-reviews")
            .then((res) => {
                console.log(res.data)
                setNewData(res.data)
            })
    };

    useEffect(() => {
        loadData();
    }, []);
    //console.log(newData)


    //Spinner 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulating data fetch delay
        setTimeout(() => {
            setLoading(false);
        }, 1000); // 2-second delay
    }, []);

    return (
        <>
            <div className='bg-light py-5'>
                <div class="container animate__animated animate__fadeInLeft">

                    <h3 class="text-center mb-2">Submit Your Review !!</h3><hr />
                    <div class="card mx-auto shadow p-4 mb-5 mt-4" style={{ maxWidth: "600px" }}>
                        <div class="card-body">
                            <form>
                                {/* <!-- Name Input --> */}
                                <div class="mb-3">
                                    <label for="name" class="form-label"><h6>Your Name</h6></label> <span class="text-danger">*</span>
                                    <input onChange={(e) => handleChange(e)} value={data.name} type="text" class="form-control shadow" id="name" placeholder="Enter your name" required />
                                    {error.nameError ? <sapn className="text-danger">{error.nameError}</sapn> : <span></span>}
                                </div>

                                {/* <!-- Email Input --> */}
                                <div class="mb-3">
                                    <label for="email" class="form-label"><h6>Your Email</h6></label> <span class="text-danger">*</span>
                                    <input onChange={(e) => handleChange(e)} value={data.email} type="email" class="form-control shadow" id="email" placeholder="Enter your email" required />
                                    {error.emailError ? <sapn className="text-danger">{error.emailError}</sapn> : <span></span>}
                                </div>

                                {/* <!-- Rating Input --> */}
                                <div class="mb-3">
                                    <label for="rating" class="form-label"><h6>Your Rating</h6></label> <span class="text-danger">*</span>
                                    <select class="form-select shadow" id="rating" value={data.rating} onChange={(e) => handleChange(e)} required>
                                        <option value="" selected disabled>Rate your experience</option>
                                        <option value="5">5 - Excellent</option>
                                        <option value="4">4 - Very Good</option>
                                        <option value="3">3 - Good</option>
                                        <option value="2">2 - Fair</option>
                                        <option value="1">1 - Poor</option>
                                    </select>
                                    {error.ratingError ? <sapn className="text-danger">{error.ratingError}</sapn> : <span></span>}
                                </div>

                                {/* <!-- Review Text Input --> */}
                                <div class="mb-3">
                                    <label for="review" class="form-label"><h6>Your Review</h6></label> <span class="text-danger">*</span>
                                    <textarea onChange={(e) => handleChange(e)} value={data.review} class="form-control shadow" id="review" rows="5" placeholder="Write your review here..." required></textarea>
                                    {error.reviewError ? <sapn className="text-danger">{error.reviewError}</sapn> : <span></span>}
                                </div>

                                {/* <!-- Submit Button --> */}
                                <div class="d-grid">
                                    <button onClick={(e) => handleSubmit(e)} type="submit" class="btn btn-dark">Submit Review</button>
                                </div>
                            </form>
                        </div>
                    </div>


                    {/* Tourist Reviews */}
                    <h3 class="text-center mb-2">Tourist Reviews...</h3><hr />

                    {/* <!-- Card--> */}

                    {loading ? (
                        // Spinner while loading
                        <div className="text-center my-5">
                            <div className="spinner-border text-dark" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        // Display reviews after loading
                        <div className="row g-4 mt-1">
                            {newData.map((data, index) => (
                                <div className="col-md-4" key={data.id}>
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="rounded-circle overflow-hidden border" style={{ width: "60px", height: "60px" }}>
                                                    <img src={require("../assets/images/review-profile2.jpg")} className="img-fluid" alt="User Avatar" />
                                                </div>
                                                <div className="ms-3">
                                                    <h5 className="mb-0">{data.name}</h5>
                                                    <small className="text-muted">Reviewed on {(data.date)}</small>
                                                </div>
                                            </div>
                                            <p className="card-text">{data.review}</p>
                                            <div className="d-flex align-items-center">
                                                <span className="text-warning">
                                                    {"★".repeat(data.rating)}{"☆".repeat(5 - data.rating)}
                                                </span>
                                                <span className="ms-2 text-muted">({data.rating}/5)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                </div>
            </div>
        </>
    )
}

export default Reviews