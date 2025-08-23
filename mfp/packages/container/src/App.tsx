import React from "react";
import {BrowserRouter} from 'react-router-dom'
import MarketingApp from "./Components/MarketingApp";



const App=()=>{
console.log("App is rendering");
    return <BrowserRouter><h1>Hi There test webhooks</h1>
    <hr/>
        <MarketingApp/>
    </BrowserRouter>
}

export default App;