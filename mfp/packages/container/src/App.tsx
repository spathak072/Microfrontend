import React from "react";
import {BrowserRouter, Link} from 'react-router-dom'
import MarketingApp from "./Components/MarketingApp";



const App=()=>{
console.log("App is rendering");
    return <BrowserRouter><Link to={"/"}>App</Link>
    <hr/>
        <MarketingApp/>
    </BrowserRouter>
}

export default App;