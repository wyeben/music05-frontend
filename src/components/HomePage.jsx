import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome To 23vibez</h1>
      <h5>The Music Encyclopaedia</h5>
      <Link to="/songs">
        <button>View Songs</button>
      </Link>
      <h6>
      <Link to="/add-song">
        <button>Upload Your Songs</button>
      </Link>
      </h6>
      {/* <div className="welcome-page"> */}
      <div className="guitar"></div>
     {/* </div> */}
    </div>
  );
}

export default HomePage;
