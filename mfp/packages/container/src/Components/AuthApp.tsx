import {FC, useEffect, useRef} from "react";
import {mount} from "mfAuth/AuthApp"
import React from "react";
import {useHistory} from "react-router-dom";

const AuthApp:FC = () => {
    const mfAuthAppRef = useRef(null);
const history  = useHistory();
    useEffect(() => {
        const {onParentNavigation } =mount(mfAuthAppRef.current,{
            onNavigation:(location:Location)=>{
                if(history.location.pathname !== location.pathname) history.replace(location.pathname,"/");
            },
            initialPath: history.location.pathname,
        });
        history.listen(onParentNavigation);
    }, []);

    return <div ref={mfAuthAppRef}/>
}
export default AuthApp;