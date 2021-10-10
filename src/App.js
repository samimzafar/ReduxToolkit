import React from "react";
import { Provider } from "react-redux";
import { Routes } from "./routing";
import Store from "./store";
const App = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-12">
          <Provider store={Store}>
            <Routes />
          </Provider>
        </div>
      </div>
    </div>
  );
};

export default App;
