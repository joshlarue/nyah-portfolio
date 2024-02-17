import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header(props) {

  return (
    <nav className="header">
      <ul className={ props.transition ? "header-item-container active" : props.transitionBack ? "header-item-container na" : "header-item-container" }>
        <li className={ props.transition ? "header-item active" : props.transitionBack ? "header-item na" : "header-item" }><Link to="/">home</Link></li>
        <li className={ props.transition ? "header-item active" : props.transitionBack ? "header-item na" : "header-item" }><Link to="/portfolio">portfolio</Link></li>
        <li className={ props.transition ? "header-item active" : props.transitionBack ? "header-item na" : "header-item" }><Link to="/about">about</Link></li>
        <li className={ props.transition ? "header-item active" : props.transitionBack ? "header-item na" : "header-item" }><Link to="/contact">contact</Link></li>
      </ul>
    </nav>
  )
}