import React from 'react';
import { NavLink } from 'react-router-dom';

const SavedList = props => {

  // let homeFunc = event => {
  //   //event.preventDefault();
  //   props.history.push('/');
  // }
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <NavLink className='navlinks' to={`/movies/${movie.id}`}>
          <span className="saved-movie">{movie.title}</span>
        </NavLink>
      ))}
      <NavLink className="navlinks" to="/">
        <div className="home-button">Home</div>
      </NavLink>
    </div>
  );
}

export default SavedList;
