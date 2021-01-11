import React, { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = (): ReactElement => {
  const [addDropdownOpen, setAddDropdownOpen] = useState(false);
  const [editDropdownOpen, setEditDropdownOpen] = useState(false);

  return (
    <div>
      <div>
        <h1>What would you like to do?</h1>
        <p>Select an action below to get started.</p>
        <hr />
        <div>
          <div className={`dropdown-menu${addDropdownOpen ? ' show' : ''}`}>
            <Link to="/anime/add" className="dropdown-item">
              Anime
            </Link>
          </div>
        </div>
        <div>
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
