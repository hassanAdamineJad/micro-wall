import React, {Suspense} from "react";
import "./styles/base/App.css";
import {AppRoutes} from "./routes";
import {ErrorBoundary} from "react-error-boundary";
import {BrowserRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App(): JSX.Element {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <BrowserRouter>
        <Suspense fallback={<p>Loading ...</p>}>
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
