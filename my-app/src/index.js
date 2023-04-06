import React from "react"
import ReactDOM from "react-dom"
import './style.css';
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";



function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

// ReactDOM.render(navbar, document.getElementById("root")) this is React 17
ReactDOM.createRoot(document.getElementById("root")).render(<App />)  // this is React 18

