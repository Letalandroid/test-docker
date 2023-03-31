import React from "react";

export default function Header () {
  return (
    <header>
      <nav className="navbar bg-light">
        <div className="container-fluid justify-content-center">
          <a
            className="navbar-brand m-0 py-2 d-flex align-items-center fs-3 h1"
            href="/"
          >
            <img
              src="https://cdn3.iconfinder.com/data/icons/social-media-logos-flat-colorful/2048/5338_-_iTunes-512.png"
              alt=""
              width="40"
              height="40"
              className="d-inline-block align-text-top"
            />
            Upload your music!
          </a>
        </div>
      </nav>
    </header>
  );
}
