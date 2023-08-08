import React, {Suspense, useState} from "react";
import {AppRoutes} from "./routes";
import {BrowserRouter} from "react-router-dom";
import {Context} from "./context/Context";
import {ErrorBoundary} from "react-error-boundary";
import {MODE_TYPE} from "./types/enums/mode";
import {type IRowBlock} from "./types/block";
import {useLocalStorage} from "./hooks/useLocalStorage";

import "./styles/base/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App(): JSX.Element {
  const [blocks, setBlock] = useLocalStorage<IRowBlock[]>("BLOCKS", []);
  const [mode, setMode] = useState(MODE_TYPE.EDITOR);

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
