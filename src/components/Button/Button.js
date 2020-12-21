import React from "react";

import "./Button.css";

const Button = (props) => {
  var goToDetails = function (ev) {
    var id = ev.target.value;
    console.log(id);
  };

  return (
    <button className="button" value={props.id} onClick={goToDetails}>
      Info
    </button>
  );
};

export default Button;
