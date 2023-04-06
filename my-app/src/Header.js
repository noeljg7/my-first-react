import React from "react"

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="./react2.png" alt="logo" className="image" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}