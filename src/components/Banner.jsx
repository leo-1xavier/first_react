import { useState } from "react";
import "../App.css";
import dealImg from "../assets/deal.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";

const thumbnails = [dealImg, img2, img3];

export default function Banner() {
    const [currentImage, setCurrentImage] = useState(thumbnails[0]);
    const [fade, setFade] = useState(false);

    const changeImage = (newImage) => {
        setFade(true);
        setTimeout(() => {
            setCurrentImage(newImage);
            setFade(false);
        }, 600); // Duration of fade-out before fade-in
    };

    const prevImage = () => {
        const currentIndex = thumbnails.indexOf(currentImage);
        const prevIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
        changeImage(thumbnails[prevIndex]);
    };

    const nextImage = () => {
        const currentIndex = thumbnails.indexOf(currentImage);
        const nextIndex = (currentIndex + 1) % thumbnails.length;
        changeImage(thumbnails[nextIndex]);
    };

    return (
        <div className="container-fluid py-5 mt-5 bg-body-tertiary">
            <div className="container">
                <div className="row align-items-center">

                    {/* Left */}
                    <div className="col-lg-4 px-5">
                        <p className="text-muted mb-1">
                            Sale <span className="text-danger fw-bold">35% Off</span>
                        </p>
                        <p className="display-5 fw-semibold mb-0">New</p>
                        <p className="display-5 fw-semibold mb-0">Latest</p>
                        <p className="display-4 fw-normal">Furniture</p>
                        <p className="text-uppercase small fw-semibold mt-3 spacing-text">
                            Buy one get one
                        </p>
                        <p className="text-muted">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>

                    {/* Middle */}
                    <div className="col-lg-4 text-center">
                        <img
                            src={currentImage}
                            className={`main-img w-75 h-75 ${fade ? "fade-out" : ""}`}
                            alt="main"
                        />
                    </div>

                    {/* Right */}
                    <div className="col-lg-4 px-5">
                        <div className="d-flex justify-content-center mb-3">
                            <div className="social-links">
                                <a href="#">Facebook</a>
                                <a href="#">Instagram</a>
                                <a href="#">Twitter</a>
                            </div>
                        </div>

                        <div className="d-flex flex-column align-items-center gap-3">
                            {thumbnails.map((src, i) => (
                                <div
                                    key={i}
                                    className="thumbnail-wrapper position-relative"
                                    onClick={() => changeImage(src)}
                                >
                                    <img src={src} className="side-img" alt={`thumb${i}`} />
                                    <div className="overlay d-flex align-items-center justify-content-center">
                                        <i className="bi bi-plus-lg text-white fs-4"></i>
                                    </div>
                                </div>
                            ))}

                            <div className="d-flex justify-content-center mt-2">
                                <button onClick={prevImage} className="btn fw-bold btn-sm">&lt; PREV</button>
                                <button onClick={nextImage} className="btn fw-bold btn-sm">NEXT &gt;</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
