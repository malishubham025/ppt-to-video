import React, { useState } from 'react';
import Left from './left';
import Right from './right';


function Panel() {
    const [loader, setLoader] = React.useState(false);

    React.useEffect(() => {
        setLoader(true);
        setTimeout(() => {
            setLoader(false);
        }, 5000);
    }, []);

    const updateLoader = (value) => {
        setLoader(value);
    };

    return (
        <div className="main">
            <div style={{ width: "25%" }}><Left /></div>
            <div style={{ width: "63.5%", position: "relative" }}>
                {/* {loader ?  :} */}
                <Right/>
            </div>
        </div>
    );
}

export default Panel;
