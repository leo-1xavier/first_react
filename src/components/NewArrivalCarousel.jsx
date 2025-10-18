// src/components/NewArrivalCarousel.jsx
import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Import all images
import img1jpg from "../assets/1.jpg";
import img1png from "../assets/1.png";
import img2jpg from "../assets/2.jpg";
import img2png from "../assets/2.png";
import img3jpg from "../assets/3.jpg";
import img3png from "../assets/3.png";
import deal from "../assets/deal.png";
import home from "../assets/home.png";
import logo from "../assets/logo.png";

// Carousel items using imported images
const carouselItems = [
    [
        { id: 1, name: "Sofa Chair", price: "$78.00", img: img1png },
        { id: 2, name: "Normal Chair", price: "$78.00", img: img2png },
        { id: 3, name: "Steel Chair", price: "$78.00", img: img3png },
        { id: 4, name: "Star Chair", price: "$78.00", img: deal },
    ],
    [
        { id: 5, name: "That Chair", price: "$78.00", img: img1jpg },
        { id: 6, name: "This Chair", price: "$78.00", img: img2jpg },
        { id: 7, name: "Thatsthis Chair", price: "$78.00", img: img3jpg },
        { id: 8, name: "Thitis Chair", price: "$78.00", img: deal },
    ],
];

export default function NewArrivalCarousel() {
    return (
        <div className="container py-5">
            <div id="multiImageCarousel" className="carousel slide" data-bs-ride="carousel">

                {/* Section Title */}
                <div className="section-title text-center mb-4">
                    <h2>New Arrival</h2>
                    <p>Our Collection</p>
                </div>

                {/* Carousel Inner */}
                <div className="carousel-inner">
                    {carouselItems.map((slide, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                            <div className="row g-3">
                                {slide.map((item) => (
                                    <div key={item.id} className="col-6 col-md-3">
                                        <div className="image-box position-relative">
                                            <img src={item.img} className="img-fluid" alt={item.name} />

                                            {/* Plus Icon */}
                                            <span
                                                className="icon-btn plus position-absolute top-0 start-0 m-2 d-flex align-items-center justify-content-center rounded-circle bg-white"
                                                style={{ width: 32, height: 32 }}
                                                data-id={item.id}
                                                data-name={item.name}
                                                data-price={item.price}
                                                data-img={item.img}
                                            >
                                                <i className="bi bi-plus-lg"></i>
                                            </span>

                                            {/* Wishlist Heart */}
                                            <button
                                                className="btn border-0 wishlist-heart position-absolute top-0 end-0 m-2 d-flex align-items-center justify-content-center rounded-circle bg-white"
                                                style={{ width: 32, height: 32, border: "none" }}
                                            >
                                                <i className="bi bi-heart"></i>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dot Navigation */}
                <div className="carousel-indicators pt-3">
                    {carouselItems.map((_, idx) => (
                        <button
                            key={idx}
                            type="button"
                            data-bs-target="#multiImageCarousel"
                            data-bs-slide-to={idx}
                            className={idx === 0 ? "active" : ""}
                            aria-current={idx === 0 ? "true" : undefined}
                            aria-label={`Slide ${idx + 1}`}
                        >
                            {idx === 0 ? "-" : "."}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
