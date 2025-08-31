import React from "react";
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import MarketingApp from "./Components/MarketingApp";
import AuthApp from "./Components/AuthApp";
import './index.css'



const App=()=>{
console.log("App is rendering");
    return <BrowserRouter>
        <header className="App-header">
            <Link to={"/"}>App</Link>
            <Link to={"/auth/signin"}>Login</Link>
        </header>

    <hr/>

        <Switch>
            <Route  path="/auth" component={AuthApp}/>
            <Route path="/" component={MarketingApp}/>
        </Switch>
    </BrowserRouter>
}

export default App;