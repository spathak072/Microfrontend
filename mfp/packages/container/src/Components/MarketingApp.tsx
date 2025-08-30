// @ts-ignore
import {mount} from "marketing/Marketing"
import React, {useRef, useEffect} from 'react'
import {useHistory} from "react-router-dom";


const MarketingApp = () => {
    const history = useHistory();
const ref = useRef(null);
    useEffect(() => {
        const  {onParentNavigation} =mount(ref.current,{
            onNavigate:(location:Location)=>{
                if(history.location.pathname !== location.pathname  ) history.push(location.pathname);
                console.log(location.pathname);
                console.log("Container notice navigation in Marketing App.")
            }
        })
        history.listen(onParentNavigation)
    }, []);
return <div ref={ref}>

</div>
}

export default MarketingApp;