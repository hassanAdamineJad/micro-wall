import React, {Suspense} from "react";

import {AppRoutes} from "./routes";
import {ErrorBoundary} from "react-error-boundary";
import {BrowserRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/base/App.css";
import {type IRowBlock} from "./types/block";
import {useLocalStorage} from "./hooks/useLocalStorage";
import {BlocksContext} from "./context/BlockContext";

function App(): JSX.Element {
  const [blocks, setBlock] = useLocalStorage<IRowBlock[]>("BLOCKS", []);

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <BrowserRouter>
        <Suspense fallback={<p>Loading ...</p>}>
          <BlocksContext.Provider value={{blocks, setBlock}}>
            <AppRoutes />
          </BlocksContext.Provider>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
