import React from "react";
import { createRoot } from "react-dom/client";

export default function Welcome() {
    return <h1>Welcome to React in Laravel!</h1>;
}

if (document.getElementById("root")) {
    const root = createRoot(document.getElementById("root"));
    root.render(<Welcome />);
}
