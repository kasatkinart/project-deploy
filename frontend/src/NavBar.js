// NavBar.js
import React from 'react';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="/">МойСайт</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/">Главная</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contractors">Подрядчики</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">О нас</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contacts">Контакты</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
