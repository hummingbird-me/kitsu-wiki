import React, { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = (): ReactElement => {
  const [addDropdownOpen, setAddDropdownOpen] = useState(false);
  const [editDropdownOpen, setEditDropdownOpen] = useState(false);

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">What would you like to do?</h1>
        <p className="lead">Select an action below to get started.</p>
        <hr className="my-4" />
        <div className="btn-group">
          <div className={`dropdown-menu${addDropdownOpen ? ' show' : ''}`}>
            <Link to="/anime/add" className="dropdown-item">
              Anime
            </Link>
          </div>
        </div>
        <div className="btn-group">
          <div className={`dropdown-menu${editDropdownOpen ? ' show' : ''}`}>
            <Link to="/media" className="dropdown-item">
              Media
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
