import React from "react";

/*
home
experience
skills
education
projects
connect
*/

const Header = () => {
  return (
    <ul className="flex space-x-6 p-4">
      <li>
        <a href="#home" className="hover:text-blue-600">
          home
        </a>
      </li>
      <li>
        <a href="#experience" className="hover:text-blue-600">
          experience
        </a>
      </li>
      <li>
        <a href="#skills" className="hover:text-blue-600">
          skills
        </a>
      </li>
      <li>
        <a href="#education" className="hover:text-blue-600">
          education
        </a>
      </li>
      <li>
        <a href="#projects" className="hover:text-blue-600">
          projects
        </a>
      </li>
      <li>
        <a href="#contact" className="hover:text-blue-600">
          contact
        </a>
      </li>
      <li>
        <a href="/resume" className="hover:text-blue-600">
          resume
        </a>
      </li>
      <li>
        <a href="/portfolio" className="hover:text-blue-600">
          portfolio
        </a>
      </li>
    </ul>
  );
};

export default Header;
