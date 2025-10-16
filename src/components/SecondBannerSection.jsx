import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css"; //if any custom styles like .btn-orange or .rotateOrangeBox)
import dealImg from "../assets/deal.png";
import img1 from "../assets/1.png";
import img3 from "../assets/3.png";


const BannerSection = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        // Target date (for example, 10 days from now)
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 10);

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance <= 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((distance / (1000 * 60)) % 60);
                const seconds = Math.floor((distance / 1000) % 60);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="banner" className="hero-banner mb-5 ps-0">
            <div className="row align-items-center">
                {/* Left Orange Box */}
                <div className="col-md-7 text-center" style={{ position: "relative" }}>
                    <div className="text-white py-2 px-4 rotateOrangeBox">
                        <p className="mb-0">Shop Now</p>
                        <p>BUY ONE GET ONE FREE</p>
                    </div>
                    <img
                        src={img1}
                        alt="Chair"
                        className="rounded img-fluid"
                        style={{ width: "200px", height: "250px" }}
                    />
                </div>

                {/* Right Countdown Section */}
                <div className="col-md-4 text-center">
                    <div className="heart-icon2 mx-auto mb-3">
                        <i className="bi bi-heart-fill"></i>
                    </div>
                    <h4 className="fw-normal" style={{ fontSize: "16px" }}>
                        Special Discount <span style={{ color: "orange" }}>70% OFF</span>
                    </h4>
                    <h2 className="fw-bold">
                        Deal<br />
                        From <span style={{ color: "orange" }}>$75</span>
                    </h2>

                    {/* Countdown Timer */}
                    <div className="d-flex justify-content-center gap-2 my-3">
                        {[
                            { label: "Days", value: timeLeft.days },
                            { label: "Hrs", value: timeLeft.hours },
                            { label: "Min", value: timeLeft.minutes },
                            { label: "Sec", value: timeLeft.seconds },
                        ].map((unit, index) => (
                            <div
                                key={index}
                                className="bg-white text-dark text-center px-4 py-1 rounded"
                            >
                                <div className="fw-bold">{unit.value.toString().padStart(2, "0")}</div>
                                <div className="text-uppercase">{unit.label}</div>
                            </div>
                        ))}
                    </div>

                    <a href="#" className="btn btn-orange">
                        Shop Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default BannerSection;
