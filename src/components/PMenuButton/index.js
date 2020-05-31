import React, { Component } from "react";

export default class pMenuButton extends Component {
  render() {
    const { to, colorfull, text } = this.props;

    const tempClassName = [];

    tempClassName.push("menu-btn");

    tempClassName.push(this.props.className);

    return (
      <a
        onClick={this.props.onClick}
        href={to}
        className={tempClassName.join(" ")}
        data-section="about"
      >
        <span className="lines">
          <span className="l1" />
          <span className="l2" />
          <span className="l3" />
        </span>
        {text}
      </a>
    );
  }
}
