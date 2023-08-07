import React, {Suspense, useState} from "react";

import {AppRoutes} from "./routes";
import {ErrorBoundary} from "react-error-boundary";
import {BrowserRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/base/App.css";
import {type IRowBlock} from "./types/block";
import {useLocalStorage} from "./hooks/useLocalStorage";
import {Context} from "./context/Context";

function App(): JSX.Element {
  const [blocks, setBlock] = useLocalStorage<IRowBlock[]>("BLOCKS", []);
  const [mode, setMode] = useState("editor");

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <BrowserRouter>
        <Suspense fallback={<p>Loading ...</p>}>
          <Context.Provider value={{blocks, setBlock, mode, setMode}}>
            <AppRoutes />
          </Context.Provider>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
