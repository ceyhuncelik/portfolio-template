import React, { Component } from "react";
function IntoTextField(props) {
  return <div className="intro-text">{props.children}</div>;
}
export default IntoTextField;

// wrapper componnet example or parent component example
//class ı intro text olanlar için gecerli yalnızca header ya da paragraph için değil
