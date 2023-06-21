import React, { useEffect, useState } from "react";
import { API_KEY } from "../../API";
import axios from "axios";
import MoviCard from "../MoviCard";

const Popular = () => {
    const [popular, setPopular] = useState([]);

    const getPopular = (key) => {
        axios
            .get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
            .then((res) => setPopular(res.data.results))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getPopular(API_KEY);
    }, []);

    return (
        <div id="popular">
            <div className="container">
                <div className="popular">
                    {
                        popular.map((el) => (<MoviCard key={el.id} el={el} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Popular;
