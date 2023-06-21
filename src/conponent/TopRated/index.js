import React, { useEffect, useState } from 'react';
import axios from "axios";
import { API_KEY } from "../../API";
import MovieCard from "../MoviCard";

const TopRated = () => {
    const [topRated, setTopRated] = useState([]);

    const getTopRated = (key) => {
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`)
            .then(res => setTopRated(res.data.results))
            .catch(error => console.log(error));
    };

    useEffect(() => {
        getTopRated(API_KEY);
    }, []);

    return (
        <div id="topRated">
            <div className="container">
                <div className="topRated">
                    {topRated.map(el => <MovieCard key={el.id} el={el} />)}
                </div>
            </div>
        </div>
    );
};

export default TopRated;







