import React from 'react';
import {Link} from "react-router-dom";

const MovieCard = ({el}) => {
    return (
        <div id='movieCard'>
            <div className="movieCard">
                <Link to={`/movie/details/${el.id}`}>
                    <img className='img' src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`} alt=""/>
                </Link>
                <h3>{el.title}</h3>
                <h4>{el.release_date}</h4>

            </div>
        </div>
    );
};

export default MovieCard;