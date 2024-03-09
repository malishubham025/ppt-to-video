import React from "react";
import BarLoader    from "react-spinners/BarLoader";

function Loader(props){
    return(
        <div className="loader">
            <div>
                <h1 className="loader-name">{props.name}</h1>
            </div>
            <BarLoader   
        color={"gray"}
        
       
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

        </div>
    );
};
export default Loader;