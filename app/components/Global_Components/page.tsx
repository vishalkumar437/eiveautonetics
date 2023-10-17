import React from "react";

const Button = (props:any) => {
  return (
    <button className="btn" onClick={props.click}>
      {props.content}
    </button>
  );
}

export default Button;
