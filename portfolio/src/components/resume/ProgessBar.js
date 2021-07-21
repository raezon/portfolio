import React, {  useEffect } from "react";
import  './ProgressBar.css';


 const ProgressBar = ({done,title}) => {
	const [style, setStyle] = React.useState({});
	
    useEffect(() => {
        const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		setStyle(newStyle);
      },[]);
	
	
	return (
		<div className="progress ">
			<div className="progress-done pl-12" style={style}>
                
                <div className="absolute left-0 top-0  w-16 px-2 pt-1">
               
                    <i className={title}></i>
               
                </div>
               
                <div className="px-40">
                  {done}%
                  
                </div>
				
			</div>
		</div>
	)
}

export default ProgressBar;