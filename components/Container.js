import React, { useEffect } from "react";

function Container(props) {
  return (
    <div
      className={"container " + (props.wide ? "" :"")}
    >
      {props.children}
    </div>
  );
}

export default Container;
