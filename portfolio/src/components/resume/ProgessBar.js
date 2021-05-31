import React, { useState, useEffect } from "react";
import  './ProgressBar.css';
import DevIcon from "devicon-react-svg";
const devIconStyle = {
    fill: "thistle",
    width: "30px",
};
 const ProgressBar = ({done,title}) => {
	const [style, setStyle] = React.useState({});
	
    useEffect(() => {
        const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		setStyle(newStyle);
      }, []);
	
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}>
                
                <div className="absolute left-0 top-0 h-16 w-16 ">
                    <DevIcon icon={title} style={devIconStyle} viewBox="0 0 32 32"/>
                </div>
               
                <div className="px-40">
                  {done}%
                </div>
				
			</div>
		</div>
	)
}

export default ProgressBar;