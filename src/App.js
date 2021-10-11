import React from "react";
import { Provider } from "react-redux";
import { Home } from "./pages";
import Store from "./store";
const App = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-12">
          <Provider store={Store}>
            <Home />
          </Provider>
        </div>
      </div>
    </div>
  );
};

export default App;
