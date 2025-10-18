import React from "react";

//  If images are inside src/assets:
import deal from "../assets/deal.png";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";

export default function SideNav() {
    return (
        <nav
            id="sideNav"
            className="position-fixed top-50 end-0 translate-middle-y bg-light p-2 rounded shadow"
        >
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link" href="#banner">Banner</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#hurry">Hurry offer</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#promises">Promises</a>
                </li>
            </ul>
        </nav>
    );
}
