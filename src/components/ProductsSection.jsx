import React from "react";
import ProductCard from "./ProductCard";

//  If images are inside src/assets:
import deal from "../assets/deal.png";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";

export default function ProductsSection() {
    const products = [
        { image: deal, newPrice: 79.0, oldPrice: 65.0, discount: 26 },
        { image: img1, newPrice: 79.0, oldPrice: 65.0, discount: 26 },
        { image: img2, newPrice: 79.0, oldPrice: 65.0, discount: 26 },
    ];

    return (
        <div className="container my-5">
            <div className="row g-4">
                {products.map((p, index) => (
                    <ProductCard
                        key={index}
                        image={p.image}
                        newPrice={p.newPrice}
                        oldPrice={p.oldPrice}
                        discount={p.discount}
                    />
                ))}
            </div>
        </div>
    );
}
