import React from "react";

function Left({ topicName }) {
    React.useEffect(() => {
        const checkAndAnimate = () => {
          const headingElement = document.querySelector(".logo");
          
          if (headingElement) {
            // Apply styling once the element is found
            headingElement.classList.add("after");
          } else {
            // If element not found, wait for a short delay and then check again
            setTimeout(checkAndAnimate, 100);
          }
        };
      
        // Initial check
        checkAndAnimate();
      }, []);
      
    return (
        <div className="left">
            <div className="logo">
                <div className='logo-div-one'>
                    <img src="images/Designer.png" alt="" />
                </div>
                <div>
                    <h2 className='logo-heading' >VisualAi</h2>
                </div>
            </div>
            <div className="topicnames">
                {topicName && <div>{topicName}</div>}
            </div>
        </div>
    );
}

export default Left;
