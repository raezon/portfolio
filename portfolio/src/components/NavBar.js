
import React, { useState, useEffect } from "react";
import './NavBar.css';
import { NavLink } from "react-router-dom";
class NavBar extends React.Component{
  constructor(props){
    super(props);
    this.state={
      sideBar: false
    }

    this.handleSidebar = this.handleSidebar.bind(this);
  }

  handleSidebar(){
    this.setState({
      sideBar : !this.state.sideBar
    });
  }

  render(){
    return(
      <div>
        <header className="header">
          <div className="navContainer">
            <span className="logo" style={{color:"#fff"  , fontStyle:"italic" , fontWeight:"400"}}></span>
            <nav>
              <ul
                className="mainNav"
                style={this.state.sideBar ? { transform: "translateX(0)" } : null}
                >
                <li>
                  <NavLink
                    to="/"
                    exact
                    activeClassName="text-white"
                    className="inline-flex  mainNavLink items-center py-3 px-3 mr-4 text-red-100 hover:textColored text-4xl font-bold cursive tracking-widest"
                  >
                About Me 
                </NavLink>
                </li>
                <li>
                <NavLink
                to="/resume"
                activeClassName="text-red-100"
                className="inline-flex mainNavLink items-center py-3 px-3 my-6 rounded text-red-200 hover:textColored"
              >
                Resume
              </NavLink>
                </li>
                <li>
                <NavLink
                to="/post"
                activeClassName="text-red-100 "
                className="inline-flex mainNavLink items-center py-3 px-3 my-6 rounded text-red-200 hover:textColored"
              >
                Blog Posts
              </NavLink>
                </li>
                <li>
                <NavLink
                  to="/project"
                  activeClassName="text-red-100 "
                  className="inline-flex mainNavLink items-center py-3 px-3 my-6 rounded text-red-200 hover:textColored"
                >
                  Projects
                </NavLink>
                </li>
              </ul>
            </nav>
            <button
              onClick = {this.handleSidebar}
              className={`navToggle ${this.state.sideBar ? "open" : null}`}>
              <span />
              <span />
              <span />
            </button>
            <div
              onClick={this.handleSidebar.bind(this)}
              className={`overlay ${this.state.sideBar ? "open" : ""}`}
              />
          </div>
        </header>
        <div className ="wrapper"></div>
      </div>

    );
  }

}



export default NavBar;