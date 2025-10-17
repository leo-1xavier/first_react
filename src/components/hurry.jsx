import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css"; // your custom CSS if any

import img1 from "../Images/1.png";
import img2 from "../Images/2.jpg";
import img3 from "../Images/3.png";
import dealImg from "../Images/deal.png";

export default function ProductTabs() {
    return (
        <div className="tab-content">
            {/* Lamps Tab */}
            <div className="tab-pane fade show active" id="lamps" role="tabpanel">
                <div className="row g-4 align-items-stretch">
                    {/* Left Column */}
                    <div className="col-md-4 h-100">
                        {[img1, img2, img3].map((img, index) => (
                            <div key={index} className="product-box d-flex align-items-center">
                                <img src={img} alt="Product" className="me-3 img-fluid" />
                                <div>
                                    <p className="mb-1">
                                        <span className="text-danger fw-bold">$49.00</span>{" "}
                                        <del className="text-muted">$52.00</del>
                                    </p>
                                    <p className="mb-1">Latest Yellow Sofa Furniture</p>
                                    <div className="rating">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Center Column */}
                    <div className="col-md-4 position-relative h-100">
                        <div className="featured bg-light border-0 text-center p-3">
                            <div className="d-flex justify-content-between">
                                <span className="badge bg-dark">NEW</span>
                                <span className="badge bg-warning text-dark">50% OFF</span>
                            </div>
                            <img src={dealImg} alt="Featured Product" style={{ width: "200px" }} className="img-fluid my-3" />
                            <div className="stableOrangeBox">
                                <h5 className="mb-2">Hurry Up !!!!</h5>
                                <p className="text-muted">Offer Expires in 02 Hours</p>
                            </div>
                            <p className="mb-0">
                                <span className="text-danger fw-bold">$49.00</span>{" "}
                                <del className="text-muted">$52.00</del>
                            </p>
                            <p className="mb-0">Latest Yellow Sofa Furniture Fully...</p>
                            <div className="rating">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-md-4 h-100">
                        {[img1, img2, img3].map((img, index) => (
                            <div key={index} className="product-box d-flex align-items-center">
                                <img src={img} alt="Product" className="me-3 img-fluid" />
                                <div>
                                    <p className="mb-1">
                                        <span className="text-danger fw-bold">$49.00</span>{" "}
                                        <del className="text-muted">$52.00</del>
                                    </p>
                                    <p className="mb-1">Latest Yellow Sofa Furniture</p>
                                    <div className="rating">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mixer, Chair, Beds, Window Tabs */}
            {["mixer", "chair", "beds", "window"].map((tab) => (
                <div key={tab} className="tab-pane fade" id={tab} role="tabpanel">
                    <div className="row g-4 align-items-stretch">
                        {/* Left Column */}
                        <div className="col-md-4 h-100">
                            {[img1, img2, img3].map((img, index) => (
                                <div key={index} className="product-box d-flex align-items-center">
                                    <img src={img} alt="Product" className="me-3 img-fluid" />
                                    <div>
                                        <p className="mb-1">
                                            <span className="text-danger fw-bold">$49.00</span>{" "}
                                            <del className="text-muted">$52.00</del>
                                        </p>
                                        <p className="mb-1">Latest Yellow Sofa Furniture</p>
                                        <div className="rating">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Center Column */}
                        <div className="col-md-4 position-relative h-100">
                            <div className="featured bg-light border-0 text-center p-3">
                                <div className="d-flex justify-content-between">
                                    <span className="badge bg-dark">NEW</span>
                                    <span className="badge bg-warning text-dark">50% OFF</span>
                                </div>
                                <img src={dealImg} alt="Featured Product" style={{ width: "200px" }} className="img-fluid my-3" />
                                <div className="stableOrangeBox">
                                    <h5 className="mb-2">Hurry Up !!!!</h5>
                                    <p className="text-muted">Offer Expires in 02 Hours</p>
                                </div>
                                <p className="mb-0">
                                    <span className="text-danger fw-bold">$49.00</span>{" "}
                                    <del className="text-muted">$52.00</del>
                                </p>
                                <p className="mb-0">Latest Yellow Sofa Furniture Fully...</p>
                                <div className="rating">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="col-md-4 h-100">
                            {[img1, img2, img3].map((img, index) => (
                                <div key={index} className="product-box d-flex align-items-center">
                                    <img src={img} alt="Product" className="me-3 img-fluid" />
                                    <div>
                                        <p className="mb-1">
                                            <span className="text-danger fw-bold">$49.00</span>{" "}
                                            <del className="text-muted">$52.00</del>
                                        </p>
                                        <p className="mb-1">Latest Yellow Sofa Furniture</p>
                                        <div className="rating">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
