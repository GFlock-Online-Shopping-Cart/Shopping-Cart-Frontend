import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./App";
import { Auth0ProviderWithNavigate } from "./services/auth0ProviderNavigate";

import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <Router>
    <Auth0ProviderWithNavigate>
      <App />
    </Auth0ProviderWithNavigate>
  </Router>
);
