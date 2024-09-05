import React from "react";
import { createRoot } from "react-dom/client";
import "../assets/tailwind.css";
const test = (
  <div>
    <h1 className="text-5xl bg-green-900">Hello Word</h1>
    
    <img src="images.jpeg" alt=""/>
  </div>
);

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(test);
