import React from "react";
import ReactDOM from "react-dom";
import {createMemoryHistory} from "history"
import App from "./App";

interface INavigation {
    onNavigate:()=>void;
}


const mount = (el: ReactDOM.Container | null, navigation?: INavigation) => {
    const history = createMemoryHistory();
    if (navigation?.onNavigate) {
        history.listen(navigation.onNavigate);
    }
    ReactDOM.render(<App history={history} />, el);
};
if(process.env.NODE_ENV === "development"){
    const devRoot = document.getElementById("_marketing-dev-root");
    if(devRoot){
        mount(devRoot);
    }
}
export { mount};