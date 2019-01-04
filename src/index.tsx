import * as React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import { App } from "./app";

const rootElement = document.getElementById("root") as HTMLElement;

function renderApp() {
  render(<App />, rootElement);
}

renderApp();

if (module["hot"]) {
  module["hot"].dispose(function() {
    unmountComponentAtNode(rootElement);
  });

  module["hot"].accept(renderApp);
}
