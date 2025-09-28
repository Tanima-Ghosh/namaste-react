

import React from "react";
import ReactDOM from "react-dom/client";


// react

const heading = React.createElement("h1", {id: "heading"}, "i am a heading");

// jsx

const headingJSX = <h1>I am a jsx heading</h1>

const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(headingJSX)


// react functional component

const HeadingComponent1 = () => {
    return <h1>Namaste React from functional component using return</h1>
}

const HeadingComponent2 = () => (
    <div className="container">
        <h1>Namaste React from functional component without using return</h1>
        <HeadingComponent1/>
    </div>
)

root.render(<HeadingComponent2/>)