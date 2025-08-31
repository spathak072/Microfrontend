import React, {lazy, Suspense} from "react";
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import './index.css'

const MarketingAppLazy = lazy(()=>import("./Components/MarketingApp"));
const AuthAppLazy = lazy(()=>import("./Components/AuthApp"));

const App=()=>{
console.log("App is rendering");
    return <BrowserRouter>
        <header className="App-header">
            <Link to={"/"}>App</Link>
            <Link to={"/auth/signin"}>Login</Link>
        </header>

    <hr/>
<Suspense fallback={<div>Loading...</div>}>
        <Switch>
            <Route  path="/auth" component={AuthAppLazy}/>
            <Route path="/" component={MarketingAppLazy}/>
        </Switch>
</Suspense>
    </BrowserRouter>
}

export default App;