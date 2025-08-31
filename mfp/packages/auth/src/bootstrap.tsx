import React from "react";
import ReactDOM from "react-dom";
import {createMemoryHistory, createBrowserHistory} from "history"
import App from "./App";

interface INavigation {
    onNavigate?:(location:unknown)=>void;
    defaultHistory: ReturnType<typeof createMemoryHistory | typeof createBrowserHistory>;
}


const mount = (el: ReactDOM.Container | null, navigation?: INavigation) => {
    const history = navigation?.defaultHistory || createMemoryHistory();
    if (navigation?.onNavigate) {
        history.listen(navigation.onNavigate);
    }
    ReactDOM.render(<App history={history} />, el);

    return {
        onParentNavigation({pathname:nextPathname}: Location) {
            const {pathname} =history.location;
            if(pathname !== nextPathname) history.push(nextPathname);
            console.log("Capture navigation from Parent", nextPathname);
        }
    }
};
if(process.env.NODE_ENV === "development"){
    const devRoot = document.getElementById("_auth-dev-root");
    if(devRoot){
        mount(devRoot, {
            defaultHistory: createBrowserHistory(),
        });
    }
}
export { mount};