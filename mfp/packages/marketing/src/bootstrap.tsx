import React from "react";
import ReactDOM from "react-dom";

const mount=(el: ReactDOM.Container | null)=>{
    ReactDOM.render(<h1>Hi</h1>,el);
};
if(process.env.NODE_ENV === "development"){
    const devRoot = document.getElementById("_marketing-dev-root");
    if(devRoot){
        mount(devRoot);
    }
}
export { mount}