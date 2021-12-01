import React from "react";
import ReactDom from 'react-dom';
import Example1 from "./examples/typescript/Example1";
import Example2 from "./examples/typescript/Example2";

const App = ()=>
{
    return (
        <div>
            <Example1 />
            <Example2 />
        </div>
    );
}

ReactDom.render(<App />, document.getElementById("root"));