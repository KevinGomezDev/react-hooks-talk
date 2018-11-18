import React from 'react';

const MovieDetail = (props) => <div className='content-detail'>
  <img
    src='https://m.media-amazon.com/images/M/MV5BMzIwMzUyYTUtMjQ3My00NDc3LWIyZjQtOGUzNDJmNTFlNWUxXkEyXkFqcGdeQXVyMjA0MDQ0Mjc@._V1_UX182_CR0,0,182,268_AL_.jpg' 
    alt='Movie'/>
    <div className='content'>
      <div className='title'>{props.title}</div>
      <div className='summary'>{props.summary}</div>
      <div className='rating'>{props.rating}</div>
    </div>
</div>

export default MovieDetail