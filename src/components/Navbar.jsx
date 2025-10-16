import { useState } from "react";
import "../App.css";

export default function Navbar() {
    const [cartVisible, setCartVisible] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [wishlistCount, setWishlistCount] = useState(0);
    const [searchActive, setSearchActive] = useState(false);

    return (
        <div
            className="container-fluid pt-2 position-fixed top-0 start-50 translate-middle-x mx-auto bg-white"
            style={{ zIndex: 2000 }}>
            <nav className="container navbar navbar-expand-lg">
                <a className="navbar-brand ps-lg-4 pe-lg-5" href="#">
                    Voxo
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* LEFT MENU */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-xl-5 d-flex gap-3">

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                HOME
                            </a>
                            <ul className="dropdown-menu mydropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                SHOP
                            </a>
                            <div className="dropdown-menu mega-menu p-3">
                                <div className="row">
                                    <div className="col-md-3">
                                        <h6 className="fw-bold">Category1</h6>
                                        <a className="dropdown-item" href="#">Product 1</a>
                                        <a className="dropdown-item" href="#">Product 2</a>
                                        <a className="dropdown-item" href="#">Product 3</a>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="nav-item dropdown position-static">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                PRODUCT
                            </a>

                            {/* Mega Menu */}
                            <div className="dropdown-menu mega-menu p-3">
                                <div className="row">
                                    <div className="col-md-2">
                                        <h6 className="fw-bold">Email Template</h6>
                                        <a className="dropdown-item" href="#">Abandonment Email</a>
                                        <a className="dropdown-item" href="#">Black Friday</a>
                                        <a className="dropdown-item" href="#">Email Template 1</a>
                                        <a className="dropdown-item" href="#">Email Template 2</a>
                                        <a className="dropdown-item" href="#">Offer Template</a>
                                        <a className="dropdown-item" href="#">Order Success 1</a>
                                        <a className="dropdown-item" href="#">Order Success 2</a>
                                    </div>
                                    <div className="col-md-2">
                                        <h6 className="fw-bold">Email Template</h6>
                                        <a className="dropdown-item" href="#">Product Review</a>
                                        <a className="dropdown-item" href="#">Reset Password</a>
                                        <a className="dropdown-item" href="#">Welcome Template</a>
                                        <a className="dropdown-item" href="#">Invoice Template</a>
                                        <a className="dropdown-item" href="#">Invoice 1 Template</a>
                                        <a className="dropdown-item" href="#">Invoice 2 Template</a>
                                        <a className="dropdown-item" href="#">Invoice 3 Template</a>
                                    </div>
                                    <div className="col-md-2">
                                        <h6 className="fw-bold">Portfolio Page</h6>
                                        <a className="dropdown-item" href="#">Portfolio 2 Grid</a>
                                        <a className="dropdown-item" href="#">Portfolio 2 Masonary</a>
                                        <a className="dropdown-item" href="#">Portfolio 3 Grid</a>
                                        <a className="dropdown-item" href="#">Portfolio 3 Masonary</a>
                                        <a className="dropdown-item" href="#">Portfolio 3 Grid</a>
                                        <a className="dropdown-item" href="#">Portfolio 3 Masonary</a>
                                        <a className="dropdown-item" href="#">Portfolio 3 No Space</a>
                                    </div>
                                    <div className="col-md-2">
                                        <h6 className="fw-bold">Element Page</h6>
                                        <a className="dropdown-item" href="#">Element Button</a>
                                        <a className="dropdown-item" href="#">Element Category</a>
                                        <a className="dropdown-item" href="#">Element Collection Banner</a>
                                        <a className="dropdown-item" href="#">Element Deal Banner</a>
                                        <a className="dropdown-item" href="#">Element Header</a>
                                        <a className="dropdown-item" href="#">Element Home</a>
                                        <a className="dropdown-item" href="#">Element Product</a>
                                    </div>
                                    <div className="col-md-2">
                                        <h6 className="fw-bold">Cookie Bar</h6>
                                        <a className="dropdown-item" href="#">Bottom</a>
                                        <a className="dropdown-item" href="#">Bottom Left</a>
                                        <a className="dropdown-item" href="#">Bottom Right</a>
                                        <h6 className="fw-bold pt-4">Cookie Bar</h6>
                                        <a className="dropdown-item" href="#">Ajax Search</a>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                VOXO PLUS
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                PAGES
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                BLOG
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>

                    {/* RIGHT SIDE ICONS */}
                    <div className="d-flex gap-3 align-items-center">
                        {/* Search Button */}
                        <button className="btn btn-orange" onClick={() => setSearchActive(true)}>
                            <i className="bi bi-search"></i>
                        </button>

                        {/* Search Overlay */}
                        <div className={`navbar-search ${searchActive ? "active" : ""}`}>
                            <i className="bi bi-search search-icon"></i>
                            <input type="text" placeholder="Search..." />
                            <button className="close-btn" onClick={() => setSearchActive(false)}>
                                <i className="bi bi-x-lg"></i>
                            </button>
                        </div>

                        {/* Profile */}
                        <button className="btn border-0">
                            <i className="bi bi-person"></i>
                        </button>

                        {/* Wishlist */}
                        <div className="position-relative d-inline-block">
                            <button
                                className="btn border-0 p-0"
                                onClick={() => setWishlistCount(wishlistCount + 1)}
                            >
                                <i className="bi bi-heart fs-5"></i>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {wishlistCount}
                                </span>
                            </button>
                        </div>

                        {/* Cart */}
                        <div className="position-relative d-inline-block">
                            <button
                                className="btn btn-orange"
                                onClick={() => setCartVisible(!cartVisible)}
                            >
                                <i className="bi bi-cart"></i> ${cartCount.toFixed(2)}
                            </button>

                            {cartVisible && (
                                <div className="cart-dropdown pt-0 px-0">
                                    <div className="cart-item bg-body-tertiary d-flex text-start py-3 px-2">
                                        <div className="position-relative">
                                            <i className="bi bi-bag-dash-fill"></i>
                                            <span className="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-pill">
                                                {cartCount}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="cart-item text-center py-3">
                                        <small>No items added yet</small>
                                    </div>
                                    <button className="btn btn-orange w-100">Proceed To Payment</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
