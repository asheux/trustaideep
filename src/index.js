import * as React from "react";
import { createRoot } from "react-dom/client";

import AppRoutes from "src/routes";
import { TaidiTheme } from "src/commons/Themes";

const renderApp = () => {
  const container = document.getElementById("root");
  const root = createRoot(container);

  const App = () => {
    return (
      <TaidiTheme>
        <AppRoutes />
      </TaidiTheme>
    );
  };

  root.render(<App />);
};

renderApp();
