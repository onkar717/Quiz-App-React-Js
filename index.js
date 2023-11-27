import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/components/app";

const Applaylout = () => {
    return(
        <>
        <App/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applaylout />)