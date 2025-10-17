import React, { useState } from "react";

const allProducts = {
    most1: [
        { name: "Wood Chair 1", oldPrice: "$49.00", price: "$35.50", img: "/Images/1.jpg" },
        { name: "Wood Chair 2", oldPrice: "$59.00", price: "$45.00", img: "/Images/2.jpg" },
        { name: "Wood Chair 3", oldPrice: "$69.00", price: "$55.00", img: "/Images/3.jpg" },
        { name: "Wood Chair 4", oldPrice: "$79.00", price: "$60.00", img: "/Images/1.jpg" },
        { name: "Wood Chair 5", oldPrice: "$89.00", price: "$65.00", img: "/Images/2.jpg" },
        { name: "Wood Chair 6", oldPrice: "$99.00", price: "$70.00", img: "/Images/3.jpg" },
    ],
    recent: [
        { name: "Lamp 1", oldPrice: "$29.00", price: "$20.00", img: "/Images/1.jpg" },
        { name: "Lamp 2", oldPrice: "$35.00", price: "$25.00", img: "/Images/2.jpg" },
        { name: "Lamp 3", oldPrice: "$39.00", price: "$28.00", img: "/Images/3.jpg" },
        { name: "Lamp 4", oldPrice: "$45.00", price: "$32.00", img: "/Images/1.jpg" },
        { name: "Lamp 5", oldPrice: "$49.00", price: "$35.00", img: "/Images/2.jpg" },
        { name: "Lamp 6", oldPrice: "$55.00", price: "$40.00", img: "/Images/3.jpg" },
    ],
    most2: [
        { name: "Clock 1", oldPrice: "$19.00", price: "$12.00", img: "/Images/1.jpg" },
        { name: "Clock 2", oldPrice: "$22.00", price: "$15.00", img: "/Images/2.jpg" },
        { name: "Clock 3", oldPrice: "$25.00", price: "$18.00", img: "/Images/3.jpg" },
        { name: "Clock 4", oldPrice: "$28.00", price: "$20.00", img: "/Images/1.jpg" },
        { name: "Clock 5", oldPrice: "$32.00", price: "$22.00", img: "/Images/2.jpg" },
        { name: "Clock 6", oldPrice: "$35.00", price: "$25.00", img: "/Images/3.jpg" },
    ],
};

const itemsPerPage = 4;

export default function ProductsSection() {
    const sections = ["most1", "recent", "most2"];
    const [pageIndex, setPageIndex] = useState({ most1: 0, recent: 0, most2: 0 });
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const handleNext = (section) => {
        if ((pageIndex[section] + 1) * itemsPerPage < allProducts[section].length) {
            setPageIndex({ ...pageIndex, [section]: pageIndex[section] + 1 });
        }
    };

    const handlePrev = (section) => {
        if (pageIndex[section] > 0) {
            setPageIndex({ ...pageIndex, [section]: pageIndex[section] - 1 });
        }
    };

    const addToCart = (product) => {
        setCartItems((prev) => {
            const existing = prev.find((item) => item.name === product.name);
            if (existing) {
                return prev.map((item) =>
                    item.name === product.name ? { ...item, qty: item.qty + 1 } : item
                );
            }
            return [...prev, { ...product, qty: 1 }];
        });
        setCartCount((prev) => prev + 1);
    };

    const removeFromCart = (name) => {
        setCartItems((prev) => {
            const item = prev.find((i) => i.name === name);
            setCartCount((prevCount) => prevCount - (item?.qty || 0));
            return prev.filter((i) => i.name !== name);
        });
    };

    const updateQty = (name, qty) => {
        setCartItems((prev) =>
            prev.map((item) => (item.name === name ? { ...item, qty } : item))
        );
        const total = cartItems.reduce((sum, i) => sum + i.qty, 0) - (cartItems.find(i => i.name === name)?.qty || 0) + qty;
        setCartCount(total);
    };

    return (
        <div className="container py-5">
            <div className="row">
                {sections.map((section) => {
                    const products = allProducts[section].slice(
                        pageIndex[section] * itemsPerPage,
                        (pageIndex[section] + 1) * itemsPerPage
                    );
                    const title = section === "recent" ? "Recent Popular" : "Most Popular";

                    return (
                        <div className="col-md-4" key={section}>
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <div>
                                    <h5 className="mb-0">{title}</h5>
                                    <small className="text-muted">Our Collection</small>
                                </div>
                                <div>
                                    <button
                                        className="btn rounded-circle border-0 btn-sm"
                                        style={{ width: "35px", height: "35px", backgroundColor: "rgb(182, 180, 180)" }}
                                        onClick={() => handlePrev(section)}
                                    >
                                        {"<"}
                                    </button>
                                    <button
                                        className="btn rounded-circle border-0 btn-sm"
                                        style={{ width: "35px", height: "35px", backgroundColor: "rgb(182, 180, 180)" }}
                                        onClick={() => handleNext(section)}
                                    >
                                        {">"}
                                    </button>
                                </div>
                            </div>

                            <div className="product-list">
                                {products.map((p) => (
                                    <div className="product-list-item" key={p.name}>
                                        <img src={p.img} alt={p.name} />
                                        <div className="product-info">
                                            <small>Fully Comfortable</small>
                                            <h6>{p.name}</h6>
                                            <p>
                                                <del>{p.oldPrice}</del>{" "}
                                                <span className="text-danger fw-bold">{p.price}</span>
                                            </p>
                                            <button
                                                className="btn btn-sm btn-outline-primary plus"
                                                onClick={() => addToCart(p)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* CART BOX */}
            <div id="cartBox" className="mt-4">
                <h5>Cart ({cartCount})</h5>
                {cartItems.map((item) => (
                    <div
                        className="cart-item d-flex align-items-center py-2 px-2 border-bottom"
                        key={item.name}
                    >
                        <img
                            src={item.img}
                            alt={item.name}
                            style={{ width: "60px", height: "60px", objectFit: "cover" }}
                            className="me-2"
                        />
                        <div>
                            <p className="mb-1">{item.name}</p>
                            <small>{item.price}</small>
                        </div>
                        <input
                            type="number"
                            className="form-control ms-auto qty"
                            style={{ width: "60px" }}
                            min={1}
                            value={item.qty}
                            onChange={(e) => updateQty(item.name, parseInt(e.target.value))}
                        />
                        <button
                            className="btn btn-sm btn-outline-danger ms-2"
                            onClick={() => removeFromCart(item.name)}
                        >
                            x
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
