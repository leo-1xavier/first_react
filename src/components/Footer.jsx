import React from "react";

//  If images are inside src/assets:
import deal from "../assets/deal.png";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";

export default function Footer() {
    return (
        <div className="container d-flex justify-content-between py-3">
            <div className="d-flex gap-2 align-items-center">
                <p className="mb-0">We Accept :</p>
                <a className="text-decoration-none" href="#">Visa</a>
                <a className="text-decoration-none text-warning" href="#">Master card</a>
                <a className="text-decoration-none text-danger" href="#">Mastero</a>
                <a className="text-decoration-none text-success" href="#">Paypal</a>
            </div>
            <div>
                <p className="mb-0"><i className="bi bi-c-circle"></i> 2022, Voxo Theme. Made with heart by pixelstrap</p>
            </div>
        </div>
    );
}
