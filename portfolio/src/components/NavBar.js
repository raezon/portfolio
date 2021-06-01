import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
  return (
    <header style={{"background": 'linear-gradient(to left, #F2709C, #FF9472)'}}>
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
          >
           About Me 
          </NavLink>
          <NavLink
            to="/resume"
            activeClassName="text-red-100"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
          >
            Resume
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="text-red-100 "
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-red-100 "
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
          >
            Projects
          </NavLink>

        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://twitter.com/ammar97365153"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.youtube.com/channel/UC2G92GxjboknQZYvs-7ObUg"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/ammar-djebabla-519030190/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}