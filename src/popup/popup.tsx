import React from "react";
import { createRoot } from "react-dom/client";
import "../assets/tailwind.css";
const test = (
  <div>
    <h1 className="text-5xl bg-green-900">Hello Word</h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae commodi
      excepturi vel officia est molestiae. Aut tempore, iusto est nisi dolorum
      consectetur reiciendis facere, repudiandae asperiores provident, autem
      incidunt beatae.
    </p>
  </div>
);

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(test);
