
import React from "react";
import "../App.css";

export default function productCard({ image, newPrice, oldPrice, discount }) {
    return (
        <div className="col-md-4">
            <div className="product-card bg-body-tertiary position-relative overflow-hidden">
                {/* Heart Icon */}
                <div className="heart-icon position-absolute top-0 end-0 m-2">
                    <i className="bi bi-heart-fill"></i>
                </div>

                {/* Discount Badge */}
                <div className="discount-badge position-absolute top-0 end-0 m-2 me-2">
                    {discount}% <span>OFF</span>
                </div>

                {/* Product Image */}
                <div className="d-flex justify-content-center">
                    <img
                        className="d-inline"
                        src={image}
                        style={{ width: "150px", height: "150px" }}
                        alt="Product"
                    />
                </div>

                {/* Price */}
                <div className="price text-center mt-2">
                    <p className="new-price mb-0">${newPrice}</p>
                    <p className="old-price mb-0 text-decoration-line-through">
                        ${oldPrice}
                    </p>
                </div>

                {/* Hover Orange Box */}
                <div className="hover-box">
                    <p className="mb-1 fw-bold">Shop Now</p>
                    <p className="mb-1 fw-semibold">BUY ONE GET ONE</p>
                    <p className="mb-0 fw-bold">FREE</p>
                </div>
            </div>
        </div>
    );
}
