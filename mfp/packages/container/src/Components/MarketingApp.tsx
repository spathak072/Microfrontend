// @ts-ignore
import {mount} from "marketing/Marketing"
import React, {useRef, useEffect} from 'react'

const MarketingApp = () => {
const ref = useRef(null);
    useEffect(() => {
        mount(ref.current)
    }, []);
return <div ref={ref}>

</div>
}

export default MarketingApp;