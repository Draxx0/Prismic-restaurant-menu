import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PrismicProvider } from "@prismicio/react";
import { client } from "./prismic";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PrismicProvider client={client}>
    <App />
  </PrismicProvider>
);
