import React from "react";

//  If images are inside src/assets:
import deal from "../assets/deal.png";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";

export default function Promises() {
    return (
        <div className="container py-5" id="promises">

            {/* Top Row */}
            <div className="row text-center footer-top mb-5">
                <div className="col-6 col-md-3 mb-4">
                    <i className="bi bi-person"></i>
                    <h6>Customer Services</h6>
                    <p className="text-muted small">Top notch customer service.</p>
                </div>
                <div className="col-6 col-md-3 mb-4">
                    <i className="bi bi-shop"></i>
                    <h6>Pickup At Any Store</h6>
                    <p className="text-muted small">Free shipping on orders over $65.</p>
                </div>
                <div className="col-6 col-md-3 mb-4">
                    <i className="bi bi-shield-check"></i>
                    <h6>Secured Payment</h6>
                    <p className="text-muted small">We accept all major credit cards.</p>
                </div>
                <div className="col-6 col-md-3 mb-4">
                    <i className="bi bi-arrow-repeat"></i>
                    <h6>Free Returns</h6>
                    <p className="text-muted small">30-days free return policy.</p>
                </div>
            </div>

            {/* Bottom Row */}
            <div className="row footer-bottom text-start">
                <div className="col-12 col-md-6 col-lg-3 mb-4">
                    <h5 className="mb-3">Voxo</h5>
                    <p><strong>Phone:</strong> +185659635</p>
                    <p><strong>Address:</strong> 1418 Riverwood Drive, Suite 3245<br />Cottonwood, CA 96052, United States</p>
                    <p><strong>Email:</strong> Voxo123@Gmail.com</p>
                </div>

                <div className="col-6 col-md-3 col-lg-2 mb-4">
                    <h5>About us</h5>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="col-6 col-md-3 col-lg-2 mb-4">
                    <h5>New Categories</h5>
                    <ul>
                        <li><a href="#">Latest Shoes</a></li>
                        <li><a href="#">Branded Jeans</a></li>
                        <li><a href="#">New Jackets</a></li>
                        <li><a href="#">Colorfull Hoodies</a></li>
                        <li><a href="#">Shiner Goggles</a></li>
                    </ul>
                </div>

                <div className="col-6 col-md-3 col-lg-2 mb-4">
                    <h5>Get Help</h5>
                    <ul>
                        <li><a href="#">Your Orders</a></li>
                        <li><a href="#">Your Account</a></li>
                        <li><a href="#">Track Orders</a></li>
                        <li><a href="#">Your Wishlist</a></li>
                        <li><a href="#">Shopping FAQs</a></li>
                    </ul>
                </div>

                <div className="col-12 col-md-6 col-lg-3 mb-4">
                    <h5>Let's stay in touch</h5>
                    <div className="d-flex subscribe-box border">
                        <form id="emailform" noValidate className="w-100">
                            <div className="input-group">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email Address"
                                    className="form-control border-0"
                                />
                                <button
                                    type="button"
                                    className="btn btn-primary px-3"
                                    style={{ borderRadius: "0 .25rem .25rem 0" }}
                                >
                                    &rarr;
                                </button>
                            </div>
                        </form>
                    </div>
                    <div id="email-error" className="text-danger mt-1"></div>
                    <p className="small text-muted mt-2">
                        Keep up to date with our latest news and special offers.
                    </p>
                </div>
            </div>
        </div>
    );
}
