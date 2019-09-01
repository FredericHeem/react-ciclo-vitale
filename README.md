
[![Greenkeeper badge](https://badges.greenkeeper.io/FredericHeem/react-ciclo-vitale.svg)](https://greenkeeper.io/)

React lifecycle hook method through properties: 

* `willMount`
* `didMount`
* `willUpdate`
* `didUpdate`
* `willUnmount`



```
import React from "react";
import Lifecycle from "react-ciclo-vitale";

function App(){
    return (
      <div>
        <h2>Lifecycle methods through properties</h2>
        <Lifecycle
          willMount={(props) => console.log("willMount")}
          didMount={(props, divDom) => console.log("didMount")}
          willUpdate={(props, divDom) => console.log("willUpdate")}
          didUpdate={(props, divDom) => console.log("didUpdate")}
          willUnmount={(props, divDom) => console.log("willUnmount")}
        >
          Lifecycle Child component
        </Lifecycle>
      </div>
    );
}
```



