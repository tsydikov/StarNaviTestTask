import React from "react";

const Alert = (props) => {
    return(
        <div className="col">
        <h1>Hover Squares</h1>
          {props.alerts.map((alert) => <div 
                  key={alert.id}  
                  className="alert alert-warning"
                  role="alert" 
                >{props.alert.id}</div>)}
      </div>   
    )
}

export default Alert;