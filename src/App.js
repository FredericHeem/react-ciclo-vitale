import React from "react";
import "./App.css";
import Lifecycle from "./Lifecycle";

function App(){
    return (
      <div className="App">
        <div className="App-header">
          <h2>Lifecycle methods through properties</h2>
        </div>
        <Lifecycle
          willMount={() => console.log("willMount")}
          didMount={() => console.log("didMount")}
          willUpdate={() => console.log("willUpdate")}
          didUpdate={() => console.log("didUpdate")}
          willUnmount={() => console.log("willUnmount")}
        >
          Lifecycle Child component
        </Lifecycle>
      </div>
    );
}

export default App;
